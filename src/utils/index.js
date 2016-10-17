const utils = {
	'replaceParamInRoot' : (root,param,value)=>{
		return root.replace(`:${param}`,value)
	}
}

module.exports = utils;