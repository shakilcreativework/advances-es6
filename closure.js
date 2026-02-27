function outerFunction(){
    function innerFunction(){
        console.log('This is the inner function');
    }
    return innerFunction;
}

const output = outerFunction();
console.log(output);