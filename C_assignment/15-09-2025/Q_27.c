// 27. Inverted Pyramid (Numbers)
// Input: n = 5

// 1 2 3 4 5 6 7 8 9
//   1 2 3 4 5 6 7
//     1 2 3 4 5
//       1 2 3
//         1
// Description: Pyramid with numbers that shrink row by row. Hint: Spaces increase, numbers decrease. Difficulty: Medium


#include <stdio.h>

int main()
{   int n;
    scanf("%d",&n);
   for(int i=0;i<n;i++){
       for(int k=0;k<i;k++){
           printf(" ");
           
       }
       for(int j=0;j<((n-i)*2)-1;j++){
           printf("%d",j+1);
           
       }
       printf("\n");
       
   }

    return 0;
}