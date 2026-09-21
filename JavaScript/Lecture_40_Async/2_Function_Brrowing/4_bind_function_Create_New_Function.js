function originalFunction(qu1,qu2){
   console.log("Hello "+this.name);
   console.log(qu1);
   console.log(qu2);
}

const User = {
   name:"Sourabha Jena",

}

// originalFunction.call(User);
// originalFunction.call(User,"How are you ?","What are doing Now ?");
// originalFunction.apply(User,["How are you ?","What are doing Now ?"]);

// const newFunction = originalFunction.bind(User);
// newFunction();

const newFunction = originalFunction.bind(User,"How are you ?");
newFunction("What are doing Now ?");




