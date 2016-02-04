"use strict"

/* PagePiling */
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['black', '#071d2c', '#222d39', '#1e4256', 'rgb(75, 102, 132)' ],
        navigation: {
            'textColor': 'white',
            'bulletsColor': 'white',
            'position': 'right',
            'tooltips': ['TOP↑', 'About Me', 'Projects', 'Resume', 'Contact Me']
        },

    });
});
/* Colorbox */
$(document).ready(function() {
    $(".inline").colorbox({inline:true, width:"50%"});   
});

/* Others */
$(document).ready(function() {
    // TOP Page
    setInterval(function(){ 
        var noticeColour = $('#notice_me').css("color");
        if ( noticeColour == "rgb(255, 0, 0)") {
            $('#notice_me').css("color", "white");
        }
        else{ 
            $('#notice_me').css("color", "red");
        }
    }, 1500);

    $('.logo_icon').hover(function() {
            $(this).fadeOut(100);
            $(this).fadeIn(800);
            var valueText = this.id;
            valueText = '<span id="logo_hoverText">' + valueText + '</span>';
            $('#logo_hoverText').replaceWith( $(valueText) );
        }, function() {
            var valueText = '<span id="logo_hoverText">_______</span>';
            $('#logo_hoverText').replaceWith( $(valueText) );        
        }
    );
    // Projects Page
    $('#project_sel_2015').css("color", "rgb(200, 78, 25)");  // Default

    var clicked = false;

    var oriColour; // Original colour of project select
    $('.project_select').hover(
        function() {
            oriColour = $(this).css("color");
            if ( oriColour != "rgb(200, 78, 25)" ) {
                $(this).css("color", "rgb(200, 78, 25)");
            }            
        },function() {
            if ( oriColour != "rgb(200, 78, 25)" ) {
                if (!clicked) {
                    $( this ).css("color", "green");
                }
                else {
                    clicked = false;
                }
            }
        }    
    );    

    $('.project_select').click(function() {
        var projectIdArray;
        var projectId = this.id;
        var yearSelected;

        $('.project_select').css("color", "green");
        projectIdArray = projectId.split('_');
        yearSelected =  projectIdArray[2];
        if ( yearSelected == 2015) {
           $('#project_content_2015').show();
           $('#project_content_2014').hide();
           $('#project_content_2013').hide(); 
        }
        else if ( yearSelected == 2014) {
           $('#project_content_2015').hide();
           $('#project_content_2014').show();
           $('#project_content_2013').hide(); 
        }
        clicked = true;
        $(this).css("color", "rgb(200, 78, 25)")
        // Else do nothing

    });

    // Contact me Page
    $('#woDeEmail').click(function() {
        this.remove();
        var domainNeemu = "sfu.ca";
        var zhiString = '<span>mardjuki' + '@' + domainNeemu + '</span>';
        var areaCode = '778';
        var theRest = '846';
        zhiString = zhiString + ' / ' + '+1 '+ '(' +areaCode +') ' + theRest + '-1928';
        $('#contact_me').append(zhiString);

    });
       
});
