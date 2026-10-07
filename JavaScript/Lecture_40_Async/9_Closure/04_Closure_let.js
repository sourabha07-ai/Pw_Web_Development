function outer() {
    let message = "Hello";

    return function () {
        console.log(message);
    };
}

const fn = outer();

message = "Hi";

fn();