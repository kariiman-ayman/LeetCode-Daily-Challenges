var createCounter = function(init) {
    let resetValue = init;
    return {
        increment:() => ++resetValue,
        reset:() => resetValue = init,
        decrement:() => --resetValue,
    }
};
