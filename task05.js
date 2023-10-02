

    export function range(start, end, step = 1) {
        const result = [];
    
        if (step === 0) {
        throw new Error('Step cannot be zero');
        }
    
        if (start < end && step < 0) {
        // If step is negative and start < end, return an empty array
        return result;
        }
    
        if (start > end && step > 0) {
        // If step is positive and start > end, return an empty array
        return result;
        }
    
        for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
        result.push(i);
        }
    
        return result;
    }
