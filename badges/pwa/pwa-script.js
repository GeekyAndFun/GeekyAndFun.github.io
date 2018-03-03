(function setUpBadge() {

    var iframe = document.createElement('iframe');
    
    var element = document.getElementById('gf-pwa-workshop-badge');
    
    iframe.src = "https://geekyandfun.github.io";
    
    element.appendChild(iframe);
    
    iframe.contentDocument.body.innerHTML = 'ceva';

    // var names = ['alexandru-pavaloi'];
    // try {
    //     var element = document.getElementById('gf-pwa-workshop-badge');
    //     if (names.indexOf(element.dataset.name) === -1) {
    //         throw new Error("the name you inserted isn't part of our database for the workshop");
    //     }
    //     var iframe = document.createElement('iframe');
    //     iframe.scrolling = 'no';
    //     iframe.height = 410;
    //     iframe.style.border = 0;
    //     iframe.style.overflow = 'hidden';

    //     element.appendChild(iframe);
    //     iframe.contentDocument.body.style.margin = '5';
    //     iframe.contentDocument.body.innerHTML = '<div class="badge"><div class="badge__top"><h1 class="badge__title"> Progressive Web Apps certification</h1><h2 class="badge__name"> Alexandru Păvăloi</h2></div><div class="badge__bottom is-oblique background-color--white"><p class="additional-info">Awarded by <a href="https://geekyandfun.github.io/" target="_blank">Geeky & Fun</a> for having succesfully completed our <a href="https://geekyandfun.github.io/pwa-reference" target="_blank">10 hours PWA workshop</a>.</p><a class="date"><span>04 Mar 2018</span></a><div class="keywords"><img src="https://geekyandfun.github.io/badges/icon.png" width="38"/></div></div></div>';
    //     iframe.contentDocument.head.innerHTML = '<link href="https://fonts.googleapis.com/css?family=Quicksand:400,700" rel="stylesheet"><link rel="stylesheet" href="https://geekyandfun.github.io/badges/pwa/pwa-style.css" />';
    // } catch (e) {
    //     console.error('Geeky & Fun badge failed to initialize |', e);
    // }

}());