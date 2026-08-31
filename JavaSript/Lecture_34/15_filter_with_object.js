let students =[
{name:"Sourabha",marks:78,city:"Jspur"},
{name:"Srikant",marks:70,city:"Pune"},
{name:"Arya",marks:98,city:"Hydrabad"},
{name:"Ram",marks:80,city:"Dilhi"},
{name:"Shyam",marks:76,city:"Mumbai"}
];

const mark_filter = students.filter(student => student.marks < 80)
            .map(student => student.name);

console.log(mark_filter);