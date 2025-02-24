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

			if (value[index].save?.description && data?.save) {
				value[index].save.description = data.save;
			}
			if (value[index].target?.value && data?.target) {
				value[index].target.value = data.target;
			}
			if (data?.area) {
				value[index].area = data.area;
			}
			if (data?.effect) {
				value[index].effect = data.effect;
			}
			if (data?.effectNotes) {
				value[index].effectNotes = data.effectNotes;
			}
		});
		return value;
	}
}

export default new Converters();
