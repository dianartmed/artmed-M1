Ext.define('RAWON.module.Rooms.Hour.view.form.FormHour', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Hour',
    iconCls     : 'icon-form',
    store       : 'RAWON.module.Rooms.Hour.store.Hour',
    requires    : ['RAWON.module.Rooms.Hour.store.Hour'],
    alias       : 'widget.formhour',
    id          : 'formhour',
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
                        xtype       : 'timefield',
                        name        : 'start_hour',
                        allowBlank  : true,
                        fieldLabel  : 'Start Hour',
                        emptyText   : 'Start Hour',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'timefield',
                        name        : 'end_hour',
                        allowBlank  : true,
                        fieldLabel  : 'End Hour',
                        emptyText   : 'End Hour',
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
                disabled: createHour
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