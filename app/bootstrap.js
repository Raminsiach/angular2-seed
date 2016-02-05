System.register(['angular2/platform/browser', './kod.component'], function(exports_1) {
    var browser_1, kod_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (kod_component_1_1) {
                kod_component_1 = kod_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(kod_component_1.KodComponent);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map