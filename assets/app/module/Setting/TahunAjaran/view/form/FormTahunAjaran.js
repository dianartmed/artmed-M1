Ext.define('RAWON.module.Setting.TahunAjaran.view.form.FormTahunAjaran', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Tahun Ajaran',
    iconCls     : 'icon-form',
    store       : 'RAWON.module.Setting.TahunAjaran.store.TahunAjaran',
    requires    : ['RAWON.module.Setting.TahunAjaran.store.TahunAjaran'],
    alias       : 'widget.formtahunajaran',
    id          : 'formtahunajaran',
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
                        emptyText   : 'Tahun Ajaran',
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
                disabled: createTahunAjaran
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