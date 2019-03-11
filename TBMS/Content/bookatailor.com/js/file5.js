function validatePickupInputs()
{	
    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if( ((jQuery("#pickup_phone").val() == "") || (jQuery("#pickup_phone").val() == "Phone Number")) &&  (regEmail.test(jQuery("#pickup_email").val()) == false))
    {
        document.getElementById('pickupError').innerHTML = 'Missing Required Information';
        $('#pickup_email').css({
            "border" : "2px solid #FF0000"
        });
        
        $('#pickup_phone').css({
            "border" : "2px solid #FF0000"
        });
        return false;
    }
    else
    {
        document.getElementById('pickupError').innerHTML = '';
        loadActivePickupShowrooms(jQuery("#pickup_email").val(), jQuery("#pickup_phone").val());
    }
}	

function TrimInputs(str)
{
  return str.replace(/^\s+|\s+$/g,'');
}

function submitPickupInfo()
{
  document.forms["frmPickup"].submit();
}


function show_prev_pickup(previd,bar)
{
  document.getElementById("PickupStep1").style.display="none";
  document.getElementById("PickupStep2").style.display="none";
  document.getElementById("PickupStep3").style.display="none";
  document.getElementById("PickupStep4").style.display="none";
  document.getElementById("PickupStep5").style.display="none";
  $("#"+previd).fadeIn();
}


 function loadActivePickupShowrooms(pickup_email, pickup_phone)
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
            document.getElementById("divActivePickupShowrooms").innerHTML=xmlhttp.responseText;
            show_prev_pickup('PickupStep2','bar2');
        }
      }
    
    xmlhttp.open("GET.html",'_showrooms-pickup9a71.html?pickup_email='+pickup_email+'&pickup_phone='+pickup_phone,true);
    xmlhttp.send(); 
  }	
  
  
  function gotoPickupDate()
  {
      document.getElementById("PickupStep1").style.display="none";
      document.getElementById("PickupStep2").style.display="none";
      document.getElementById("PickupStep3").style.display="none";
      document.getElementById("PickupStep4").style.display="none";
      document.getElementById("PickupStep5").style.display="none";
      $("#PickupStep3").fadeIn();
  }
  
  function show_pickup_time(id,nextid,bar)
  {
       var pickup_location = $('input[name=pickup_location]:checked').val();
       var pickup_date =  document.getElementById('pickup_date').value;		  
       var time_period = $('input[name=rdPickupTimePeriod]:checked').val();	
       
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
                document.getElementById("divPickupTime").innerHTML=xmlhttp.responseText;
                show_prev_pickup('PickupStep5','bar2');
            }
        }
        xmlhttp.open("GET.html",'_pickup-slotsd6d4.html?pickup_location='+pickup_location+'&pickup_date='+pickup_date+'&time_period='+time_period,true);
        xmlhttp.send(); 
 }
    
    
  //<![CDATA[
 $(function() {
    $('.pickupCalendar').pignoseCalendar({
        select: function(date, obj) {
        document.getElementById("pickup_date").value = date[0].format('MM/DD/YYYY');
        show_prev_pickup('PickupStep4','bar1');
        }
    });
    
    $('.input-calendar').pignoseCalendar({
        buttons: true,
    });
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    var today = mm+'/'+dd+'/'+yyyy;
    document.getElementById("pickup_date").value = today;
    
    
    var $btn = $('.btn-calendar').pignoseCalendar({
        modal: true,
        buttons: true,
        apply: function(date) {
            $btn.next().show().text('You applied date ' + date + '.');
        }
    });

    $('.calendar-dark').pignoseCalendar({
        theme: 'dark',
        select: function(date, obj) {
            obj.calendar.parent().next().show().text('You selected ' + 
            (date[0] === null? 'null':date[0].format('YYYY-MM-DD')) +
            '.');
        }
    });

    $('.multi-select-calendar').pignoseCalendar({
        multiple: true,
        select: function(date, obj) {
            obj.calendar.parent().next().show().text('You selected ' + 
                (date[0] === null? 'null':date[0].format('YYYY-MM-DD')) +
                '~' +
                (date[1] === null? 'null':date[1].format('YYYY-MM-DD')) +
                '.');
        }
    });

    $('.toggle-calendar').pignoseCalendar({
        toggle: true,
        select: function(date, obj) {
            var $target = obj.calendar.parent().next().show().html('You selected ' + 
            (date[0] === null? 'null':date[0].format('YYYY-MM-DD')) + 
            '.' +
            '<br /><br />' +
            '<strong>Active dates</strong><br /><br />' +
            '<div class="active-dates"></div>');

            for(var idx in obj.storage.activeDates) {
                var date = obj.storage.activeDates[idx];
                if(typeof date !== 'string') {
                    continue;
                }
                $target.find('.active-dates').append('<span class="label label-default">' + date + '</span>');
            }
        }
    });
    
    
    $('.language-calendar').each(function() {
        var $this = $(this);
        var lang = $this.data('lang');
        $this.pignoseCalendar({
            lang: lang
        });
    });
    
 });
 //]]>


  jQuery('.phone_us').mask('(000) 000-0000');
  show_prev_pickup('PickupStep1','bar1');
  