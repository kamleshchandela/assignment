// 29. Diamond Pattern (Stars)
// Input: n = 5

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// Description: Full pyramid (Q13) + inverted pyramid (Q26). Hint: Print upper pyramid first, then lower. Difficulty: Medium


#include <stdio.h>

int main()
{   int n;
    scanf("%d",&n);
    for(int i=0;i<n;i++){
       for(int k=0;k<n-i;k++){
           printf(" ");
           
       }
       for(int j=1;j<=i*2-1;j++){
           printf("*");
           
       }
       printf("\n");
       
   }
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