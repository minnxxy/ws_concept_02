

$('#signup').click(function(e){
    e.preventDefault();
    
    //Sign Up Form & Home button fade in
    $('#contact').fadeIn('fast');
    $('#submit').fadeIn('fast');
    document.getElementById("home").style.display = "block";
    document.getElementById("signup").style.display = "none";
    
});

//Reverse changes
$('#home').click(function(e){
    e.preventDefault();
  
    $('#contact').fadeOut('fast');
    $('#submit').fadeOut('fast');
    document.getElementById("signup").style.display = "block";
    document.getElementById("home").style.display = "none";
    
});
