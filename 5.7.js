var numberOfZeros = function(array) {
    // Declare variable
    var count = 0;
   // Count number of zeros in the array
    for (var i = 0; i < array.length; i++){
        if (array[i] === 0){
           count++;
        }
    };
    // Return result
    return count;
};
