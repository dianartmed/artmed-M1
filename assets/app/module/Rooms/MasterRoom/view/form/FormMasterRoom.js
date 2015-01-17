Ext.define('RAWON.module.Rooms.MasterRoom.view.form.FormMasterRoom', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Master Room',
    iconCls     : 'icon-form',
    store       : 'RAWON.module.Rooms.MasterRoom.store.MasterRoom',
    requires    : ['RAWON.module.Rooms.MasterRoom.store.MasterRoom'],
    alias       : 'widget.formmasterroom',
    id          : 'formmasterroom',
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
                        emptyText   : 'Master Rooms',
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
                disabled: createMasterRoom
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