1. Add *__com.jello.modules.feedback.jar__* to your Jello project under: **<projrct-root>/src/webapp/WEB-INF/lib**
2. Add the foloing to your html page:
    ```javascript
    ...
   <p>Was this page helpful? Let us know how we did:</p>
	 <div id="feedback"></div>
	
	 <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
	 <script src='https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js'></script>
	
	 <script src="/jello/resource/com.jello.modules.feedback/feedback.js"></script>
  
	 <script type="text/javascript">
	   $(document).ready(function() {
	       $JELLO.addFeedback(); 
	   });
	 </script>
    ...
    ```
