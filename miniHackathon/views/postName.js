
$( document ).ready(function() {
    $('#postname').on('submit', (event)=>{
        event.preven
        $.ajax({
            url:"/add/player",
            type: 'POST'
        })    
    })
  });