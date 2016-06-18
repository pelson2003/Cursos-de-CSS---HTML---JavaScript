
// Utilizando a comunicação por JSON
// quase um if, achou, nao achou 

$(function() {
  $('#clickme').click(function() {

    $.ajax({
           url: 'data19.json',
           dataType: 'json',
           success: function(data) {
              var items = [];

              $.each(data, function(key, val) {

                items.push('<li id="' + key + '">' + val + '</li>');    

              });

              $('<ul/>', {
                 'class': 'interest-list',
                 html: items.join('')
              }).appendTo('body');

           },

           // else
          statusCode: {
             404: function() {
               alert('There was a problem with the server.  Try again soon!');
             }
           }
        });
      });
});






/*
  $('#clickme').click(function() {

      // Usamos o metodo getJson do Jquery para conectar o servidor
      // Como não temos um servidor direcionamento para o arquivo abaixo
      // Além disso disparamos uma função
      $.getJSON('data19.json', function(data) {

          // Nesta função agora vamos pegar os dados que estão no servidor
          var items = [];

          // Usamos o metodo abaixo para iterar nos dados e receber
          // A chave e o valor de cada dado
          $.each(data, function(key, val) {

              // Utilizamos o metodo push para adicionar key and values
              // No array item criado acima.
              items.push('<li id="' + key + '">' + val + '</li>');

          });

          // Usamos a função abaixo do JQuery para criar um tag html e colocar no body
          $('<ul/>', {
              'class': 'interest-list' ,
              // usamos o metodo items.join para unir 
              html: items.join('')
          }).appendTo('body');

      });
  });
});
*/


/*  
  $('#clickme').click(function() {
   
    /*
    $.getJSON('data19.json', function(data) {

        var items = [];

        $.each(data, function(key, val) {

          items.push('<li id="' + key + '">' + val + '</li>');    

        });

        $('<ul/>', {
          'class': 'interest-list',
          html: items.join('')
        }).appendTo('body');

     });
     
    
    $.ajax({
       url: 'data19a.json',
       dataType: 'json',
       success: function(data) {
          var items = [];

          $.each(data, function(key, val) {

            items.push('<li id="' + key + '">' + val + '</li>');    

          });

          $('<ul/>', {
             'class': 'interest-list',
             html: items.join('')
          }).appendTo('body');

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  });

});
*/