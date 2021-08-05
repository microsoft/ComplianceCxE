var cookieConsent = new CookieConsent({privacyPolicyUrl: "/privacy/"})

if (cookieConsent.trackingAllowed()) {
    window.clarity('consent');
}

cookieConsent.setCookieStatus();