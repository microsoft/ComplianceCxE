function extLinkOnly() {
    var anchr,
        elements = document.getElementsByTagName || undefined;
    if (elements || document.links) {
        var lanks = document.getElementsByTagName("a") || document.links;
        var lanksNum = lanks ? lanks.length : null;
        if (lanksNum) {
            for (i = 0; i < lanksNum; i++) {
                lankAcr = lanks[i];
                if ((lankAcr.hostname != window.location.hostname) && (lankAcr.href != "javascript:cookieConsent.reset()")) {
                    lankAcr.target = "_blank";
                }
            }
        }
    }
}
extLinkOnly();