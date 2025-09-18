// 51. 0–1 Right-Angled Triangle
// Input: n = 5

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// Description: Alternating 0/1 triangle. Hint: Value = (row + col) % 2. Difficulty: Medium

#include <stdio.h>

int main()
{
   int n;
   scanf("%d",&n);
   for(int i=1;i<=n;i++){
       for(int j=1;j<=i;j++){
         if((i+j)%2==0){
             printf("%d",1);
         }
         else{
             printf("%d",0);
         }
       }
       
       printf("\n");
   }

    return 0;
}






