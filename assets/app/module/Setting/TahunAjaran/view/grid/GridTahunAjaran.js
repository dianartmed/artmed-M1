Ext.define('RAWON.module.Setting.TahunAjaran.view.grid.GridTahunAjaran',{
	extend 		: 'Ext.grid.Panel',
	store 		: 'RAWON.module.Setting.TahunAjaran.store.TahunAjaran',
	title 		: 'Grid Tahun Ajaran',
	iconCls 	: 'icon-grid',
	alias 		: 'widget.gridtahunajaran',
	id 			: 'gridtahunajaran',
	border   	: true,
    frame    	: true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'MULTI',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'RAWON.module.Setting.TahunAjaran.store.TahunAjaran',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '5%'
        },
        {
            text     : 'Nama',
            dataIndex: 'name',
            width    : '80%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteMenu },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '85%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]	
});