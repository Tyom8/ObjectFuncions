const person1 = {
    name: "Artyom",
    lastname: "Aleqsanyan",
    age: 23,
    profession: "programmer",
    fullName: function() {
        return `${this.name} ${this.lastname} is ${this.age} years old and he is ${this.profession}.`;
    }
};

const aboutObject = {
    objectName: "JS/React",
    objectData: "2022-23",
    objectAcademy: "ITSpace Academy",
    aboutHomwork: function() {
        return `He created the ${this.objectName} ${this.objectData} ${this.objectAcademy} group object in CONSOLE.`
    }  
};
alert(person1.fullName());
alert(aboutObject.aboutHomwork());

/*Functianerov */
let js = "JS/React 2022-23 Group ITSpace Academy";
console.log(js);

function fnLike (playing,watching,organize) {
    return {playing,
    watching,
    organize}
};
let like = fnLike("Football","Football","Football");

function fnKarush(name,lastname,age,profession,like) {
    return {
        name,
        lastname,
        age,
        profession,
        like
    }
};

function fninstructor(name,lastname,age,profession,) {
    return {
        name,
        lastname,
        age,
        profession
    }
};
let infoinstructor = fninstructor("Aghasi","Gyurdjoglyan","X","Programmer");
let infostudents = [
    fnKarush ("Karush","Melqonyan",23,"Beginner Programmer",like),
    fninstructor ("David","Baxalbashyan","X","Beginner Programmer"),
    fninstructor ("Gurgen","Harutyunyan","X","Beginner Programmer"),
    fninstructor ("Hovo","Hovhannisyan","X","Beginner Programmer"),
    fninstructor ("Mher","Xanoyan","X","Beginner Programmer"),
    fninstructor ("Suren","Margaryan","X","Beginner Programmer"),
    fninstructor ("Radik","Manasyan","X","Beginner Programmer"),
];

function fnPeople (instructor,students) {
    return {
        instructor,
        students
    }
};
let peopleInTheGroup = fnPeople(infoinstructor,infostudents);

function fnTableTools (name,compNumber,operationSystem,display,name2,model,quality,name3,worksWith) {
    return [{
        name,
        compNumber,
        operationSystem,
        display
    },
    {
        name2,
        model,
        quality,
    },
    {
        name3,
        worksWith
    }]
};
 let tableTools = fnTableTools("Computer",25,"Windows 7","Full HD","Computer Mouse","Genius","Good","Video Proector","Lazer");

function fnClassroomTools (internet,tables,chairs,tableTools) {
    return {
        internet,
        tables,
        chairs,
        tableTools
    }
};

let classroomTools = fnClassroomTools(true,10,50,tableTools);

function fnClassroom (adress,classroomTools,coffeeMachinе,pingPong) {
    return {
        adress,
        classroomTools,
        coffeeMachinе,
        pingPong
    }
};

let classroom = fnClassroom("EPAM building",classroomTools,true,true);

function fngroup (peopleInTheGroup,classroom) {
    return {
        peopleInTheGroup,
        classroom
    }
};

let jsGroup = fngroup(peopleInTheGroup,classroom);
console.log(jsGroup);


// aranc functia
let js1 = "JS/React 2022-23 Group ITSpace Academy tarberak 2 aranc function";
console.log(js1);
let jsGroup1 = {
    peopleInTheGroup1: {
        instructor1: {
            name: "Aghasi",
            lastname: "Gyurdjoglyan",
            age: "x",
            profession: "programmer"
        },
        students1: [
            {
                name: "Karush",
                lastname: "Melqonyan",
                age: "22",
                profession: "beginner programmer",
                like: [
                    {playing: "football",
                     werePlaying: {in: "Mishas Hall"}            
                  },
                    {watching: "football"},
                    {organize: "football"}
                ]
            },{
                name: "David",
                lastname: "Baxalbashyan",
                age: "16",
                profession: "beginner programmer"
            },{
                name: "Gurgen",
                lastname: "Harutyunyan",
                age: "x",
                profession: "beginner programmer"
            },{
                name: "Hovo",
                lastname: "Hovhannisyan",
                age: "x",
                profession: "beginner programmer"
            },{
                name: "Mher",
                lastname: "Xanoyan",
                age: "x",
                profession: "beginner programmer"
            },{
                name: "Suren",
                lastname: "Margaryan",
                age: "x",
                profession: "beginner programmer"
            },{
                name: "Radik",
                lastname: "Manasyan",
                age: "x",
                profession: "beginner programmer"
            }
        ]
    },
    classroom1: {
        adress: "EPAM building",
        classroomTools: {
            interner: true,
            tables: 10,
            chairs: 50,
            tableTools: [
                {
                    name: "Computer",
                    compNumber: 25,
                    operationSystem: "Windows 7",
                    display: "Full HD"
                },
                {
                    name: "Computer Mouse",
                    model: "Genius",
                    quality: "Good"
                },{
                    name: "Video Proector",
                    worksWith: "Lazer"
                }
            ],
            coffeeMachinе: true,
            PingPong: true,
        }
    }
};
console.log(jsGroup1);