export function arrayFiltering(array, test) {
    const filteredArray = [];
    
    for (let i = 0; i < array.length; i++) {
        const value = array[i];

        if (test(value)) {
            filteredArray.push(array[i]);
    }
    }
    return filteredArray;
}
