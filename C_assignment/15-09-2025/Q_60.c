// 60. Multiplication Table Square
// Input: n = 5

// 1  2  3  4  5
// 2  4  6  8 10
// 3  6  9 12 15
// 4  8 12 16 20
// 5 10 15 20 25
// Description: Square filled with multiplication table. Hint: Cell value = row * col. Difficulty: Medium

#include <stdio.h>

int main()
{
   int n;
   int num=1;
   scanf("%d",&n);
   for(int i=1;i<=n;i++){
       for(int j=1;j<=n;j++){
           
               printf("%d\t",j*i);
           
        
       }
       
       printf("\n");
   }

    return 0;
}



