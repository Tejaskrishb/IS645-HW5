/**
 3.	Complete the code to produce the output shown.
Input: An array of student objects
Processing:  
Use functional programming.  Use filter, map, reduce, and pure functions.
Hint: See tutorial, "Student Results"
Output:  An array of student objects with the shown properties.  Shows students whose last name begins with "C": First and Last name; Min, Max, and Average Score.  
 */

//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

const filteredList = studentList.filter(studentObj => studentObj.lastName.startsWith('C'));
const cLastNameResults = filteredList.map(studentObj => 
        {
            return {
                firstName: studentObj.firstName,
                lastName: studentObj.lastName,
                minScore: Math.min(...studentObj.scores),
                maxScore: Math.max(...studentObj.scores),
                avgScore: studentObj.scores.reduce((acc, value) => acc + value,0)/studentObj.scores.length
            }
        }
    );
console.log(cLastNameResults);    
