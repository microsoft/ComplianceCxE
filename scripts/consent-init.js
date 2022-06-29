var cookieConsent = new CookieConsent({postSelectionCallback: function() { location.reload()}, privacyPolicyUrl: "/ComplianceCxE/privacy/"})

if (cookieConsent.trackingAllowed()) {
    window.clarity('consent');
}

cookieConsent.setCookieStatus();