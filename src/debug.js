
(function () {
    // Save the original method in a private variable
    var _privateLog = console.log;
    // Redefine console.log method with a custom function
    console.log = function (message, filter) {
        // Here execute something with the given message or arguments variable
        // alert("Our Custom Log Says: " + message);
        // message = message;

        if (message == undefined) {
            message = " ";
        }

        if (Memory.consoleFilter && message != undefined) {
            if (!message.includes(Memory.consoleFilter)) {
                // message = "foo2";
                return;

            }
        }





        /**
            Note: If you want to preserve the same action as the original method does
            then use the following line :

            we use apply to invoke the method on console using the original arguments.
            Simply calling _privateLog(message) would fail because LOG depends on the console
           */
        _privateLog.apply(console, arguments);
    };
})();


