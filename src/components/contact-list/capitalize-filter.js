function CapitalizeFilter(){
    return function(input) {
        if(typeof input !== 'string') {
            return value;
        } 
        return input.charAt(0).toUpperCase() + input.substring(1);
    }
}

export default [CapitalizeFilter];
