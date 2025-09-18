// 46. Triangle with Odd Numbers
// Input: n = 5

// 1
// 3 5
// 7 9 11
// 13 15 17 19
// 21 23 25 27 29
// Description: Right triangle filled with odd numbers only. Hint: Use a counter that starts at 1 and increments by 2. Difficulty: Medium

#include <stdio.h>

int main()
{
   int n,num=1;
   scanf("%d",&n);
   for(int i=1;i<=n;i++){
       for(int j=1;j<=i;j++){
           printf("%d\t",num);
           num=num+2;
       }
       printf("\n");
   }

    return 0;
}