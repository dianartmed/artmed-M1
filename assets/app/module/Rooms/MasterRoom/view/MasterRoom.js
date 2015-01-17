Ext.define('RAWON.module.Rooms.MasterRoom.view.MasterRoom',{
    extend   : 'Ext.panel.Panel',
    title    : 'Master Room',
    iconCls  : 'icon-room',
    alias    : 'widget.MasterRoom',
    id       : 'MasterRoom',
    layout   : 'fit',     
    requires : [
        'RAWON.module.Rooms.MasterRoom.view.grid.GridMasterRoom',
        'RAWON.module.Rooms.MasterRoom.view.form.FormMasterRoom'
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
        {xtype   : 'gridmasterroom', flex : 1.3},
        {xtype   : 'formmasterroom', flex : 0.8}         
    ]
});