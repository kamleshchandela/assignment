// 24. Palindrome Triangle (Numbers)
// Input: n = 5

// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
// Description: Numbers go up to row index then mirror back down. Hint: Build first half increasing, then second half decreasing. Difficulty: Challenge


#include <stdio.h>

int main()
{
   int n;
   scanf("%d",&n);
  
   for(int i=1;i<=n;i++){
       int count = 1;
       for(int j=1;j<=(i*2)-1;j++){
           if(i>=j){
               printf("%d",count);
               count++;
           }
           else{
                count--;
               printf("%d",count-1);
              
               
           }
       }
       printf("\n");
   }

    return 0;
}



