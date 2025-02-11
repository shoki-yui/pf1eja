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
		hint: 'Babele MODの機能で辞典が日本語になります（デフォルトはオン）。原文を確認したい際などにオフにしてください。',
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

// Credits to https://gitlab.com/arkanamirium
// https://gitlab.com/arkanamirium/foundryvtt-pf1e-de/-/blob/develop/scripts/babele.js
	Babele.get().registerConverters({
		'actions': (value, translations) => converters.actions(value, translations),
		learnedAt: (learnedAt) => {
			const domainsMap = new Map([
				["Air", "風"],
				["Animal", "動物"],
				["Artifice", "工匠"],
				["Chaos", "混沌"],
				["Charm", "魅了"],
				["Community", "共同体"],
				["Darkness", "闇"],
				["Death", "死"],
				["Destruction", "破壊"],
				["Earth", "地"],
				["Evil", "悪"],
				["Fire", "火"],
				["Glory", "栄光"],
				["Good", "善"],
				["Healing", "治癒"],
				["Knowledge", "知識"],
				["Law", "秩序"],
				["Liberation", "解放"],
				["Luck", "幸運"],
				["Madness", "狂気"],
				["Magic", "魔術"],
				["Nobility", "高貴"],
				["Plant", "植物"],
				["Protection", "守護"],
				["Repose", "安息"],
				["Ruins", "Ruins"],
				["Rune", "ルーン"],
				["Scalykind", "鱗持つもの"],
				["Strength", "力"],
				["Sun", "太陽"],
				["Travel", "旅"],
				["Trickery", "欺き"],
				["Vermin", "Vermin"],
				["Void", "虚空"],
				["War", "戦"],
				["Water", "水"],
				["Weather", "天候"]
			]);
			domainsMap.forEach((translation, original) => {
				if (learnedAt.domain?.hasOwnProperty(original)) {
					learnedAt.domain[translation] = learnedAt.domain[original];
					delete learnedAt.domain[original];
				}
			});

// Credits to https://gitlab.com/arkanamirium
// https://gitlab.com/arkanamirium/foundryvtt-pf1e-de/-/blob/develop/scripts/babele.js
			const subDomainsMap = new Map([
				["Aeon", "Aeon"],
				["Agathion", "アガシオン"],
				["Alchemy", "Alchemy"],
				["Ambush", "Ambush"],
				["Ancestors", "祖先"],
				["Arcane", "秘術"],
				["Archon", "アルコン"],
				["Aristocracy", "Aristocracy"],
				["Arson", "Arson"],
				["Ash", "灰"],
				["Azata", "アザータ"],
				["Blood", "血"],
				["Cannibalism", "Cannibalism"],
				["Captivation", "Captivation"],
				["Catastrophe", "災害"],
				["Caves", "洞窟"],
				["Chivalry", "Chivalry"],
				["Cloud", "雲"],
				["Competition", "Competition"],
				["Construct", "人造"],
				["Cooperation", "Cooperation"],
				["Corruption", "Corruption"],
				["Curse", "呪い"],
				["Daemon", "ダイモン"],
				["Dark Tapestry", "Dark Tapestry"],
				["Day", "昼"],
				["Decay", "腐敗"],
				["Deception", "騙し"],
				["Defense", "防御"],
				["Demodand", "Demodand"],
				["Demon", "デーモン"],
				["Devil", "デヴィル"],
				["Divine", "信仰"],
				["Dragon", "ドラゴン"],
				["Duels", "Duels"],
				["Education", "Education"],
				["Entropy", "エントロピー"],
				["Espionage", "Espionage"],
				["Exploration", "探検"],
				["Family", "家族"],
				["Fate", "運命"],
				["Fear", "恐怖"],
				["Feather", "羽毛"],
				["Ferocity", "凶暴"],
				["Fist", "Fist"],
				["Flotsam", "Flotsam"],
				["Flowing", "Flowing"],
				["Fortifications", "Fortifications"],
				["Freedom", "自由"],
				["Friendship", "Friendship"],
				["Fur", "毛皮"],
				["Greed", "Greed"],
				["Growth", "成長"],
				["Hatred", "Hatred"],
				["Heroism", "勇気"],
				["Home", "家"],
				["Honor", "名誉"],
				["Hubris", "Hubris"],
				["Ice", "氷"],
				["Imagination", "Imagination"],
				["Industry", "Industry"],
				["Inevitable", "イネヴァタブル"],
				["Innuendo", "Innuendo"],
				["Insanity", "錯乱"],
				["Insect", "Insect"],
				["Isolation", "孤立"],
				["Judgment", "審判"],
				["Kyton", "Kyton"],
				["Language", "言語"],
				["Leadership", "指導者"],
				["Legend", "Legend"],
				["Legislation", "Legislation"],
				["Leshy", "Leshy"],
				["Light", "光"],
				["Lightning", "Lightning"],
				["Loss", "損失"],
				["Love", "愛"],
				["Loyalty", "Loyalty"],
				["Lust", "色欲"],
				["Martyr", "殉教者"],
				["Medicine", "Medicine"],
				["Memory", "記憶"],
				["Metal", "金属"],
				["Monsoon", "Monsoon"],
				["Moon", "Moon"],
				["Murder", "殺人"],
				["Night", "夜"],
				["Nightmare", "悪夢"],
				["Oceans", "大海"],
				["Petrification", "Petrification"],
				["Plague", "Plague"],
				["Portal", "Portal"],
				["Protean", "プロティアン"],
				["Psychopomp (Death)", "Psychopomp (Death)"],
				["Psychopomp (Repose)", "Psychopomp (Repose)"],
				["Purity", "清浄"],
				["Radiation", "Radiation"],
				["Rage", "激怒"],
				["Redemption", "Redemption"],
				["Resolve", "不屈"],
				["Restoration", "回復"],
				["Resurrection", "復活"],
				["Revelation", "Revelation"],
				["Revelry", "宴会"],
				["Revolution", "革命"],
				["Riot", "Riot"],
				["Rites", "Rites"],
				["Rivers", "Rivers"],
				["Sahkil", "Sahkil"],
				["Saurian", "蜥蜴類"],
				["Seasons", "季節"],
				["Self-Realization", "Self-Realization"],
				["Shadow", "Shadow"],
				["Slavery", "Slavery"],
				["Smoke", "煙"],
				["Solitude", "Solitude"],
				["Souls", "魂"],
				["Sovereignty", "Sovereignty"],
				["Stars", "星"],
				["Storms", "嵐"],
				["Tactics", "戦術"],
				["Thievery", "盗み"],
				["Thirst", "Thirst"],
				["Thorns", "Thorns"],
				["Thought", "思考"],
				["Toil", "労役"],
				["Torture", "Torture"],
				["Trade", "交易"],
				["Trap", "Trap"],
				["Truth", "Truth"],
				["Tyranny", "専制"],
				["Undead", "アンデッド"],
				["Venom", "有毒"],
				["Wards", "保護"],
				["Whimsy", "Whimsy"],
				["Wind", "疾風"]
			]);
			subDomainsMap.forEach((translation, original) => {
				if (learnedAt.subDomain?.hasOwnProperty(original)) {
					learnedAt.subDomain[translation] = learnedAt.subDomain[original];
					delete learnedAt.subDomain[original];
				}
			});

// Credits to https://gitlab.com/arkanamirium
// https://gitlab.com/arkanamirium/foundryvtt-pf1e-de/-/blob/develop/scripts/babele.js
			const bloodLinesMap = new Map([
				["Aberrant", "異形"],
				["Abyssal", "奈落の者"],
				["Accursed", "忌まわしき者"],
				["Aquatic", "水界"],
				["Arcane", "秘術"],
				["Astral", "Astral"],
				["Boreal", "極北"],
				["Celestial", "天上の者"],
				["Daemon", "Daemon"],
				["Deep Earth", "地底"],
				["Destined", "運命の子"],
				["Div", "Div"],
				["Djinni", "ジン"],
				["Draconic", "竜"],
				["Dreamspun", "夢紡ぎ"],
				["Ectoplasm", "心霊体"],
				["Efreeti", "イフリート"],
				["Elemental", "元素"],
				["Fey", "フェイ"],
				["Ghoul", "グール"],
				["Harrow", "Harrow"],
				["Imperious", "皇族"],
				["Impossible", "Impossible"],
				["Infernal", "地獄の者"],
				["Kobold", "コボルド"],
				["Maestro", "巨匠"],
				["Marid", "マーリド"],
				["Martyred", "Martyred"],
				["Naga", "Naga"],
				["Nanite", "Nanite"],
				["Oni", "Oni"],
				["Orc", "Orc"],
				["Pestilence", "Pestilence"],
				["Phoenix", "Phoenix"],
				["Possessed", "Possessed"],
				["Protean", "変幻"],
				["Psychic", "念術"],
				["Rakshasa", "ラークシャサ"],
				["Salamander", "Salamander"],
				["Scorpion", "Scorpion"],
				["Serpentine", "蛇"],
				["Shadow", "影"],
				["Shaitan", "シャイタン"],
				["Shapechanger", "Shapechanger"],
				["Solar", "Solar"],
				["Starsoul", "星の魂"],
				["Stormborn", "嵐"],
				["Undead", "不死の者"],
				["Unicorn", "Unicorn"],
				["Verdant", "植物"],
				["Vestige", "Vestige"]
			]);
			bloodLinesMap.forEach((translation, original) => {
				if (learnedAt.bloodline?.hasOwnProperty(original)) {
					learnedAt.bloodline[translation] = learnedAt.bloodline[original];
					delete learnedAt.bloodline[original];
				}
			});

		return learnedAt;
		},

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


