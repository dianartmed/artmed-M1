Ext.define('RAWON.module.Rooms.OrderRoom.store.OrderRoom',{
	extend 		: 'Ext.data.Store',
	model 		: 'RAWON.module.Rooms.OrderRoom.model.OrderRoom',
	requires 	: ['RAWON.module.Rooms.OrderRoom.model.OrderRoom'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'Rooms/c_orderroom/getOrderRoom'
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