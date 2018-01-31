

  
  function nome(){
  //var nome="luan";
  for(i=1;i<10;i++)
  document.write("<p>a",i,"<input type='text' /><input type='button' value='acessar'/><br>");
}

//jquery lasbrary,ajax
function nm(){
  $(document).ready(function(){
   $('*').css("margin","0");
            
  
  });  
}


function x(){
  
  $(document).ready(function(){
      /*        $('h1').css("color","red");     
       $('h1').hide();     
              $('h1').delay('10000');
             $('h1').fadeIn("slow");
              $('h1').text("mike");
    */
            $('h1')
              .css("color","red")
              .text("mike")
              .click(function(){
              $('body').css("color","red");
              $('a').css("color","red");
              //var txt=$('nt').v
            });
                    
                    });
  
}