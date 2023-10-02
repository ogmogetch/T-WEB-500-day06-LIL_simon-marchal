

function range(start, end, step) {
    if (step === undefined){
        step = 1
    }
        var result = [];
    
        if (start < end && step < 0) {
        return result;
        }
    
        if (start > end && step > 0) {
        return result;
        }
    
        for (var i = start; step > 0 ? i <= end : i >= end; i += step) {
        result.push(i);
        }
    
        return result;
}

module.exports = {range};
