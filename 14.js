// Print the first 10 Fibonacci numbers without recursion

function fibnum(n){
    let fib = [0,1];

    for(let i=2; i <n;i++){
        fib[i] =fib[i-1]+fib[i-2];
    }
    for(let j=0 ; j <n ; j++){
        console.log(fib[j]);
    }

}
fibnum(10);