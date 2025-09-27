// 41. Inverted Centered Hollow Triangle (Stars)
// Input: n = 5

// *********
//  *     *
//   *   *
//    * *
//     *
// Description: Inverted hollow pyramid. Hint: Stars at edges and top row. Difficulty: Medium


#include <stdio.h>

int main()
{
   int n;
   scanf("%d",&n);
  
   for(int k=1;k<=n*2-1;k++){
       printf("*");
   }
   printf("\n");
   for(int i=1;i<n;i++){
       for(int j=1;j<=(2*n)-1;j++){
           if(j==i+1 || j==(2*n)-i-1){
               
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