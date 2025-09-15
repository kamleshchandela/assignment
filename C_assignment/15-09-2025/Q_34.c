// 34. Left-Aligned Triangle (Stars)
// Input: n = 5

// *
//  **
//   ***
//    ****
//     *****
// Description: Similar to right-aligned but “flipped” — stars lean left. Hint: Print spaces before stars, but decreasing differently than right alignment. Difficulty: Easy → Medium

#include <stdio.h>

int main()
{   int n;
scanf("%d",&n);
    for(int i=0;i<n;i++){
        for(int k=0;k<i;k++){
            printf(" ");
        }
        for(int j=0;j<=i;j++){
            printf("*");
        
        }
        printf("\n");
    }
    
    
    
    
    
    
    
    
    return 0;
}