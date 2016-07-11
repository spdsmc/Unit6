var average = function(array) {
    // Declare variable
    var sum = 0;
    // Sum all items in array
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    };
    // Return average
    return sum / array.length;
};
