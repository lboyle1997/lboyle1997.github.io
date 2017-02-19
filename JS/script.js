    //Goes to top on load  
    $('html,body').animate({scrollTop:0});
    
    
    // Closes the sidebar menu
    $("#menu-close").click(function(e) 
    {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });


    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) 
    {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });


    // Smoothly scrolls to item on the page
    $(function() 
    {
        $('a[href*=#]:not([href=#])').click(function() 
        {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) 
            {

                var part = $(this.hash);
                part = part.length ? part : $('[name=' + this.hash.slice(1) + ']');
                if (part.length) 
                {
                    $('html,body').animate({scrollTop: part.offset().top}, 1000);
                    return false;
                }
            }
        });
    });
        
        
    //to-top button appears after scrolling
    var appear = false;
    $(document).scroll(function() 
    {
        if ($(this).scrollTop() > 250) 
        {
            if (!appear) 
            {
               appear = true;
               $('#to-top').show("slow", function() 
               { 
                  $('#to-top').css({ position: 'fixed', display: 'block'});
               });
            }
        } 
        else 
        {
            if (appear) 
            {
                appear = false;
                $('#to-top').hide("slow", function() 
                {
                  $('#to-top').css({ display: 'none' });
                });
            }
        }
    });
        
        
    // Function for disabiling scrolling on the map untill the user clicks on it and returns to no scrolling when the mouse leaves the map
    var mouseLeave = function(event) 
    {
        $(this).on('click', mouseClick);
        $(this).off('mouseleave', mouseLeave);
        $(this).find('iframe').css("pointer-events", "none");
    }
    var mouseClick = function(event) 
    {
            // Disable the click handler
            $(this).off('click', mouseClick);
            // Enable scrolling on the map
            $(this).find('iframe').css("pointer-events", "auto");
            // Handles the mouse leave event
            $(this).on('mouseleave', mouseLeave);
    }   
    // Enable map scrolling with the mouse when the user clicks on the map
    $('.map').on('click', mouseClick);
