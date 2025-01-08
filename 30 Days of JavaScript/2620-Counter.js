var createCounter = function(n) {
    return function() {
        const temp = n;
        n++;
        return temp;
    };
};
