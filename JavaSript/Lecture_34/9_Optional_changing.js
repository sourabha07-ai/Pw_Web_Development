 const student = {
    name: "Sourabha",
    age: 23,
    course: "MCA",
    isStudent: true,
    skills: ["Java", "C++", "JavaScript"],
    address: {
        city: "Bhubaneswar",
        state: "Odisha"
    },
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }
};
