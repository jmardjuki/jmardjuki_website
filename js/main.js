$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#2C3E50', 'white', '#ee005a', '#39C'],
        navigation: {
            'position': 'right',
            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page5']
        },

    });
});