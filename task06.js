export function objectsDeeplyEqual(cmp1, cmp2){

    if(cmp1 === cmp2){
    
        return true;
    
    }
    
    if(cmp1 == null || typeof cmp1 != "object" || cmp2 == null || typeof cmp2 != "object"){
    
        return false;
    
    }
    
    for(let prop in cmp1){
    
        if(!(prop in cmp2) || !objectsDeeplyEqual(cmp1[prop], cmp2[prop])){
    
            return false;
    
        }
    
    }
    
    return Object.keys(cmp1).length == Object.keys(cmp2).length;
}