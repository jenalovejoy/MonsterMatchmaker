import { Ability } from "./Ability";
import { Action } from "./Action";

export type alignment = "lawful good" | "lawful neutral" | "lawful evil" | 
                        "neutral good" | "neutral neutral" | "neutral evil" |
                        "chaotic good" | "chaotic neutral" | "chaotic evil";

export type size = "Small" | "Medium" | "Large";

export interface MonsterDetails {
    "_id": string,
	"index": number,
	"name": string,
	"size": size,
	"type": string,
	"subtype": string,
	"alignment": alignment,
	"armor_class": number,
	"hit_points": number,
	"hit_dice": string,
	"speed": string,
    "strength": number,
	"dexterity": number,
	"constitution": number,
	"intelligence": number,
	"wisdom": number,
	"constitution_save": number,
	"intelligence_save": number,
	"wisdom_save": number,
	"history": number,
	"perception": number,
	"damage_vulnerabilities": string,
	"damage_resistances": string,
	"damage_immunities": string,
	"condition_immunities": string,
	"senses": string,
	"languages": string,
	"challenge_rating": number,
	"special_abilities": Ability[],
	"actions": Action[],
	"legendary_actions": Action[],
	"url": string
}
