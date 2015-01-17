Ext.define('RAWON.module.Rooms.CategoryRoom.view.CategoryRoom',{
    extend   : 'Ext.panel.Panel',
    title    : 'Category Room',
    iconCls  : 'icon-catroom',
    alias    : 'widget.CategoryRoom',
    id       : 'CategoryRoom',
    layout   : 'fit',     
    requires : [
        'RAWON.module.Rooms.CategoryRoom.view.grid.GridCategoryRoom',
        'RAWON.module.Rooms.CategoryRoom.view.form.FormCategoryRoom'
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
        {xtype   : 'gridcategoryroom', flex : 1.3},
        {xtype   : 'formcategoryroom', flex : 0.8}         
    ]
});