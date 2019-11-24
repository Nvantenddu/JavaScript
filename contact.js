$(document).ready(function() 
                  {
    $("#name").focus();
    $("#form").submit(
       function(event) 
       {
           var isValid = true;
           
  var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
       var email = $("#email").val();
       if (email == "") 
       {
           $("#email").next().text("This field is required.");
           isValid = false;
       } 
           else if ( !emailPattern.test(email) ) 
       {
           $("#email").next().text("Must be a valid email address.");
           isValid = false;
       } 
           else 
       {
           $("#email").next().text("");
       }
  
   
       var fullName = $("#name").val().trim();
       if (fullName == "") 
       {
           $("#name").next().text("This field is required.");
           isValid = false;
       }
       else 
       {
           $("#name").next().text("");
       }
  
   
       var phone = $("#phone").val();
       if (phone == "") 
       {
           $("#phone").next().text("This field is required.");
           isValid = false;
       } else if ( phone.length != 10 ) 
       {
           $("#phone").next().text("10 digits required.");
           isValid = false;
       }
       else 
       {
           $("#phone").next().text("");
       }
      
   
       if (isValid == false) 
       {
           event.preventDefault();              
       }
      
       })
       });