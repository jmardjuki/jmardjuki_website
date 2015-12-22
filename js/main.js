$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#2C3E50', '#39C', '#ee005a', '#39C','#ff0000' ],
        navigation: {
            'position': 'right',
            'tooltips': ['TOP↑', 'About Me', 'Projects', 'Gallery', 'Contact Me']
        },

    });
});

$(document).ready(function() {
    $('.logo_icon').hover(function() {
            $( this ).fadeOut( 100 );
            $( this ).fadeIn( 800 );
            var valueText = this.id;
            valueText = '<span id="logo_hoverText">' + valueText + '</span>'
            $('#logo_hoverText').replaceWith( $(valueText) );
        }, function() {
            var valueText = '<span id="logo_hoverText">_______</span>'
            $('#logo_hoverText').replaceWith( $(valueText) );        
        }
    );  
});