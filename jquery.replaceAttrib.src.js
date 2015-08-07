$.fn.replaceAttrib = function( data , removeOriginal ){
  return this.each(function(){
    var ele = $(this);
     for(var prop in data ){ 

       if(typeof ele == 'object' && typeof ele.attr(prop) !== 'undefined'){
		   
		    console.log('replaceAttr',ele, prop, data[prop],ele.attr(prop)) ;
			ele.attr(data[prop],ele.attr(prop));
		  
			if(removeOriginal !== false){
				ele.removeAttr(prop);
			}
       }
     }
  });
};


/*
 var replaceTo = {
	  'data-invalid':'invalid',
	  'data-invalid2':'invalid2'
	};

$ele.replaceAttrib( replaceTo ,true); 

*/
