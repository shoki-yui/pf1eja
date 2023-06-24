// Credits to https://github.com/DjLeChuck
// https://github.com/DjLeChuck/foundryvtt-pf1-fr-babele/blob/main/scripts/converters.js
//
// Copyright (c) 2022 Vivien DE BONA
//
// Released under the MIT license.
// see https://opensource.org/licenses/MIT

class Converters {
  usePf2eTokensBestiaries = false;

  actions(value, translations) {
    if (!translations) {
      return value;
    }

    value.forEach((type, index) => {
      const data = translations[index];

      value[index].duration.value = data.duration;
      value[index].effectNotes = data.effectNotes;
      value[index].save.description = data.save;
      value[index].spellArea = data.spellArea;
      value[index].spellEffect = data.spellEffect;
      value[index].target.value = data.target;
    });

    return value;
  }
  
  pf2TokensBestiaries(value, translations) {
    return this.usePf2eTokensBestiaries ? translations : value;
  }
}

export default new Converters();
