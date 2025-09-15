// 39. Reverse Left-Aligned Triangle (Alphabets)
// Input: n = 5

// ABCDE
//  ABCD
//   ABC
//    AB
//     A
// Description: Same as Q38 but with alphabets. Hint: Spaces increase, alphabets decrease. Difficulty: Medium

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
        for (int j = 0; j < n - i; j++)
        {
            printf("%c", j + 65);
        }
        printf("\n");
    }

    return 0;
}