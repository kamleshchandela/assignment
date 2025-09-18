// 33. Hollow Inverted Right-Angled Triangle (Stars)
// Input: n = 5

// *****
// *  *
// * *
// **
// *
// Description: Inverted right triangle, hollow inside. Hint: Stars only on edges: first col, last col, or top row. Difficulty: Medium

#include <stdio.h>

int main()
{
    int n;
    int i; 
    scanf("%d", &n);
    
    for(i=0;i<n;i++){
    
    if(i==0){
        for(int j=0;j<n;j++){
        printf("*");
        }
        printf("\n");
    }
    
    else{
        
            printf("*");
            
            for(int k=0;k<n-i-2;k++){
                printf(" ");
               
            }
            if(i<n-1){
             printf("*");
            }
            printf(" \n");
        
    }
    
    }
    
    
    
    
    
    
    return 0;
}






