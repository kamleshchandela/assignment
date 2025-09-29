// 58. Cross with Numbers
// Input: n = 5

//   3
//   3
// 12345
//   3
//   3
// Description: Numbers forming a cross. Hint: Star (or number) at mid row or mid col. Difficulty: Medium


#include <stdio.h>


int main()
{
   int n;
   scanf("%d",&n);
  
   for(int i=1;i<=n;i++){
       for(int j=1;j<=n;j++){
         if(i==(n/2)+1){
             printf("%d",j);
             
         }
         else if (j==(n/2)+1){
             printf("%d",n/2+1);
             
         }
         else{
             printf(" ");
         }
       }
       
       printf("\n");
   }

    return 0;
}



