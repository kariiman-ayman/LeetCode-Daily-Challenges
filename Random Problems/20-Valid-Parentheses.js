var isValid = function(s) {
    const stack = [];
    const parentheses = {
        \)\ : \(\,
        \}\ : \{\,
        \]\ : \[\
    };
    for (let i = 0; i < s.length; i++) {
        if (Object.values(parentheses).includes(s[i]))
            stack.push(s[i]);
        else {
            if (stack.length === 0 || stack[stack.length - 1] !== parentheses[s[i]])
                return false;
            else
                stack.pop();        
        }
    }
    return stack.length === 0;
};