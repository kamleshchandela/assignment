// 40. Centered Hollow Triangle (Stars)
// Input: n = 5

//     *
//    * *
//   *   *
//  *     *
// *********
// Description: Full pyramid outline (edges only). Hint: Stars at first and last column of each row; last row all stars. Difficulty: Medium



#include <stdio.h>

int main()
{
   int n;
   scanf("%d",&n);
   for(int i=1;i<n;i++){
       for(int j=1;j<=(2*n)-1;j++){
           if(j==n && i==1){
               
                   printf("*");
               
           }
           else if(j==n-i+1 || j==n+i-1){
               printf("*");
           }
           
           else{
               printf(" ");
           }
           
       }
        printf("\n");
   }
   for(int k=1;k<=n*2-1;k++){
       printf("*");
   }
  

    return 0;
}





