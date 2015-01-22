exports = module.exports = (function () {
    "use strict";
    var timer = {};
    var write = process.stdout.write.bind(process.stdout);

    var writeLn = function (msg) {
        write(msg + "\n");
    };

    timer.writeLn = writeLn;
    timer.writeLn2 = writeLn;
    timer.writeLn3 = writeLn;
    timer.writeLn4 = writeLn;

    return timer;
})();