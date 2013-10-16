Ext.define('AppTwitter.view.Viewport',{
	extend : 'Ext.container.Viewport',
				layout : 'border',			
				items : [
				{
					region : 'west',
					bodyStyle : {background:'#F1F1F1'},
					width : 100,
					bodyStyle : 'padding:5px;background:#000;',
					items : [{xtype:'container',text:'',cls:'icon-logo'},
					{xtype:'button',iconAlign:'top',iconCls:'icon-home',scale:'large',text:'Home',cls:'btn-custom ', name : 'twittsGridPanel'},
					{xtype:'button',iconAlign:'top',iconCls:'icon-connect',scale:'large',text:'Connect',cls:'btn-custom ', name:'connectPanel'},
					{xtype:'button',iconAlign:'top',iconCls:'icon-discover',scale:'large',text:'Discover',cls:'btn-custom', name : 'discoverPanel'},
					{xtype:'button',iconAlign:'top',iconCls:'icon-account',scale:'large',text:'Account',cls:'btn-custom',itemId:'idAccount',name : 'accountPanel'}]

				},{	
					region : 'center',	id:"contentbody",name:"contentbody",
					items : [/*{
						region:'north',height:50,buttonAlign:'right',bodyStyle: 'text-align:right;padding:7px 3% 10px 0px;',
						baseCls : 'x-panel-header-default init-twitter',
						items:[//{xtype:'textfield',width:100},
							   {xtype:'button',text:'',action:'newTwit',cls:'btn-custom-top icon-new icon-option'},
							   {xtype:'button',text:'',cls:'btn-custom-top'}]
					},*/
					{
						xtype:'container',itemId:'contentBody',id:'contentBody',cls:'contentbody'/*,width:'100%'*/,minHeight:500,bodyStyle : {background:'#F1F1F1',padding:'5%'},autoScroll : true,
						items : [{xtype:'twittsGridPanel'}]
					}],
					dockedItems : [{xtype:'toolbar',dock:'top', height:50,baseCls : 'x-panel-header-default init-twitter',bodyStyle: 'text-align:right;padding:7px 3% 10px 0px;',
							items : [{xtype:'container',html:'<img src="data/photo/'+USER_AVATAR+'" style="width:40px;margin-left:5px;"/>'},
									Ext.create('Ext.Button', {
								    text      : USER_NAME+' | '+USER_TWITTER,
								    //renderTo  : Ext.getBody(),
								    //arrowAlign: 'top',
								    cls:'btn-custom-down',
								    menu      : [
								        {text: 'Mi Cuenta', itemId:'myAccount'},
								        {text: 'Cambiar Usuario',itemId:'changeUser'},
								        {text: 'Salir', itemId:'logoutTwitter'}
								    ]
								}),
							'->',{xtype:'textfield',width:200,cls:'txt-search'},
							   {xtype:'button',text:'',action:'newTwit',cls:'btn-custom-top icon-new icon-option'}
							   
							//{xtype:'button',text:'',cls:'btn-custom-top'}
							]
					}]
				}]
			});