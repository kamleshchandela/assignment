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



// method 1


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


// method 2


#include <stdio.h>

int main()
{
    int n;
    scanf("%d",&n);
    for(int i=1;i<=n;i++){
        for(int j=1;j<=(2*n)-1;j++){
            if(j>=n-i+1 && j<=n+i-1){
                printf("*");
            }
            else{
                printf(" ");
            }
        }
        printf("\n");
    }
    for(int i=1;i<=n-1;i++){
        for(int j=1;j<=(2*n)-1;j++){
            if(j>i && j<2*n-i){
                printf("*");
            }
            else{
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}





