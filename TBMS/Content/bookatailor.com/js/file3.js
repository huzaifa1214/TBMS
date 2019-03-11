	//<![CDATA[
        $(function() {
            $('.calendar').pignoseCalendar({
                select: function(date, obj) {
                document.getElementById("appointment_date").value = date[0].format('MM/DD/YYYY');
                show_next('step2','step3','bar2');
                 // alert('date 1 = ' + date[0].format('MM/DD/YYYY'));
                    /* obj.calendar.parent().next().show().text('You selected ' + 
                    (date[0] === null? 'null':date[0].format('YYYY-MM-DD')) +
                    '.'); */
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
            document.getElementById("appointment_date").value = today;
            
            
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