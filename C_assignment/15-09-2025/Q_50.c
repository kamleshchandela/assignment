// 50. Reverse Continuous Triangle (Numbers)
// Input: n = 5

// 15
// 14 13
// 12 11 10
// 9  8  7  6
// 5  4  3  2  1
// Description: Numbers decrease row by row. Hint: Start counter at n*(n+1)/2 and decrement each time. Difficulty: Medium

#include <stdio.h>

int main()
{
   int n,num=15;
   scanf("%d",&n);
   for(int i=1;i<=n;i++){
       for(int j=n;j>n-i;j--){
           printf("%i\t",num);
           num=num-1;
       }
       printf("\n");
   }

    return 0;
}



