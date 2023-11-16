//Print the first 100 prime numbers

let n = 0;
let i,j;
for( j=2; j<=100; j++)
{
for( i=1; i<=j; i++)
{
    if (j % i == 0) {
        n++
    }
}
if (n==2)
    console.log(j);
    n = 0
}



