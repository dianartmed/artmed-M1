Ext.define('RAWON.module.Setting.TahunAjaran.view.TahunAjaran',{
    extend   : 'Ext.panel.Panel',
    title    : 'Tahun Ajaran',
    iconCls  : 'icon-calendar',
    alias    : 'widget.TahunAjaran',
    id       : 'TahunAjaran',
    layout   : 'fit',     
    requires : [
        'RAWON.module.Setting.TahunAjaran.view.grid.GridTahunAjaran',
        'RAWON.module.Setting.TahunAjaran.view.form.FormTahunAjaran'
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
        {xtype   : 'gridtahunajaran', flex : 1.3},
        {xtype   : 'formtahunajaran', flex : 0.8}         
    ]
});