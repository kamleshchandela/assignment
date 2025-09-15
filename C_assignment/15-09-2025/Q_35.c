// 35. Left-Aligned Triangle (Numbers)
// Input: n = 5

// 1
//  12
//   123
//    1234
//     12345
// Description: Same as Q34 but with numbers. Hint: Spaces increase, numbers always start from 1. Difficulty: Easy → Medium




#include <stdio.h>

int main()
{   int n;
scanf("%d",&n);
    for(int i=0;i<n;i++){
        for(int k=0;k<i;k++){
            printf(" ");
        }
        for(int j=0;j<=i;j++){
            printf("%d",j+1);
        
        }
        printf("\n");
    }
    
    
    
    
    
    
    
    
    return 0;
}