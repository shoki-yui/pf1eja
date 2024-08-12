// Credits to https://github.com/DjLeChuck
// https://github.com/DjLeChuck/foundryvtt-pf1-fr-babele/blob/main/scripts/converters.js
//
// Copyright (c) 2022 Vivien DE BONA
//
// Released under the MIT license.
// see https://opensource.org/licenses/MIT
//
// Credits to https://gitlab.com/arkanamirium
// https://gitlab.com/arkanamirium/foundryvtt-pf1e-de/-/blob/develop/scripts/converters.js

class Converters {
	actions(value, translations) {
		if (!value || !translations) {
			return value;
		}

		value.forEach((type, index) => {
			const data = translations[index];

			if (value[index].duration?.value && data?.duration) {
				value[index].duration.value = data.duration;
			}
			if (value[index].save?.description && data?.save) {
				value[index].save.description = data.save;
			}
			if (value[index].target?.value && data?.target) {
				value[index].target.value = data.target;
			}
			if (data?.area) {
				value[index].area = data.area;
			}
			if (data?.spellEffect) {
				value[index].spellEffect = data.spellEffect;
			}
			if (data?.effectNotes) {
				value[index].effectNotes = data.effectNotes;
			}
		});
		return value;
	}

	translateSubSchool(subschool) {
		const subSchoolMap = new Map([
			["calling", "招請"],
			["charm", "魅惑"],
			["compulsion", "強制"],
			["creation", "創造"],
			["figment", "虚像"],
			["glamer", "幻覚"],
			["haunted", "霊障"],
			["healing", "治癒"],
			["pattern", "紋様"],
			["phantasm", "惑乱"],
			["polymorph", "ポリモーフ"],
			["scrying", "念視"],
			["shadow", "操影"],
			["summoning", "招来"],
			["teleportation", "瞬間移動"]
		]);
		subSchoolMap.forEach((translation, original) => {
			subschool = subschool.replace(original, translation);
		});
		return subschool;
	}
}

export default new Converters();
