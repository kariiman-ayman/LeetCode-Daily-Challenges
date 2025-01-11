var finalPrices = function(prices) {
    const ans = [];
    let receiveDiscount = false;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i])
            {
                ans.push(prices[i] - prices[j]);
                receiveDiscount = true;
                break;
            }
        }
        if (!receiveDiscount)
            ans.push(prices[i]);
        receiveDiscount = false;
    }
    return ans;
};