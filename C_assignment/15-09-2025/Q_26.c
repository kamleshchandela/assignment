// 26. Inverted Pyramid (Stars)
// Input: n = 5

// *********
//  *******
//   *****
//    ***
//     *
// Description: Upside-down version of full pyramid (Q13). Hint: Spaces increase, stars decrease using 2*(n-row)+1. Difficulty: Medium


#include <stdio.h>

int main()
{   int n;
    scanf("%d",&n);
   for(int i=0;i<n;i++){
       for(int k=0;k<i;k++){
           printf(" ");
           
       }
       for(int j=0;j<((n-i)*2)-1;j++){
           printf("*");
           
       }
       printf("\n");
       
   }

    return 0;
}
