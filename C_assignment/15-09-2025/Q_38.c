// 38. Reverse Left-Aligned Triangle (Numbers)
// Input: n = 5

// 12345
//  1234
//   123
//    12
//     1
// Description: Numbers decrease per row, left-aligned. Hint: Print spaces, then numbers from 1 up to decreasing limit. Difficulty: Medium

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
            printf("%d", j + 1);
        }
        printf("\n");
    }

    return 0;
}