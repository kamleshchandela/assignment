// 52. 0–1 Square (Checkerboard)
// Input: n = 5

// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1
// Description: Square chessboard with 1/0 pattern. Hint: (row + col) % 2 logic. Difficulty: Medium

#include <stdio.h>

int main()
{
   int n;
   scanf("%d",&n);
   for(int i=1;i<=n;i++){
       for(int j=1;j<=n;j++){
         if((i+j)%2==0){
             printf("%d ",1);
         }
         else{
             printf("%d ",0);
         }
       }
       
       printf("\n");
   }

    return 0;
}





