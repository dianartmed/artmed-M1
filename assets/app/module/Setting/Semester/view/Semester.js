Ext.define('RAWON.module.Setting.Semester.view.Semester',{
    extend   : 'Ext.panel.Panel',
    title    : 'Semester',
    iconCls  : 'icon-semester',
    alias    : 'widget.Semester',
    id       : 'Semester',
    layout   : 'fit',     
    requires : [
        'RAWON.module.Setting.Semester.view.grid.GridSemester',
        'RAWON.module.Setting.Semester.view.form.FormSemester'
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
        {xtype   : 'gridsemester', flex : 1.3},
        {xtype   : 'formsemester', flex : 0.8}         
    ]
});