$('.close-btn').on('click', function(){
    $('.home-content').animate({marginLeft:'0'}, 450)
    $('.side-nav').animate({width: '0'}, 50)
})

$('.open-nav').on('click', function(){
    $('.home-content').animate({marginLeft: '250px'}, 450)
    $('.side-nav').animate({width: '250px'}, 50)
})

$('.details-content h3').on('click', function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
})


$('.side-nav a[href^="#"]').on('click', function(e){

    let sectionId = e.target.getAttribute('href');

    let sectionOffset = $(sectionId).offset().top;

    $('body,html').animate({scrollTop: sectionOffset}, 1000)
})


function countDown(countTo){

    let date = new Date(countTo)

    date = (date.getTime()/1000);
    
    let now = (new Date().getTime() / 1000);

    const distance = (date - now);
    
    const days = Math.floor(distance / (24*60*60));
    const hours = Math.floor((distance - (days * (24*60*60))) / 3600);
    const minutes = Math.floor((distance - (days * (24*60*60)) - (hours * 3600 )) / 60);
    const seconds = Math.floor((distance - (days * (24*60*60)) - (hours * 3600) - (minutes * 60)))
    
    $('.day').html(`${days} D`)
    $('.hour').html(`${hours} H`)
    $('.minute').html(`${minutes} M`)
    $('.second').html(`${seconds} S`)
      
        setInterval(function() { countDown(countTo) }, 1000);
}


window.onload = function(){
    countDown("10 october 2021 9:56:00")
}


let textlength = 100;
$('textarea').keyup(function(){
    let length = $(this).val().length;
    let lenLeft = textlength - length;
    if(lenLeft <= 0){
        $('#chars').text("your available character finished");
    }
    else{
        $('#chars').text(lenLeft);
    }
})