// Animate Smooth Scroll
$('#view-work').on('click',function(){
    
    const images = $('#images').position().top;
    event.preventDefault();
    event.stopPropagation();

    $('html,body').animate({

        scrollTop: images
    },
    500
    );
});