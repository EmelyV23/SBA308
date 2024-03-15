const CourseInfo = {
    "id": 101,
    "name": "Calculus"
};

const AssignmentGroup ={
    "id": 23240,
    "name": "Pre-Calculus",
    "courseID": 101,
    "groupWeight": 30,
    "assignments": [
        {
            "id": 1, 
            "name": "Function Graphs",
            "dueDate": "2024-01-26",
            "pointsPossible": 50
        }, 
        {
            "id": 2, 
            "name": "Piecewise Functions",
            "dueDate": "2024-01-30",
            "pointsPossible": 50
        },
        {
            "id": 3, 
            "name": "Graphical Analysis",
            "dueDate": "2024-02-05",
            "pointsPossible": 80
        },
        {
            "id": 4, 
            "name": "Proportional Change",
            "dueDate": "2024-02-06",
            "pointsPossible": 100
        }
    ]
};

const LearnerSubmissions = [
    {
        "learnerID": 675,
        "assignmentID": 1,
        "submission": {
            "submittedAt": "2024-01-26",
            "score": 49
        }
    },
    {
        "learnerID": 675,
        "assignmentID": 2,
        "submission": {
            "submittedAt": "2024-01-30",
            "score": 50
        }
    },
    {
        "learnerID": 675,
        "assignmentID": 3,
        "submission": {
            "submittedAt": "2024-02-05",
            "score": 70
        }
    },
    {
        "learnerID": 675,
        "assignmentID": 4,
        "submission": {
            "submittedAt": "2024-02-06",
            "score": 125
        }
    },
    {
        "learnerID": 503,
        "assignmentID": 1,
        "submission": {
            "submittedAt": "2024-01-26",
            "score": 37
        }
    },
    {
        "learnerID": 503,
        "assignmentID": 2,
        "submission": {
            "submittedAt": "2024-02-01",
            "score": 50
        }
    }
    
];

// function getLearnerData(course, ag, submission) {
//     const result = [
//         {
//             id: 675,
//             avg: 0.99,
//             1: 0.99,
//             2: 1.0
//         },
//         {
//             id: 503,
//             avg: 0.82,
//             1: 0.74,
//             2: 0.90 // late, take ten percent off. (50 - 5) / 50
//         }
//     ];
//     return result
//}
function getLearnerData(course,ag,submissions) {
if (course.id != AssignmentGroup.courseID){
    console.log("Course ID doesn't match assignment group ID");
    return null;
}

const result = [];

const resultsIDs = [];
const resultsAssignments = [];
const resultScores = [];
const resultsAvg = [];

for (const submissionElement of submissions) {
    currentLearnerID = submissionElement.learnerID;
    resultsIDs.push(currentLearnerID);

    for (i = 0; i < resultsIDs.length; i++){
        if (currentLearnerID == resultsIDs[i - 1]){
            resultsIDs.pop();
        }
    }
}
for (i = 0; i < resultsIDs.length; i++){
    resultsAssignments.push({
        id: resultsIDs[i],
        assignments: [],
        assignmentReferences: [],
    });
    resultScores.push({
        id: resultsIDs[i],
        scores: [],
        maximumScores: []
    });
    resultsAvg.push({
        id: resultsIDs[i],
        avgScore: []
    });
    for (const assignment of submissions){
        if (assignment.learnerID == resultsIDs[i]){
            try {
                const curDate = new
                Date(assignment.submission.submittedAt);
                assignment.submission.submittedAt =
                curDate;
            } catch (e) {
                console.log('invalid date')
            }
            resultsAssignments[i].assignments.push(assignment);
        }
    }
}
for (const resultAssignment of resultsAssignments) {
    for (const assignment of resultAssignment.assignments){
        for (const assignmentRef of ag.assignments){
            if (assignmentRef.id == assignment.assignmentID){
                resultAssignment.assignmentReferences.push(assignmentRef);
                try{
                    const curDate = new
                    Date(assignmentRef.dueDate);
                    assignmentRef.dueDate = curDate;
                } catch (e) {
                    console.log("Invalid date");
                    break;
                }
            }
        }
    }
}
for (let resultAssignment of resultsAssignments) {
    for (i = 0; i < resultAssignment.assignments.length; i++){
        let curAssignment = resultAssignment.assignments[i];
        const curAssignmentRef = resultAssignment.assignmentReferences[i];
        if (
            curAssignment.submission.submittedAt.getTime() > curAssignmentRef.dueDate.getTime()
        ) {
            const currentPoints = curAssignment.submission.score;
            const pointsPossible = curAssignmentRef.pointsPossible;
            curAssignment.submission.score = currentPoints - (pointsPossible* 0.1);
        }
    }
}
for (i = 0; i < resultsAssignments.length; i++){
    const resultAssignment = resultsAssignments[i].assignments;
    const resultAssignmentReference = resultsAssignments[i].assignmentReferences;

    for (i = 0; i < resultAssignment.length; i++){
        resultScores[i].scores.push(resultAssignment.submission.score);
    }
    for (i = 0; i < resultAssignmentReference.length; i++){
        resultsScore[i].maximumScores.push(resultAssignmentReference[i].pointsPossible);
    }
}
for (i = 0; i < resultScores.length; i++){
    const curAvg = (resultScores[i].scores.reduce((a, b) => a + b, 0))/resultScores[i].maximumScores.reduce(((a, b) => a + b, 0));
    resultsAvg[i].avgScore = curAvg;
}
for(i = 0; i < resultsIDs.length; i++){
    result.push({
        'id': resultsIDs[i],
        'avg': resultsAvg[i].avgScore
    });
    for(i = 0; i < resultScores[i].scores.length; i++){
        result[i] = object.assign({[i+1]: resultScores[i].scores[i]}, result[i]);
    }
}
return result;

}
const result = getLearnerData(CourseInfo,AssignmentGroup,LearnerSubmissions);
console.log(result);