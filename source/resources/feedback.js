if ($JELLO === undefined || $JELLO === null) {
	var $JELLO = {};
}

$JELLO.addFeedback = function(containerId, settings) {
   containerId = containerId || "feedback";   
   
  
   require([
	   "/jello/resource/com.jello.modules.feedback/raty/lib/jquery.raty.js",
	   '/jello/resource/com.jello.modules.feedback/RatingControl.js'], function() {
	   
	   if(!settings) {
		   settings = {
			  hints : ['Unusable document', 'Poor document', 'OK document', 'Good document', 'Excellent document']
		   }
	   }
	   
	   settings.basePath = '/jello/resource/com.jello.modules.feedback';
      
       var ratingCtrl = new RatingControl(containerId, settings);
      
       ratingCtrl.render( function(ctrl) {
           var score = $.cookie('feedback');
           if( score ) {
             ctrl.setValue( score );
           }
       });
      
       ratingCtrl.change( function(evt, ctrl, score) {
           var payloud = {page: location.pathname, rating: score};
           
           var xhttp = new XMLHttpRequest(); 
           xhttp.open("POST", "/jello/data/com.jello.modules.feedback/PageFeedback", true);
           xhttp.send( JSON.stringify(payloud) );    
           
           $.cookie('feedback', score, {path: window.location.pathname});
        });
   });


}