var course = {
    html: 3,
    css: 5,
    bootstrap: 2,
    tailwind: 1,
    javaScrip: 4,
}

var courseName = 'javaScrip';
var courseNameValue = course[courseName];

var courseProperty = Object.keys(course);
console.log(courseProperty);

var courseValue = Object.values(course);
console.log(courseValue);

console.log(course);

// set property value

course.javaScrip = 10;
console.log(course);

course['javaScrip'] = 20;
console.log(course);

course[courseName] = 30;
console.log(course);
