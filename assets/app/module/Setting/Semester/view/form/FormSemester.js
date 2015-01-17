Ext.define('RAWON.module.Setting.Semester.view.form.FormSemester', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Semester',
    iconCls     : 'icon-form',
    store       : 'RAWON.module.Setting.Semester.store.Semester',
    requires    : ['RAWON.module.Setting.Semester.store.Semester'],
    alias       : 'widget.formsemester',
    id          : 'formsemester',
    layout      : 'fit',
    border      : true,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'form',
                bodyPadding : 5,
                items       : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'name',
                        allowBlank  : true,
                        fieldLabel  : 'Name',
                        emptyText   : 'Semester',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        fieldLabel  : 'Aktif',
                        tooltip     : 'Is Active?',
                        xtype       : 'checkboxfield',
                        name        : 'isactive',
                        checked     : false,
                        padding     : '0px 2px 5px 2px',
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createSemester
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: true
            },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});