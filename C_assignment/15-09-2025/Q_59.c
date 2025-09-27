// 59. X Pattern (Numbers)
// Input: n = 5

// 1   5
//  2 4
//   3
//  2 4
// 1   5
// Description: Diagonals filled with numbers. Hint: Left diagonal = row index, right diagonal = n-row+1. Difficulty: Medium


#include <stdio.h>

int main()
{
   int n;
   scanf("%d",&n);

  
   for(int i=1;i<=n;i++){
       for(int j=1;j<=n;j++){
           if (i==j || j==(n-i+1)){
               printf("%d",j);
           }
           else{
               printf(" ");
           }
       }
       printf("\n");
       
          
       
   }
       
       
    return 0;
}



