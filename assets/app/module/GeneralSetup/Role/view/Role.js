Ext.define('RAWON.module.GeneralSetup.Role.view.Role', {
    extend   :  'Ext.panel.Panel',
    title    : 'Role',
    iconCls  : 'icon-role',
    alias    : 'widget.Role',
    id       : 'Role',
    layout   : 'fit',     
    requires : [
        'RAWON.module.GeneralSetup.Role.view.grid.GridRole',
        'RAWON.module.GeneralSetup.Role.view.RoleMenu'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridrole', flex : 1},
        {xtype   : 'rolemenu', flex : 1.8}         
    ]
});