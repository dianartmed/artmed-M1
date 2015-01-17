Ext.define('RAWON.module.Rooms.MasterRoom.store.MasterRoom',{
	extend 		: 'Ext.data.Store',
	model 		: 'RAWON.module.Rooms.MasterRoom.model.MasterRoom',
	requires 	: ['RAWON.module.Rooms.MasterRoom.model.MasterRoom'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'Rooms/c_masterroom/getMasterRoom'
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