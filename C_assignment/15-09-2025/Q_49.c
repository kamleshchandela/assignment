// 49. Continuous Alphabets (Square)
// Input: n = 4

// A B C D
// E F G H
// I J K L
// M N O P
// Description: Alphabets fill the square, row by row. Hint: Use character counter; wrap after ‘Z’ if needed. Difficulty: Medium

#include <stdio.h>

int main()
{
   int n,num=1;
   scanf("%d",&n);
   for(int i=1;i<=n;i++){
       for(int j=1;j<=n;j++){
           printf("%c\t",num + 64);
           num=num+1;
       }
       printf("\n");
   }

    return 0;
}




