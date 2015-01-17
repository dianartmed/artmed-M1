Ext.define('RAWON.module.Rooms.Hour.view.Hour',{
    extend   : 'Ext.panel.Panel',
    title    : 'Hour',
    iconCls  : 'icon-clock',
    alias    : 'widget.Hour',
    id       : 'Hour',
    layout   : 'fit',     
    requires : [
        'RAWON.module.Rooms.Hour.view.grid.GridHour',
        'RAWON.module.Rooms.Hour.view.form.FormHour'
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
        {xtype   : 'gridhour', flex : 1.3},
        {xtype   : 'formhour', flex : 0.8}         
    ]
});