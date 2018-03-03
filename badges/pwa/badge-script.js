(function setUpBadge() {
    var names = {
        'alexandru-pavaloi': 'Alexandru Păvăloi',
        'alexandru-badea': 'Alexandru Badea',
        'bogdan-hagiu': 'Bogdan Hagiu',
        'alex-bolbosenco': 'Alex Bolboșenco',
        'andrei-constantin': 'Andrei Constantin',
        'andu-andrici': 'Andu Andrici',
        'bogdan-carbune': 'Bogdan Cărbune',
        'dan-alexandru': 'Dan Alexandru',
        'daniel-condurachi': 'Daniel Condurachi',
        'daniel-unguru': 'Daniel Unguru',
        'mihail-iftodi': 'Mihail Iftodi',
        'vlad-serban': 'Vlad Șerban'
    };
    try {
        var element = document.getElementById('gf-pwa-workshop-badge');
        var iframe = document.createElement('iframe');

        if (!(element.dataset.name in names)) {
            throw new Error("the name you inserted isn't part of our database for the workshop");
        }

        iframe.scrolling = 'no';
        iframe.height = 410;
        iframe.style.border = 0;
        iframe.style.overflow = 'hidden';

        iframe.src = 'data:text/html;charset=utf-8,' + encodeURI('<head><link href="https://fonts.googleapis.com/css?family=Quicksand:400,700" rel="stylesheet"><link rel="stylesheet" href="https://geekyandfun.github.io/badges/pwa/badge-style.css" /></head><body><div class="badge"><div class="badge__top"><h1 class="badge__title"> Progressive Web Apps certification</h1><h2 class="badge__name">' + names[element.dataset.name] + '</h2></div><div class="badge__bottom is-oblique background-color--white"><p class="additional-info">Awarded by <a href="https://geekyandfun.github.io/" target="_blank">Geeky & Fun</a> for having succesfully completed our <a href="https://geekyandfun.github.io/pwa/" target="_blank">10 hours PWA workshop</a>.</p><a class="date"><span>04 Mar 2018</span></a><div class="keywords"><img src="https://geekyandfun.github.io/badges/icon.png" width="38"/></div></div></div></body>');
        element.appendChild(iframe);
    } catch (e) {
        console.error('Geeky & Fun badge failed to initialize |', e);
    }
}());