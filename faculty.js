//super admin exclusively

            //page switch
            (function(){

                $('.btn-lg').on('click',function(){
                  $('.parent').css('display','none');
                var i = $(this).index();
                $('.parent').eq(i).css('display','block');
                });
                
                
  
                // table actions
                $('body').on('click', '.glyphicon-trash', function(){
                  var removal = $(this).parents('tr').remove();
                });
                
                
                $('body').on('click', '.glyphicon-pencil', function(){
                
                
                var nm0 = $(this).parents('tr').find('td:eq(0)').html();
                var nm1 = $(this).parents('tr').find('td:eq(1)').html();
                var nm2 = $(this).parents('tr').find('td:eq(2)').html();
                var nm3 = $(this).parents('tr').find('td:eq(3)').html();
                var nm4 = $(this).parents('tr').find('td:eq(4)').html();
                var nm5 = $(this).parents('tr').find('td:eq(5)').html();
                var nm6 = $(this).parents('tr').find('td:eq(6)').html();
                
                
                
                var inp0 = $(this).parents('tr').find('td:eq(0)').html("<input name= 'edit_text0' value= '"+nm0+"'>");
                var inp1 = $(this).parents('tr').find('td:eq(1)').html("<input name= 'edit_text1' value= '"+nm1+"'>");
                var inp2 = $(this).parents('tr').find('td:eq(2)').html("<input name= 'edit_text2' value= '"+nm2+"'>");
                var inp3 = $(this).parents('tr').find('td:eq(3)').html("<input name= 'edit_text3' value= '"+nm3+"'>");
                var inp4 = $(this).parents('tr').find('td:eq(4)').html("<input name= 'edit_text4' value= '"+nm4+"'>");
                var inp5 = $(this).parents('tr').find('td:eq(5)').html("<input name= 'edit_text5' value= '"+nm5+"'>");
                var inp6 = $(this).parents('tr').find('td:eq(6)').html("<input name= 'edit_text6' value= '"+nm6+"'>");
                
                $(this).parents('tr').find('td:eq(7)').prepend("<span class='glyphicon glyphicon-upload mr-3'></span>");
                $(this).hide(); 
                $('input').addClass('inputclass');
                });
                
                
                ('body').on('click', '.glyphicon-upload', function(){
                  var edit0 = $(this).parents('tr').find("input[name='edit_text0']").val();
                  var edit1 = $(this).parents('tr').find("input[name='edit_text1']").val();
                  var edit2 = $(this).parents('tr').find("input[name='edit_text2']").val();
                  var edit3 = $(this).parents('tr').find("input[name='edit_text3']").val();
                  var edit4 = $(this).parents('tr').find("input[name='edit_text4']").val();
                  var edit5 = $(this).parents('tr').find("input[name='edit_text5']").val();
                  var edit6 = $(this).parents('tr').find("input[name='edit_text6']").val();
                
                 var zero = $(this).parents('tr').find('td:eq(0)').text(edit0);
                  var one = $(this).parents('tr').find('td:eq(1)').text(edit1);
                  var two = $(this).parents('tr').find('td:eq(2)').text(edit2);
                  var three = $(this).parents('tr').find('td:eq(3)').text(edit3);
                  var four = $(this).parents('tr').find('td:eq(4)').text(edit4);
                  var five = $(this).parents('tr').find('td:eq(5)').text(edit5);
                  var six = $(this).parents('tr').find('td:eq(6)').text(edit6);
                  
                  
                
                  $(this).parents('tr').find('.glyphicon-pencil').show();
                  $(this).parents('tr').find('td:eq(7)').prepend("<span class='glyphicon glyphicon-pencil mr-3'></span>");
                  $(this).parents('tr').find('.glyphicon-upload').remove();
                 
                });
                
                
                })();
  