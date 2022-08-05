function getMarks(assignment1, assignment2, assignment3) {
    const totalMarks = assignment1 + assignment2 + assignment3;
    const averageMarks = totalMarks / 3;
    return averageMarks;
}

const assignment1 = 60;
const assignment2 = 60;
const assignment3 = 51;

var marks = getMarks(assignment1, assignment2, assignment3);
console.log('My Average Assignment Marks is:', marks);