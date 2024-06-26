import { systemString } from "./module.js";
export function setupAutoRollUnlinkedHP() {
  Hooks.on("preCreateToken", (tokenDocument, data, options, userId) => {
    if (game.settings.get("dnd5e-scriptlets", "autoRollUnlinkedHP") === "none") return;
    const actor = tokenDocument.actor;
    if (!actor || data.actorLink) return true;

    const hpRoll = {};
    _rollHP(hpRoll, actor);
    if (!isEmpty(hpRoll)) tokenDocument.updateSource(hpRoll);
    return true;
  });

  function _rollHP(data, actor) {
    const hpProperties = {
      dnd5e: "system.attributes.hp.formula",
      dcc: "system.attributes.hitDice.value",
      sw5e: "system.attributes.hp.formula"
    };

    const formula = foundry.utils.getProperty(actor, hpProperties[systemString]);
    if (!hpProperties[systemString]) return undefined;

    if (formula) {
      const r = new Roll(formula.replace(" ", ""));
      r.roll({ async: false });
      // Make sure hp is at least 1
      const val = Math.max(r.total, 1);
      if (foundry.utils.isNewerVersion(game.version, "11.0")) {
        foundry.utils.setProperty(data, "delta.system.attributes.hp.value", val);
        foundry.utils.setProperty(data, "delta.system.attributes.hp.max", val);
      } else {
        foundry.utils.setProperty(data, "actorData.system.attributes.hp.value", val);
        foundry.utils.setProperty(data, "actorData.system.attributes.hp.max", val);
      }
      if (game.settings.get("dnd5e-scriptlets", "autoRollUnlinkedHP") === "rollOnly") return;
      Hooks.once("createToken", (token, options, userId) => {
        if (userId !== game.user.id) return;
        ChatMessage.create({
          content: `@UUID[${token.uuid}]{${token.name}}'s HP set to ${val}`,
          whisper: [game.user.id],
        });
      });
    } else ui.notifications.warn("Can not randomize hp. HP formula is not set.");
    return;
  }
}
