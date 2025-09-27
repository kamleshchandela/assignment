// 30. Diamond Pattern (Alphabets Palindrome)
// Input: n = 5

//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
//  ABCDCBA
//   ABCBA
//    ABA
//     A
// Description: Combines palindrome pyramid (Q25) and its inverted version. Hint: Top half = palindrome pyramid, bottom half = inverted palindrome. Difficulty: Challenge




#include <stdio.h>

int main()
{
    int n;
    scanf("%d",&n);
    int count = 1;
    int num = 0;
    for (int i=1;i<=n;i++){
        num = 0;
        for (int j=1;j<=(2*n)-1;j++){
            if(j>=n-i+1  &&  j<=n+i-1){
                printf("%c",'A'+num);
                num++;
            }
            else{
                printf(" ");
            }
            
        }
        printf("\n");
        
    }
     num = 0;
    for (int i=n+1;i<=(2*n)-1;i++){
        num = 0;
        for (int j=1;j<=(2*n)-1;j++){
            if(j>=count+1  &&  j<=(2*n)-count-1){
                printf("%c",num+'A');
                num++;
            }
            else{
                printf(" ");
            }
            
        }
        printf("\n");
        count++;
        
    }

    return 0;
}

