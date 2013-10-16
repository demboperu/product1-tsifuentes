Ext.Loader.setConfig({
	enabled : true,
	paths : {
		AppTwitter : 'app'
	}
});
Ext.onReady(function(){
	Ext.application({
		requires : ['AppTwitter.view.Viewport'],

		name : 'AppTwitter',

	 	controllers : ['DashboardController'],

		appFolder : 'app',
		wLogin : null,
		launch : function(){
			this.wLogin = Ext.create('AppTwitter.view.window.LoginWindow',{closable : false}).show();
			//Ext.create('AppTwitter.view.Viewport');
		}
	});
});