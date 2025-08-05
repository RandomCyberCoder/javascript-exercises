const getTheTitles = function(arr) {
    return arr.reduce((accum, item) => {
        accum.push(item.title)
        return accum
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
