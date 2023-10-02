export function drawTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = "";

        for (let k = 1; k <= i - 1; k++) {
            row += "$";
    }
    console.log(row);
    }
}
