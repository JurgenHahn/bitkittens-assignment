$(function(){
  $('button').on('click', function(){
    console.log('Button Clicked!');

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(data){

      // var i = 0;
      //
      // $.each(data.cats, function(){
      //   i++;
      //   $('<img>').attr('src', this.photo).appendTo('#cat' + i);
      // })



      for (var i=0; i < data.cats.length; i++){

      $('<img>').attr('src', data.cats[i].photo).appendTo('#cat' + (i+1));
    }
    });

  });
});
