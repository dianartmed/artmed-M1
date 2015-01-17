Ext.define('RAWON.module.Rooms.CategoryRoom.store.CategoryRoom',{
	extend 		: 'Ext.data.Store',
	model 		: 'RAWON.module.Rooms.CategoryRoom.model.CategoryRoom',
	requires 	: ['RAWON.module.Rooms.CategoryRoom.model.CategoryRoom'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'Rooms/c_categoryroom/getCategoryRoom'
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