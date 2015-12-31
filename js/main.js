"use strict"

/* PagePiling */
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['black', '#39C', '#ee0000', '#2C3E50','#ff0000' ],
        navigation: {
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
    $('#project_sel_2015').css("color", "black");  // Default

    $('.project_select').click(function() {
        var projectIdArray;
        var projectId = this.id;
        var yearSelected;

        $('.project_select').css("color", "green");
        $(this).css("color", "black");
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
        else if ( yearSelected == 2013) {
           $('#project_content_2015').hide();
           $('#project_content_2014').hide();
           $('#project_content_2013').show(); 
        }
        else {
            // Do nothing
        } 

    });

    // Contact me Page
    $('#woDeEmail').click(function() {
        this.remove();
        var domainNeemu = "sfu.ca";
        var zhiString = '<span>mardjuki' + '@' + domainNeemu + '</span>';
        $('#contact_me').append(zhiString);

    });
       
});
