function add() {
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        var x = arguments[0];
        return function(y) {
            if (typeof y === 'number') {
                return x + y;
            }
        };
    } else if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
        return arguments[0] + arguments[1];
    }
}
add(2,3);
