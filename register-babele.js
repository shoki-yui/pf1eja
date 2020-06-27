Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'pf1eja',
			lang: 'ja',
			dir: 'compendium'
		});
	}
});
