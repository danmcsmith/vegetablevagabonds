$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: 'danmcsmith',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJWMjdjdkZAiNGRsZAjJWUXEtY3pYbTdrZAlJNcE03U1ZAIcnQ5czd0anU5UWJMYmloT3BIdzlNUXNYVmZAZAU2tVWDZAJNVRydnlaT1RqQmw0Wmo4c2FocU9VU2oxcTN4Ynd3ZAU5aSHRlbHdid0N2ald4egZDZD',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});