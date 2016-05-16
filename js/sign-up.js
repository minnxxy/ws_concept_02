
$('#signup').click(function(e){
    e.preventDefault();
    $('#logo').fadeOut('fast', function(){
        $('#contact').fadeIn('fast');
    });
    
    $('#signup').fadeOut('fast', function(){
        $('#submit').fadeIn('fast');
    });
    
    $('#home').fadeIn('slow');
});

$('#home').click(function(e){
    e.preventDefault();
    $('#contact').fadeOut('fast', function(){
        $('#logo').fadeIn('fast');
    });
    
    $('#submit').fadeOut('fast', function(){
        $('#signup').fadeIn('fast');
    });
    
    document.getElementById("home").style.display = "none";
});
