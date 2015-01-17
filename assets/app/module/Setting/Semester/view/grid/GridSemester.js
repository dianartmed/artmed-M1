Ext.define('RAWON.module.Setting.Semester.view.grid.GridSemester',{
	extend 		: 'Ext.grid.Panel',
	store 		: 'RAWON.module.Setting.Semester.store.Semester',
	title 		: 'Grid Semester',
	iconCls 	: 'icon-grid',
	alias 		: 'widget.gridsemester',
	id 			: 'gridsemester',
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
        store       : 'RAWON.module.Setting.Semester.store.Semester',
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