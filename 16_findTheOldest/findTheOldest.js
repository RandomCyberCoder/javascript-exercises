const findTheOldest = function(arr) {
    const curYear = (new Date()).getFullYear();
    return arr.reduce((p1, p2) => {
        let YOD1 = p1.yearOfDeath || curYear;
        let delta1 = YOD1 - p1.yearOfBirth;

        let YOD2 = p2.yearOfDeath || curYear;
        let delta2 = YOD2 - p2.yearOfBirth;

        if(delta1 > delta2) return p1;
        return p2
    })
};

// Do not edit below this line
module.exports = findTheOldest;
