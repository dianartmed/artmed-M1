Ext.define('RAWON.view.panel.Dashboard',{
	extend	:'Ext.container.Container',
    alias 	: 'widget.paneldashboard',
    id		:'paneldashboard',
    initComponent:function(){
        var a = this;
        Ext.apply(a,{
            title	: 'Home',
            iconCls	: 'icon-home',
            layout	:{
            	type:'fit', align:'stretch'
            },
            xtype	: 'container',
            border	: false,
            frame	: true,
            items	:[
                {
                    xtype		: 'form',
                    frame		: false,
                    layout      : 'fit',
                    border		: false,
                    hideHeader	: true,
                    bodyStyle	: {
                    	background:' #DDDDFF no-repeat center center'
                    },
                    // padding		:'3px',
                    html		:'<div id="welcome">Welcome in Karaoke Online Reservation System</div>'
                }
            ]
        });
        a.callParent(arguments);
    }
});

Ext.define('RAWON.view.Tab',{
	extend			: 'Ext.tab.Panel',
    alias 			: 'widget.mainTab',
    resizeTabs		: true,
    id				: 'mainTab',
    layout			: 'fit',
    border			: false,
    margins			: '2px 2px 2px 0px',
    bodyStyle		: 'background : transparent',
    closeAction		: 'hide',
    autoDestroy		: false,
    frame			: false,
    plain			: true,
    enableTabScroll	: true,
    defaults		: { 
    	autoScroll:true 
    },
    items			: [
        {
        	xtype:'paneldashboard'
        }
    ]
});

Ext.define('RAWON.view.Menu',{
	extend	:'Ext.tree.Panel',
    alias 	:'widget.mainmenu',
    initComponent:function(){
        var a=this;Ext.apply(a,{
            margins		: '2px 0px 2px 2px',
            title		: 'Menu',
            id			: 'mainmenu',
            iconCls		: 'icon-menu',
            cls 		: 'scrollarea',
            store 		: 'RAWON.store.TreeStore',
            xtype		: 'panel',
            autoScroll	: true,
            rootVisible	: false,
            useArrows	: true,
            layout		: 'fit',
            bodyStyle	: 'padding : 0px',
            disabled	: false,
            width		: 250,
            border		: false,
            frame		: true,
            collapsible	: true,
            split		: true,
            items		: [],
            tbar 		: [
                {
                    id		: 'user',
                    text	: NAME,
                    tooltip	: 'Show Profile',
                    iconCls	: 'icon-username',
                    action  : 'rubah'
                },
                '->',
                {
                    id		: 'logout',
                    text	: 'LOGOUT',
                    tooltip	: 'Exit Application',
                    iconCls	: 'icon-logout',
                    action  : 'logout'
                }
            ]
        });
        a.callParent(arguments)
    }
});

Ext.define('RAWON.view.Viewport',{
	extend		: 'Ext.container.Viewport',
	requires 	: 'RAWON.view.Menu',
	alias 		: 'widget.viewport',
	id 			: 'viewport',
    frame       : true,
	initComponent : function(){
		Ext.apply(this,{
			layout 		: 'border',
			xtype		: 'panel',
			defaults	: {frame: true, border: false},
			border		: false,
			items		:[
				{
					xtype 	: 'panel',
					layout 	: 'fit',
					region	: 'north',
					title 	: 'CHEERS KARAOKE ',
                    iconCls : 'icon-header',
					id		: 'appHeader'
				},
				{
					xtype	: 'mainmenu',
					region 	: 'west',
					width	: 200,
                    bbar    : [                    
                        '->',
                        {
                            text        : 'Cheers',
                            disabled    : false
                        },
                        {
                            id          : 'datestamp',
                            text        : '01-01-1970',
                            disabled    : false,
                            iconCls     : 'icon-calendar'
                        },
                        '-',
                        {
                            id          : 'timestamp',
                            disabled    : false,
                            text        : '00:00:00',
                            iconCls     : 'icon-clock'
                        }
                    ] 
				},
                {
                    region	: 'center',
                    xtype	: 'mainTab'
                },				
				{
					id 		: 'mainContainer ',
					xtype 	: 'container',
					region	: 'south',
					layout	: 'fit',
                    height  : 20,
                    frame   : true,
                    html    : '<center>Copyright &copy; 2014 Art Media Network Team</center>'       
				}
			]   
		});
		this.callParent(arguments);	
	}	
});