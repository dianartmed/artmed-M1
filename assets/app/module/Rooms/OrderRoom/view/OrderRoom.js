Ext.define('RAWON.module.Rooms.OrderRoom.view.OrderRoom',{
    extend   : 'Ext.panel.Panel',
    title    : 'Order Room',
    iconCls  : 'icon-order_room',
    alias    : 'widget.OrderRoom',
    id       : 'OrderRoom',
    layout   : 'fit',     
    requires : [
        'RAWON.module.Rooms.OrderRoom.view.grid.GridOrderRoom',
        'RAWON.module.Rooms.OrderRoom.view.form.FormOrderRoom'
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
        {xtype   : 'gridorderroom', flex : 1.3},
        {xtype   : 'formorderroom', flex : 0.8}         
    ]
});