Ext.define('RAWON.module.Rooms.CategoryRoom.view.form.FormCategoryRoom', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Category Room',
    iconCls     : 'icon-form',
    store       : 'RAWON.module.Rooms.CategoryRoom.store.CategoryRoom',
    requires    : ['RAWON.module.Rooms.CategoryRoom.store.CategoryRoom'],
    alias       : 'widget.formcategoryroom',
    id          : 'formcategoryroom',
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
                        emptyText   : 'Category Rooms',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'filefield',
                        fieldLabel  : 'Pick Image File',
                        name        : 'picfile',
                        id          : 'picfile'
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
                disabled: createCategoryRoom
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