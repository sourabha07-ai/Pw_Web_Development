function outer() {
    let name = "Sourabha";

    function inner() {
        console.log(name);
    }

    return inner;
}

const fn = outer();

fn();