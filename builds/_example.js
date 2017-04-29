{ // The file extension should be .json, this one is simply renamed to .js in order to allow comments
	"title": "Your build title",
	"author": "Your name",
	"link": "https://yourwebsitelink.com", // [OPTIONAL]
	"date": "29/04/2017", // The date you last updated the build (content wise)
	"patch": "1.6", // The patch this build is for [OPTIONAL]
	"tags": ["tag1", "tag2", "tag3"], // Tags: "pvp", "pve", "dps", "healer", "tank" etc.
	"build": {
		"weapons": {
			"primary": {
				"name": "Lightweight M4", // Primary weapon name
				"text": "Competent, Brutal, Unforgiving", // Weapon talents & info
				"icon": "m4", // Weapon icon
				"talent1": "competent", // First talent
				"talent2": "brutal", // Second talent
				"talent3": "unforgiving" // Third (free) talent
			},
			"secondary": {
				"name": "MP7", // Secondary weapon name
				"text": "Competent, Fierce, Unforgiving", // Weapon talents & info
				"icon": "mp7", // Weapon icon
				"talent1": "competent", // First talent
				"talent2": "fierce", // Second talent
				"talent3": "unforgiving" // Third (free) talent
			}
		},
		"gear": {
			"items": { // Gear pieces
				"chest": {
					"name": "Vigorous Chest", // Chest name/type
					"text": "Health, Skill Haste, Burn Resistance", // Chest rolls
					"type": "he", // Type: "he", "exotic" or "gearset"
					"icon": "chest" // "chest" if he/exotic, else gearset name
				},
				"backpack": {
					"name": "Specialized Backpack", // Backpack name/type
					"text": "Health, Burn Resistance", // Backpack rolls
					"type": "he", // Type: "he", "exotic" or "gearset"
					"icon": "backpack" // "backpack" if he/exotic, else gearset name
				},
				"mask": {
					"name": "Tenacious Mask", // Mask name/type
					"text": "Health, Burn Resistance", // Mask rolls
					"type": "he", // Type: "he", "exotic" or "gearset"
					"icon": "mask" // "chemaskst" if he/exotic, else gearset name
				},
				"gloves": {
					"name": "Skulls MC Gloves", // Gloves name/type
					"text": "Assault Rifle Damage, SMG Damage, Critical Hit Chance", // Gloves rolls
					"type": "exotic", // Type: "he", "exotic" or "gearset"
					"icon": "gloves" // "gloves" if he/exotic, else gearset name
				},
				"holster": {
					"name": "Nimble Holster", // Holster name/type
					"text": "Health", // Holster rolls
					"type": "he", // Type: "he", "exotic" or "gearset"
					"icon": "holster" // "holster" if he/exotic, else gearset name
				},
				"knee-pads": {
					"name": "Shortbow Championship Knee Pads", // Knee Pads name/type
					"text": "Health, Burn Resistance, Shock Resistance, Disrupt Resistance", // Knee Pads rolls
					"type": "exotic", // Type: "he", "exotic" or "gearset"
					"icon": "knee-pads" // "knee-pads" if he/exotic, else gearset name
				}
			},
			"stats": {
				"main-stats": { // Main stat rolls on your gear pieces (Chest, Backpack, mask, Gloves, Knee pads => Total: 5)
					"4x": { // Amount of this type of roll
						"name": "Firearms Roll", // Firearms, Stamina or Electronics roll?
						"icon": "firearms" // icon of the main stat
					},
					"1x": { // Amount of this type of roll
						"name": "Electronics Roll", // Firearms, Stamina or Electronics roll?
						"icon": "electronics" // icon of the main stat
					}
				},
				"mods": { // Main stat mods on your gear (2x Chest, 1x Backpack, 1x Mask, 1x Knee Pads => Total: 5)
					"5x": { // Amount of this type of Mod
						"name": "Firearms Mod", // Mod name
						"text": "Health", // Mod roll
						"icon": "firearms" // Icon of the mods main stat
					}
				},
				"performance": { // Performance mods on your gear (2x Backpack, 1x Holster, 1x Knee Pads => Total: 4)
					"4x": { // Amount of this type of Performance Mod
						"name": "First Aid Self Heal Mod", // Performance mod name
						"icon": "first-aid" // Icon of the skill you modify
					}
				}
			}
		},
		"skills": {
			"1": {
				"name": "First Aid", // Skill name
				"text": "Booster Shot", // Skill mod
				"icon": "booster-shot" // Skill icon
			},
			"2": {
				"name": "Pulse", // Skill name
				"text": "Scrambler", // Skill mod
				"icon": "scrambler" // Skill icon
			},
			"link": {
				"name": "Survivor Link", // Link name
				"icon": "survivor-link" // Link icon
			}
		}
	}
}
