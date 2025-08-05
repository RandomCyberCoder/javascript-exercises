const fibonacci = function(place) {
    let prev = 1;
    let cur = 1;
    let start = 2;
    place = parseInt(place);
    if(place < 0) return "OOPS";
    if(place === 0) return 0;
    if(place === 1) return prev;
    if(place === 2) return cur;
    while(start < place){
        let next = prev + cur;
        prev = cur;
        cur = next;
        start++;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
