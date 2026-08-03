function pushMultiplySum(vec,x) {
    // Pushes input value into vec array
    vec.push(x);

    // Doubles each element by iterating through
    for (let i = 0; i < vec.length; i++){
         vec[i]= vec[i]*2
    }

    const result = vec.reduce((sum, nextValue) => sum + nextValue, 0);

    return result;
}