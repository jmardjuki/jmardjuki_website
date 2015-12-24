"use strict"

/* PagePiling */
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#2C3E50', '#39C', '#ee0000', '#39C','#ff0000' ],
        navigation: {
            'position': 'right',
            'tooltips': ['TOP↑', 'About Me', 'Projects', 'Resume', 'Contact Me']
        },

    });
});

/* Others */
$(document).ready(function() {
    // TOP Page
    $('.logo_icon').hover(function() {
            $(this).fadeOut(100);
            $(this).fadeIn(800);
            var valueText = this.id;
            valueText = '<span id="logo_hoverText">' + valueText + '</span>'
            $('#logo_hoverText').replaceWith( $(valueText) );
        }, function() {
            var valueText = '<span id="logo_hoverText">_______</span>'
            $('#logo_hoverText').replaceWith( $(valueText) );        
        }
    );
    // Projects Page
    $('.project_select').hover(function() {
        // Fade
        //$(this).fadeOut(100);
        //$(this).fadeIn(200);
        //$(this).append('*');
    /*}, function() {
        var test = $(this).findIndexOf('*');
        console.log(test);
    */
    });
    $('.project_select').click(function() {
        var projectIdArray;
        var projectId = this.id;
        var yearSelected;

        projectIdArray = projectId.split('_');
        yearSelected =  projectIdArray[2];
        yearSelected = "#project_content_" + yearSelected;
        console.log(yearSelected);
        $(yearSelected).show();

    });
       
});
