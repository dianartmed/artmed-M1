Ext.define('RAWON.module.Setting.TahunAjaran.store.TahunAjaran',{
	extend 		: 'Ext.data.Store',
	model 		: 'RAWON.module.Setting.TahunAjaran.model.TahunAjaran',
	requires 	: ['RAWON.module.Setting.TahunAjaran.model.TahunAjaran'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'Setting/c_tahunajaran/getTahunAjaran'
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