// 25. Palindrome Triangle (Alphabets)
// Input: n = 5

// A
// A B A
// A B C B A
// A B C D C B A
// A B C D E D C B A
// Description: Letters go up then back down symmetrically. Hint: Same logic as Q24, but with alphabets. Difficulty: Challenge


#include <stdio.h>

int main()
{
   int n;
   scanf("%d",&n);
  
   for(int i=1;i<=n;i++){
       int count = 1;
       for(int j=1;j<=(i*2)-1;j++){
           if(i>=j){
               printf("%c",64+count);
               count++;
           }
           else{
                count--;
               printf("%c",63+count);
              
               
           }
       }
       printf("\n");
   }

    return 0;
}



