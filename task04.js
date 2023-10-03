export function fizzBuzz(num) {
    const tab = []
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            tab.push("FizzBuzz");
        } else if (i % 3 === 0) {
            tab.push("Fizz");
        } else if (i % 5 === 0) {
            tab.push("Buzz");
        } else {
            tab.push(i);
        }
    }
    console.log(tab.join(", "))
}
