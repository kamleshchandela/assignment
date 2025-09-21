// 54. Hollow Diamond (Stars)
// Input: n = 5

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
// Description: Diamond outline only. Hint: Use hollow pyramid + inverted hollow pyramid. Difficulty: Medium

#include <stdio.h>


   int main()
{   int n;
    scanf("%d",&n);
    for (int i=1;i<=n;i++){
        
        for(int j=1;j<=(2*n)-1;j++){
            if(j==n-i+1 || j==n+i-1){
                printf("*"); 
            }
            else{
                printf(" ");
            }
            
            
        }
        printf("\n");
    }
    for (int i=1;i<n;i++){
        
        for(int j=1;j<=(2*n);j++){
            if(j==i+1 || j==(((2*n)-1)-i)){
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

