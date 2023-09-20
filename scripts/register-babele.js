// Credits to https://github.com/DjLeChuck
// https://github.com/DjLeChuck/foundryvtt-pf1-fr-babele/blob/main/scripts/register.js
//
// Copyright (c) 2022 Vivien DE BONA
//
// Released under the MIT license.
// see https://opensource.org/licenses/MIT

import converters from './converters.js';

Hooks.on('init', () => {
  game.settings.register('pf1eja', 'autoRegisterBabel', {
    name: 'PF1eの辞典を日本語化する',
    hint: 'Babele MODの機能で辞典が日本語になります。（デフォルトはオン）',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    onChange: value => {
      if (value) {
        autoRegisterBabel();
      }

      window.location.reload();
    },
  });

  game.settings.register('pf1eja', 'usePf2eTokensBestiaries', {
    name: 'Pathfinder Token Pack: Bestiariesの画像を使用する',
    hint: 'Bestiary辞典の画像をPathfinder Token Pack: Bestiariesに置き換えます。Pathfinder Token Pack: Bestiariesを購入しインストールしないと使えません。（デフォルトはオフ）',
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
    onChange: () => window.location.reload(),
  });

  converters.usePf2eTokensBestiaries = game.settings.get('pf1eja', 'usePf2eTokensBestiaries');

  Babele.get().registerConverters({
    'actions': (value, translations) => converters.actions(value, translations),
    'pf2TokensBestiaries': (value, translations) => converters.pf2TokensBestiaries(value, translations),
  });

  if (game.settings.get('pf1eja', 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

function autoRegisterBabel() {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'pf1eja',
      lang: 'ja',
      dir: 'compendium',
    });
  }
}


