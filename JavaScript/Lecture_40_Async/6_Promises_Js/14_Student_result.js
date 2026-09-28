// import students from "../6_Promises_Js/14_studentResult.json" with {type:"json"}

const students = require("./14_studentResult.json")

async function getStudent(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(students);
        },2000)
    })
}

async function showResult(){
    try{
        const students = await getStudent();

        students.forEach(student => {
            if(student.marks >= 40) console.log(`${student.name} is Passed✅`);
        else console.log(`${student.name} is Failed❌`);

        });

        
    }catch(error){
         console.log("Error:",error);
    }finally{
        console.log("Result process finished");
    }
}

showResult();