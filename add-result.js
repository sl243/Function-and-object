function resultMarks(shamim, Sadia, kaushik, irin) {
    const sumMarks = shamim + Sadia + kaushik + irin;
    const averageMarks = sumMarks / 4;
    return averageMarks;
}

const shamimMarks = resultMarks(98, 45, 34, 65);
const SadiaMarks = resultMarks(76, 34, 55, 98);
const kaushikMarks = resultMarks(99, 44, 67, 23);
const irinMarks = resultMarks(56, 78, 34, 65);

const result = resultMarks(shamimMarks, SadiaMarks, kaushikMarks, irinMarks);
console.log('Four person Agerage Marks is:', result);