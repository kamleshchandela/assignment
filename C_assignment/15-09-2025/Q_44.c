// 44. Simple Cross (Stars)
// Input: n = 5

//   *
//   *
// *****
//   *
//   *
// Description: Cross symbol with stars. Hint: Star at middle row or middle column. Difficulty: Medium



#include <stdio.h>

int main()
{   int n,i;
ok:
scanf("%d",&n);
    if(n%2==1){
    for(int i=0;i<n;i++){
        
        
        if(i==n/2){
           // printf(" ");
            for(int j=0;j<n;j++){
            printf("*");
        
        }
        }
        else{
            for(int k=0;k<n/2;k++){
            printf(" ");
        }
                    printf("*");

        }
        
        printf("\n");
    }
    
    }
    else{
        printf("input odd no.");
        goto ok;
    }
    
    
    
    
    
    
    return 0;
}