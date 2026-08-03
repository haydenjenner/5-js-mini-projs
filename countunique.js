function countUnique(arr) {
    const unique_vals = [];
    for (let i = 0; i < arr.length; i++){
        if (!unique_vals.includes(arr[i])){
            unique_vals.push(arr[i]);
        }
    }
    result = unique_vals.length;
    return result;
}