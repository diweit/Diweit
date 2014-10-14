$(document).ready(function() {  
         $('#desing').click(function() { 
            var styles1 = {
               'background-image':'url(./slide/1.jpg)'
            }
            var accion1 = $('header').css(styles1);
            var effect = $('header').fadeIn('slow');
              $.ajax({  
                  url: 'web.html',  
                  success: function(data) {  
                      $('#desc').html(data)+accion1+effect;  
                  }  
              }); 
         });
         $('#hosting').click(function() { 
            var styles2 = {
                'background-image': 'url(./slide/2.jpg)'
            }
            var accion2 = $('header').css(styles2);
            var effect = $('header').fadeIn('slow'); 
              $.ajax({  
                  url: 'hosting-profesional.html',  
                  success: function(data) {  
                      $('#desc').html(data)+accion3+effect;  
                  }  
              });  
         });
         $('#graphic').click(function() {  
            var styles3 = {
               'background-image':'url(./img/screen.jpg)'
            }
            var accion3 = $('header').css(styles3);
            var effect = $('header').fadeIn('slow');
              $.ajax({  
                  url: 'graphic.html',  
                  success: function(data) {  
                      $('#desc').html(data)+accion4+effect;  
                  }  
              });  
         });
    });  