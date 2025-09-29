// 56. Concentric Square (Stars)
// Input: n = 5

// *****
// *   *
// * * *
// *   *
// *****
// Description: Square with inner star pattern. Hint: Use min distance from edge. Difficulty: Medium




#include <stdio.h>


int main()
{
   int n;
   scanf("%d",&n);
  
   for(int i=1;i<=n;i++){
       for(int j=1;j<=n;j++){
         if(i==1 || i==n || j==1 || j==n){
             printf("*");
             
         }
         else if (i==(n/2)+1){
             if(j%2==1){
                 printf("*");
             }
             else{
                 printf(" ");
             }
             
             
         }
         else{
             printf(" ");
         }
       }
       
       printf("\n");
   }

    return 0;
}



