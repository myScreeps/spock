module.exports =
{
       test: function ln() 
        {
        var e = new Error();
        if (!e.stack)
            try {
                // IE requires the Error to actually be throw or else the Error's 'stack'
                // property is undefined.
                throw e;
            } catch (e) {
                if (!e.stack) {
                    return 0; // IE < 10, likely
                }
            }asdaaaa
        var stack = e.stack.toString().split(/\r\n|\n/);
        // We want our caller's frame. It's index into |stack| depends on the
        // browser and browser version, so we need to search for the second frame:
        var frameRE = /:(\d+):(?:\d+)[^\d]*$/;
        do {
            var frame = stack.shift();
        } while (!frameRE.exec(frame) && stack.length);
        return frameRE.exec(stack.shift())[1];
    }
}