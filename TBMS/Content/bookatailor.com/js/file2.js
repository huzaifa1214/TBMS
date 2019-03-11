jQuery(function($){
    loadActiveShowrooms();
    
    
 });

 function loadActiveShowrooms()
 {
   if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
        xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {  
            document.getElementById("divActiveShowrooms").innerHTML=xmlhttp.responseText;
        }
      }
    
    xmlhttp.open("GET.html",'_showrooms.html',true);
    xmlhttp.send(); 
  }	
  
  function gotoAppointmentDate()
  {
        document.getElementById('showroomError').innerHTML = '';
      document.getElementById("step1").style.display="none";
      document.getElementById("step2").style.display="none";
      document.getElementById("step3").style.display="none";
      document.getElementById("step4").style.display="none";
      document.getElementById("step5").style.display="none";
      document.getElementById("step6").style.display="none";
      document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="none";
      $("#step2").fadeIn();
  }
  
function selectShowroom(id,nextid,bar)
{
  var shrmLocation = $('input[name=appointment_location]:checked', '#frmAppointment').val();
  if((shrmLocation == "") || (shrmLocation == undefined) )
  {
      document.getElementById('showroomError').innerHTML = 'Please select a showroom';
     return false;
  }
  else
  {
        document.getElementById('showroomError').innerHTML = '';
      document.getElementById("step1").style.display="none";
      document.getElementById("step2").style.display="none";
      document.getElementById("step3").style.display="none";
      document.getElementById("step4").style.display="none";
      document.getElementById("step5").style.display="none";
      document.getElementById("step6").style.display="none";
      document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="none";
      $("#"+nextid).fadeIn();
     // document.getElementById(bar).style.backgroundColor="#58585a";
  }	 
}	
  
  

  
  
  function show_appointment_time(id,nextid,bar)
  {
      document.getElementById("step1").style.display="none";
      document.getElementById("step2").style.display="none";
      document.getElementById("step3").style.display="none";
      document.getElementById("step4").style.display="none";
      document.getElementById("step5").style.display="none";
      document.getElementById("step6").style.display="none";
      document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="none";
      $("#"+nextid).fadeIn();
      //document.getElementById(bar).style.backgroundColor="#58585a";
  
       var appointment_location = $('input[name=appointment_location]:checked').val();
       var appointment_date =  document.getElementById('appointment_date').value;		  
       var time_period = $('input[name=rdTimePeriod]:checked').val();	
       
       if (window.XMLHttpRequest)
       {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
       }
       else
       {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
            xmlhttp.onreadystatechange=function()
          {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {  
                document.getElementById("divAppointmentTime").innerHTML=xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET.html",'_appointment-slots7a2c.html?appointment_location='+appointment_location+'&appointment_date='+appointment_date+'&time_period='+time_period,true);
        xmlhttp.send(); 
}



function showCustomerProfile(id,nextid,bar)
{		
    document.getElementById("step1").style.display="none";
    document.getElementById("step2").style.display="none";
    document.getElementById("step3").style.display="none";
    document.getElementById("step4").style.display="none";
    document.getElementById("step5").style.display="none";
    document.getElementById("step6").style.display="none";
    document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="none";
    $("#"+nextid).fadeIn();
  //document.getElementById(bar).style.backgroundColor="#58585a";
   
   
   if (window.XMLHttpRequest)
   {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
   }
   else
   {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
        xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {  
            document.getElementById("divCustomerProfile").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET.html",'_returning-customerea4e.html?eml=&amp;ph=',true);
    xmlhttp.send(); 
}   

function validateReturningCustomerInfo(id,nextid,bar)
{		
    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if((regEmail.test(jQuery("#retEmail").val()) == false) && ((jQuery("#retPhone").val() == "Phone Number") || (jQuery("#retPhone").val() == "")))
    {
    
        $('#retPhone').css({
            "border" : "2px solid #FF0000"
        });
        
        $('#retEmail').css({
            "border" : "2px solid #FF0000"
        });
        
        document.getElementById('retCustomerError').innerHTML = 'Please enter a valid email address or phone number';
        return false;
    }
    else
    {
        $('#retPhone').css({
            "border" : "2px solid #000000"
        }); 
        
        $('#retEmail').css({
            "border" : "2px solid #000000"
        }); 
        
        document.getElementById("step1").style.display="none";
        document.getElementById("step2").style.display="none";
        document.getElementById("step3").style.display="none";
        document.getElementById("step4").style.display="none";
        document.getElementById("step5").style.display="none";
        document.getElementById("step6").style.display="none";
        document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="none";
        $("#"+nextid).fadeIn();
      //document.getElementById(bar).style.backgroundColor="#58585a";
          document.getElementById('retCustomerError').innerHTML = '';	
        if(regEmail.test(jQuery("#retEmail").val()) == false)
        {
            var emailValue = "-Email ID-";
        }
        else
        {
            var emailValue = jQuery("#retEmail").val();
        }
        
        if((jQuery("#retPhone").val() == "Phone Number") || (jQuery("#retPhone").val() == ""))
        {
            var phoneValue = "-Phone No-";
        } 
        else
        {
            var phoneValue = jQuery("#retPhone").val();
        }	
       
       if (window.XMLHttpRequest)
       {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
       }
       else
       {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
            xmlhttp.onreadystatechange=function()
          {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {  
                document.getElementById("divReturningCustomer").innerHTML=xmlhttp.responseText;
            }
        }
        //alert('_returning-customer.cfm?eml='+emailValue+'&ph='+phoneValue);
        xmlhttp.open("GET.html",'_returning-customerde7d.html?eml='+emailValue+'&ph='+phoneValue,true);
        xmlhttp.send(); 
    }
}   


function validateAppointmentInputs()
{
      var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if((jQuery("#appointment_firstname").val() == "") || (jQuery("#appointment_firstname").val() == "First Name"))
    {
        $('#appointment_firstname').css({
            "border" : "2px solid #FF0000"
        });
    }
    else  
    {
        $('#appointment_firstname').css({
            "border" : "2px solid #000000"
        }); 
    }
    

    if((jQuery("#appointment_lastname").val() == "") || (jQuery("#appointment_lastname").val() == "Last Name"))
    {
        $('#appointment_lastname').css({
            "border" : "2px solid #FF0000"
        });
    }
    else  
    {
        $('#appointment_lastname').css({
            "border" : "2px solid #000000"
        }); 
    }
    
    if(regEmail.test(jQuery("#appointment_email").val()) == false)
    {
        $('#appointment_email').css({
            "border" : "2px solid #FF0000"
        });
    }
    else  
    {
        $('#appointment_email').css({
            "border" : "2px solid #000000"
        }); 
    }
    
    if((jQuery("#appointment_phone").val() == "") || (jQuery("#appointment_phone").val() == "Phone Number"))
    {
        $('#appointment_phone').css({
            "border" : "2px solid #FF0000"
        });
    }
    else  
    {
        $('#appointment_phone').css({
            "border" : "2px solid #000000"
        }); 
    }
    
    
    if((jQuery("#appointment_firstname").val() == "") || (jQuery("#appointment_lastname").val() == "") || (jQuery("#appointment_phone").val() == "") || (jQuery("#appointment_firstname").val() == "First Name") || (jQuery("#appointment_lastname").val() == "Last Name") || (regEmail.test(jQuery("#appointment_email").val()) == false) || (jQuery("#appointment_phone").val() == "Phone Number") )
    {
        document.getElementById('appointmentError').innerHTML = 'Missing Required Information';
        return false;
    }
    else
    {
        //alert("Filled All The details - submitting page");
        document.getElementById('appointmentError').innerHTML = '';
        var appointment_location = $('input[name=appointment_location]:checked').val();
        var appointment_time = $('input[name=appointment_time]:checked').val();
       
        var dataString = 'appointmentArgs=' +  jQuery("#appointment_firstname").val() + '|' + jQuery("#appointment_lastname").val() + '|' + jQuery("#appointment_phone").val() + '|' + jQuery("#appointment_email").val() + '|' + jQuery("#appointment_date").val() + '|' + appointment_time + '|' + appointment_location + '|' + jQuery("#appointment_deal").val();
          
        //document.forms["frmAppointment"].submit();
      jQuery.ajax({
        type: "POST",
        url: "appointment_email.cfm",
        data: dataString,
        cache: false,
        success: function(userCount)
        {
            document.getElementById("step1").style.display="none";
            document.getElementById("step2").style.display="none";
            document.getElementById("step3").style.display="none";
            document.getElementById("step4").style.display="none";
            document.getElementById("step5").style.display="none";
            document.getElementById("step6").style.display="none";
            document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="block";
            return false;
         }
       });
    }	
}
   

 function validateAppointmentInputs2()
{
    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if((jQuery("#appointment_firstname2").val() == "") || (jQuery("#appointment_firstname2").val() == "First Name"))
    {
        $('#appointment_firstname2').css({
            "border" : "2px solid #FF0000"
        });
    }
    else  
    {
        $('#appointment_firstname2').css({
            "border" : "2px solid #000000"
        }); 
    }
    
    if((jQuery("#appointment_lastname2").val() == "") || (jQuery("#appointment_lastname2").val() == "Last Name"))
    {
        $('#appointment_lastname2').css({
            "border" : "2px solid #FF0000"
        });
    }
    else  
    {
        $('#appointment_lastname2').css({
            "border" : "2px solid #000000"
        }); 
    }
    
    if(regEmail.test(jQuery("#appointment_email2").val()) == false)
    {
        $('#appointment_email2').css({
            "border" : "2px solid #FF0000"
        });
    }
    else  
    {
        $('#appointment_email2').css({
            "border" : "2px solid #000000"
        }); 
    }
    
    if((jQuery("#appointment_phone2").val() == "") || (jQuery("#appointment_phone2").val() == "Phone Number"))
    {
        $('#appointment_phone2').css({
            "border" : "2px solid #FF0000"
        });
    }
    else  
    {
        $('#appointment_phone2').css({
            "border" : "2px solid #000000"
        }); 
    }
    
    
    if((jQuery("#appointment_firstname2").val() == "") || (jQuery("#appointment_lastname2").val() == "") || (jQuery("#appointment_phone2").val() == "") || (jQuery("#appointment_firstname2").val() == "First Name") || (jQuery("#appointment_lastname2").val() == "Last Name") || (regEmail.test(jQuery("#appointment_email2").val()) == false) || (jQuery("#appointment_phone2").val() == "Phone Number") )
    {
    
        document.getElementById('appointmentError2').innerHTML = 'Missing Required Information';
        return false;
    }
    else
    {
        //alert("Filled All The details - submitting page - 2");
        document.getElementById('appointmentError2').innerHTML = '';
        //document.forms["frmAppointment"].submit();
        var appointment_location = $('input[name=appointment_location]:checked').val();
        var appointment_time = $('input[name=appointment_time]:checked').val();
       
        var dataString = 'appointmentArgs=' +  jQuery("#appointment_firstname2").val() + '|' + jQuery("#appointment_lastname2").val() + '|' + jQuery("#appointment_phone2").val() + '|' + jQuery("#appointment_email2").val() + '|' + jQuery("#appointment_date").val() + '|' + appointment_time + '|' + appointment_location + '|' + jQuery("#appointment_deal").val();
        
        //document.forms["frmAppointment"].submit();
      jQuery.ajax({
        type: "POST",
        url: "appointment_email.cfm",
        data: dataString,
        cache: false,
        success: function(userCount)
        {
            document.getElementById("step1").style.display="none";
            document.getElementById("step2").style.display="none";
            document.getElementById("step3").style.display="none";
            document.getElementById("step4").style.display="none";
            document.getElementById("step5").style.display="none";
            document.getElementById("step6").style.display="none";
            document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="block";
            return false;
         }
       });
    }	
}

function show_next(id,nextid,bar)
{
  document.getElementById("step1").style.display="none";
  document.getElementById("step2").style.display="none";
  document.getElementById("step3").style.display="none";
  document.getElementById("step4").style.display="none";
  document.getElementById("step5").style.display="none";
  document.getElementById("step6").style.display="none";
  document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="none";
  $("#"+nextid).fadeIn();
 // document.getElementById(bar).style.backgroundColor="#58585a";
}

                                 
function show_prev(previd,bar)
{
  document.getElementById("step1").style.display="none";
  document.getElementById("step2").style.display="none";
  document.getElementById("step3").style.display="none";
  document.getElementById("step4").style.display="none";
  document.getElementById("step5").style.display="none";
  document.getElementById("step6").style.display="none";
  document.getElementById("step7").style.display="none";
      document.getElementById("step8").style.display="none";

  $("#"+previd).fadeIn();
  //document.getElementById(bar).style.backgroundColor="#D8D8D8";
}

function setDealValue(val)
{
  document.getElementById("appointment_deal").value = val;
}

