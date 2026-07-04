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
		// If translations is missing or empty, just return the original value
		if (!translations) {
			return value;
		}

		value.forEach((type, index) => {
			// Get the translation data for the corresponding item
			const data = translations[index];
			
			// If there's no data for this particular item, skip safely
			if (!data) {
				return;
			}
			
			// Now it's safe to rely on data.*
			value[index].name = data?.name || game.i18n.localize(`PF1.${value[index].name}`);

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
			
			// Handle conditionals if they exist
			if (value[index].conditionals && value[index].conditionals.length > 0) {
				value[index].conditionals.forEach((conditional, idx) => {
					const tConditional = data.conditionals?.[idx];
					// Make sure tConditional exists before using it
					if (tConditional) {
						conditional.name = tConditional.name;
					}
				});
			}

			// Safely update notes
			if (
				value[index].notes?.effect &&
				value[index].notes.effect.length > 0 &&
				data?.effectNotes?.length > 0
			) {
				value[index].notes.effect = data.effectNotes;
			}
			if (
				value[index].notes?.footer &&
				value[index].notes.footer.length > 0 &&
				data?.footNotes?.length > 0
			) {
				value[index].notes.footer = data.footNotes;
			}
		});
		return value;
	}
	
	contextNotes(originalContextNotes, translatedContextNotes) {
		if (originalContextNotes.length > 0) {
			const ctxNotesWithText = originalContextNotes.filter((ctxNote) =>
			Object.prototype.hasOwnProperty.call(ctxNote, "text")
			);
			if (translatedContextNotes?.length !== ctxNotesWithText.length) {
				logger(
					`There are missing context notes translations -> ${translatedContextNotes?.length || 0}/${ctxNotesWithText.length}`
				);
				return originalContextNotes;
			}
		}

		originalContextNotes.forEach((_obj, index, _contextNotes) => {
			const data = translatedContextNotes[index];
			originalContextNotes[index].text = data.text;
		});

		return originalContextNotes;
	};
}

export default new Converters();
