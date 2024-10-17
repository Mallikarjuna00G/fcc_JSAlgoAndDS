function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    let grade = "";

    if(score < 60) {
        grade = "F";
    }
    else if(score < 70) {
        grade = "D";
    }
    else if(score < 80) {
        grade = "C";
    }
    else if(score < 90) {
        grade = "B";
    }
    else if(score < 100) {
        grade = "A";
    }
    else {
        grade = "A++";
    }
    return grade;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));