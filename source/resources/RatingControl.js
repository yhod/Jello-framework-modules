function RatingControl( containerId, settings, filedDef ) {
	var basePath = settings.basePath;
	delete settings.basePath;
	
	var css = basePath + "/raty/lib/jquery.raty.css";
	if ($('head link[href="' + css + '"]').length == 0) {
		$('head').append('<link rel="stylesheet" href="'+css+'" type="text/css" />');
	}
	
	this.container =  $('#' + containerId);
	this.settings = settings;
	this.disabled = false;
	var that = this;
	
	this.render = function(onReady) {
		$.fn.raty.defaults.path = basePath + '/raty/demo/images';
		 
		that.settings.click = function(score, evt) {	 
	  		var currentScore = that.container.raty('score');
	  		if(currentScore != score && that.listener) {
	  			that.container.raty('score', score);
	  			that.listener( evt, that, score);	
	  		}
	  	}
		
		that.container.raty(that.settings);
		
		if(onReady) {
			onReady(that);
		}
	}
	
	this.getValue = function() {
		return this.container.raty('score');
	}
	
	this.setValue = function( value ) {
		this.container.raty('readOnly', false);		// workaround since rating control can't set value if read-only
		this.container.raty('score', value);
		this.container.raty('readOnly', this.disabled);	// workaround since rating control can't set value if read-only	
	}
	
	this.change = function(listener) {
		this.listener = listener;
	}
	
	this.setDisabled = function(state) {
		this.disabled = state; // workaround since rating control can't set value if read-only
		this.container.raty('readOnly', state);		
	}
}