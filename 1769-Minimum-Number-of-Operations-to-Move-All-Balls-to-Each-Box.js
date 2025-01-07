var minOperations = function(boxes) {
    const positions = [];
    const ans = [];
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] === "1")
            positions.push(i);
    }
    for (let i = 0; i < boxes.length; i++) {
        let sum = 0;
        for (let pos of positions) {
            const distance = Math.abs(i - pos);
            sum += distance;
        }
        ans.push(sum);
    }
    return ans;
};