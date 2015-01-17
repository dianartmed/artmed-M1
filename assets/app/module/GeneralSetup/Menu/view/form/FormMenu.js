Ext.define('RAWON.module.GeneralSetup.Menu.view.form.FormMenu', {
    extend      : 'Ext.form.Panel',
    store       : 'RAWON.module.GeneralSetup.Menu.store.ViewMenu',
    requires    : ['RAWON.module.GeneralSetup.Menu.store.ViewMenu'],
    title       : 'Form Menu',
    iconCls     : 'icon-form',
    alias       : 'widget.formmenu',
    id          : 'formmenu',
    margins     :'3px',
    layout      : 'fit',
    border      : true,
    frame       : true,
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype           : 'form',
                bodyPadding     : 5,
                items           : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        allowBlank  : true,
                        fieldLabel  : 'ID',
                        emptyText   : 'ID',
                        anchor      : '50%',
                        labelWidth  : 100
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'name',
                        allowBlank  : false,
                        fieldLabel  : 'Nama Modul',
                        emptyText   : 'Nama Modul',
                        anchor      : '100%',
                        labelWidth  : 100
                    },
                    {
                        xtype       : 'combobox',
                        name        : 'parent',
                        emptyText   : 'Parent Modul',
                        fieldLabel  : 'Parent Modul',
                        autoScroll  : false,
                        store       : Ext.create('RAWON.module.GeneralSetup.Menu.store.ViewMenu'),
                        displayField: 'name',
                        valueField  : 'id_menu',
                        anchor      : '100%',
                        labelWidth  : 100
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'icon',
                        allowBlank  : false,
                        fieldLabel  : 'Icon Modul',
                        emptyText   : 'Icon Modul',
                        anchor      : '100%',
                        labelWidth  : 100
                    },
                    {
                        fieldLabel  : 'Aktif',
                        tooltip     : 'Is Active?',
                        xtype       : 'checkboxfield',
                        name        : 'isactive',
                        flex        : 1,
                        checked     : false,
                        anchor      : '100%',
                        labelWidth  : 100
                    }
                ],
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save'
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
