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
			if (value[index].range?.value && data?.range) {
				value[index].range.value = data.range;
			}
			if (value[index].area && data?.area) {
				value[index].area = data.area;
			}
			if (value[index].effect && data?.effect) {
				value[index].effect = data.effect;
			}
			if (value[index].notes?.effect && data?.effectNotes) {
				value[index].notes.effect = data.effectNotes;
			}
		});
		return value;
	}
}

export default new Converters();
