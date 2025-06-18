// Recursive Factorial: Time & space 0(n)

function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n - 1);
}