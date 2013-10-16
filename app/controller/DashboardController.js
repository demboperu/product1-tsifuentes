Ext.define('AppTwitter.controller.DashboardController', {
    extend: 'Ext.app.Controller',
    stores : ['TwittsStore'],
    models : ['TwitModel'],
    views : ['grid.TwittsGridPanel','window.NewTwitWindow','panel.LoginPanel','window.LoginWindow',
    'panel.AccountPanel','panel.ConnectPanel','panel.DiscoverPanel'],
    wPort : null,
    contentBody : null,
    contentItem : 'twittsGridPanel',
    init: function() {
        //Ext.create('AppTwitter.view.window.Login').show();
        this.control({
            '#myAccount' : {
                click : this.changeUser
            },
        	'viewport > panel[region=center] > toolbar > button[action=newTwit]':{
        		click : this.newTwit
        	},
            '#changeUser':{
                click : this.changeUser
            },
            '#logoutTwitter' : {
                click : this.logout
            },
            '#access' : {
                click : this.validateUser
            },
            'viewport > panel[region=west] > button' : {
                click : this.changeContent
            },
            'AppTwitter.view.window.NewTwit > bottombar > button[action=saveTwit]' : {
                click : function(){
                    alert('sdsdfd');
                }
            },
            'AppTwitter.view.panel.Login > bottombar >  button[action=loginIntro]' : {
                click : function(){console.info('aaaa');}//this.validateUser
            }
        });        
    },
    validateUser : function(btn){
                btn.up('window').hide();
                this.wPort = Ext.create('AppTwitter.view.Viewport');
                /*
        Ext.ajax.request({
            type : 'post',
            url : '',
            success : function(response){
                btn.up('window').hide();
                Ext.create('AppTwitter.view.Viewport');
            },
            failure : function(){

            }
        });*/
    },
    changeUser : function(btn){
        console.info(btn);
        Ext.create('AppTwitter.view.window.LoginWindow',{modal : true}).show();
    },
    logout : function (btn) {
        this.wPort.hide();
        this.wLogin.show();
                        /*
        Ext.ajax.request({
            type : 'post',
            url : '',
            success : function(response){
                btn.up('window').hide();
                Ext.create('AppTwitter.view.Viewport');
            },
            failure : function(){

            }
        });*/
    },
    seeViewPort : function(btn){
    },
    changeContent : function(btn){
        this.contentBody = (this.contentBody!=null)?this.contentBody:Ext.getCmp('contentBody');
        this.contentBody.remove(this.contentItem);
        this.contentBody.add([{xtype:btn.name}]);
        this.contentItem = btn.name;
    },
    newTwit : function(button){
        Ext.create('AppTwitter.view.window.NewTwitWindow',{}).show();
    }
});