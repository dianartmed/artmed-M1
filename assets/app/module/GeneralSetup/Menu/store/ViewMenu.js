Ext.define('RAWON.module.GeneralSetup.Menu.store.ViewMenu', {
    extend      : 'Ext.data.Store',
    model       : 'RAWON.module.GeneralSetup.Menu.model.ViewMenu',
    requires    : [
        'RAWON.module.GeneralSetup.Menu.model.ViewMenu'
    ],
    autoLoad    : true,
    autoSync    : false,
    root        : {
        expanded    : false
    },
    proxy       : {
        type            : 'ajax',
        api             : {
            read    : BASE_URL + 'GeneralSetup/c_menu/viewMenu'
        },
        actionMethods   : {
            read    : 'POST'
        },
        reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        }
    }
});