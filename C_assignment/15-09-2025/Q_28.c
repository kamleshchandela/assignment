// 28. Inverted Pyramid (Alphabets)
// Input: n = 5

// A B C D E F G H I
//   A B C D E F G
//     A B C D E
//       A B C
//         A
// Description: Alphabet version of inverted pyramid. Hint: Spaces increase, letters decrease per row. Difficulty: Medium


#include <stdio.h>

int main()
{   int n;
    scanf("%d",&n);
   for(int i=0;i<n;i++){
       for(int k=0;k<i;k++){
           printf(" ");
           
       }
       for(int j=0;j<((n-i)*2)-1;j++){
           printf("%c",j+65);
           
       }
       printf("\n");
       
   }

    return 0;
}
