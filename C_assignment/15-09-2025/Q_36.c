// 36. Left-Aligned Triangle (Alphabets)
// Input: n = 5

// A
//  AB
//   ABC
//    ABCD
//     ABCDE
// Description: Same as Q35 but with alphabets. Hint: Letters always begin at A, spaces increase each row. Difficulty: Easy → Medium

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        for (int k = 0; k < i; k++)
        {
            printf(" ");
        }
        for (int j = 0; j <= i; j++)
        {
            printf("%c", 65 + j);
        }
        printf("\n");
    }

    return 0;
}