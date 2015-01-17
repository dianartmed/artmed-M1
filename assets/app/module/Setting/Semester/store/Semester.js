Ext.define('RAWON.module.Setting.Semester.store.Semester',{
	extend 		: 'Ext.data.Store',
	model 		: 'RAWON.module.Setting.Semester.model.Semester',
	requires 	: ['RAWON.module.Setting.Semester.model.Semester'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'Setting/c_semester/getSemester'
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