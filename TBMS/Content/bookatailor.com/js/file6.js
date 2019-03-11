function validateNewsletter()
{	
  var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
  if(regEmail.test(jQuery("#emailID").val()) == false)
  { 
      document.getElementById('newsletterError').innerHTML = 'Please enter a valid email address';
      document.getElementById('newsletterError').style.color = 'red';
      return false;
  }
  else
  {
      document.getElementById('newsletterError').innerHTML = '';
      
      var dataString = 'emailID='+ jQuery("#emailID").val();
      
        jQuery.ajax({
          type: "POST",
          url: "_check-email.cfm",
          data: dataString,
          cache: false,
          success: function(userCount)
          {
          
              if(userCount > 0)
              {
                  /* document.getElementById('newsletterError').innerHTML = 
                  'Welcome to the #BespokeLife'; */
                  document.getElementById('newsletterError').innerHTML = '';
                  jQuery('#basicModal2').modal();	
                  return false;
              }
              else
              {
                  insertInToMailingList(emailID);
              }
              
          }
      });
      
  }
}	

function insertInToMailingList(emailID)
{
   var dataString = 'emailID='+ jQuery("#emailID").val();
   jQuery.ajax({
      type: "POST",
      url: "_insert-email.cfm",
      data: dataString,
      cache: false,
      success: function(userCount)
      {
          /* document.getElementById('newsletterError').innerHTML = 
          'Welcome to the #BespokeLife'; */
          document.getElementById('newsletterError').innerHTML = '';
          jQuery('#basicModal2').modal();	
          return false;
      }
  });
}

function TrimInputs(str)
{
    return str.replace(/^\s+|\s+$/g,'');
}

