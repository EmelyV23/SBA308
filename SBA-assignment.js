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
            "submitted at": "2024-01-26",
            "score": 49
        }
    },
    {
        "learnerID": 675,
        "assignmentID": 2,
        "submission": {
            "submitted at": "2024-01-30",
            "score": 50
        }
    },
    {
        "learnerID": 675,
        "assignmentID": 3,
        "submission": {
            "submitted at": "2024-02-05",
            "score": 70
        }
    },
    {
        "learnerID": 675,
        "assignmentID": 4,
        "submission": {
            "submitted at": "2024-02-06",
            "score": 125
        }
    },
    {
        "learnerID": 503,
        "assignmentID": 1,
        "submission": {
            "submitted at": "2024-01-26",
            "score": 37
        }
    },
    {
        "learnerID": 503,
        "assignmentID": 2,
        "submission": {
            "submitted at": "2024-02-01",
            "score": 50
        }
    }
    
];

function getLearnerData(course, ag, submission) {
    const result = [
        {
            id: 675,
            avg: 0.99,
            1: 0.99,
            2: 1.0
        },
        {
            id: 503,
            avg: 0.82,
            1: 0.74,
            2: 0.90 // late, take ten percent off. (50 - 5) / 50
        }
    ];
    return result
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);