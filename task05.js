

function range(start, end, step = 1) {
        var result = [];
    
        if (step === 0) {
        throw new Error('Step cannot be zero');
        }
    
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

module.exports = range;
