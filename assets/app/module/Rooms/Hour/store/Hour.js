Ext.define('RAWON.module.Rooms.Hour.store.Hour',{
	extend 		: 'Ext.data.Store',
	model 		: 'RAWON.module.Rooms.Hour.model.Hour',
	requires 	: ['RAWON.module.Rooms.Hour.model.Hour'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'Rooms/c_hour/getHour'
		},
		actionMethods	: {
			read 	: 'POST'
		},
		 reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success',
            totalProperty   : 'total'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        }
	}
});