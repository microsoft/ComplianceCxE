var cookieConsent = new CookieConsent({privacyPolicyUrl: "/ComplianceCxE/privacy/"})

if (cookieConsent.trackingAllowed()) {
    window.clarity('consent');
}

cookieConsent.setCookieStatus();