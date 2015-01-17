Ext.define('RAWON.module.Rooms.OrderRoom.view.form.FormOrderRoom', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Master Room',
    iconCls     : 'icon-form',
    store       : 'RAWON.module.Rooms.OrderRoom.store.OrderRoom',
    requires    : ['RAWON.module.Rooms.OrderRoom.store.OrderRoom'],
    alias       : 'widget.formorderroom',
    id          : 'formorderroom',
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
                        fieldLabel  : 'Rooms Name',
                        emptyText   : 'Rooms Name',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'name',
                        allowBlank  : true,
                        fieldLabel  : 'Members Name',
                        emptyText   : 'Members Name',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'name',
                        allowBlank  : true,
                        fieldLabel  : 'Booking Code',
                        emptyText   : 'Booking Code',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'combobox',
                        fieldLabel  : 'Category Room',
                        name        : 'catroom',
                        id          : 'catroom',
                        emptyText   : 'Category Room',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px'
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
                        xtype       : 'combobox',
                        fieldLabel  : 'Status',
                        name        : 'status',
                        id          : 'status',
                        emptyText   : 'Order Status',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px'
                    },
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createOrderRoom
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