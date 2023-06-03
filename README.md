![](https://img.shields.io/badge/Foundry-v10-informational)
<!--- Downloads @ Latest Badge -->
<!--- replace <user>/<repo> with your username/repository -->
<!--- ![Latest Release Download Count](https://img.shields.io/github/downloads/<user>/<repo>/latest/module.zip) -->

<!--- Forge Bazaar Install % Badge -->
<!--- replace <your-module-name> with the `name` in your manifest -->
<!--- ![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2F<your-module-name>&colorB=4aa94a) -->



# DND5E Scriptlets
This module provides a few QOL features for dnd5e that don't really fit anywhere else.

## Ammunition Selector.
When enabled, any time a weapon with ammo is used a dialog appears prompting you to choose the ammunition to use. If there is no suitable ammunition the weapon roll is blocked. This version does not require midi-qol, just dnd5e. Enabling is a client setting so each player can choose to enable it. Thanks @Lukas and @Krigsmaskine

## Lukas' Character Sheet Filter
This provides a filter field on character sheets to filter (by name) items/spells/features. Thanks @Lukas

## Lukas' Fade Unprepared Spells
Spells that are not prpepared are faded out on display. Thanks @Lukas

## Lukas' Item rarity colors.
Color item inventory lines according to the item's rarity. Thanks @Lukas

## Changelog
### 0.3
* Fix for doing late targeting twice (if using midi-qol)