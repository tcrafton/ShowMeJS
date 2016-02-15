var ShowMeJS = (function () {
    "use strict";
    
    var publicAPI;

    function displayCode(codeToShow) {
        $("#codeDisplay").html(Util.showCode(codeToShow));
        var precode = document.getElementById('codeDisplay');
        Prism.highlightElement(precode);
    }

    function init() {
        // add event handlers
        $("#no_recursion").on("click", (function () {
            return displayCode(RecursionExample.getTasks);
        }));

        $("#with_recursion").on("click", (function () {
            return displayCode(RecursionExample.getTasksWithRecursion);
        }));
    }

    publicAPI = {
        init: init
    };

    return publicAPI;

})();


$(document).ready(function () {
    ShowMeJS.init();   
});