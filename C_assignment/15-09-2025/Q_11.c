// 11. Right-Aligned Triangle — Numbers
// Input example: `n = 5`
//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5
// Description & approach

// Objective: a number triangle aligned to the right. Each row r prints 1..r preceded by spaces so the block is right-aligned.

// Approach: for row r, print (n - r) groups of spaces, then print numbers 1..r separated by a single space. Hints

// Because numbers are printed with spaces between them, one visual unit per number is roughly 2 characters (digit + space). For neat alignment you can either:

// Print two spaces per missing number (i.e., leading spaces = 2 * (n - r)), or
// Use formatting that reserves fixed width per number (beginner-friendly approach: use 2*(n - r) spaces). Common pitfalls
// Not compensating leading spaces for the extra space characters between numbers; result looks shifted. Difficulty: Medium

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {

        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }

        for (int k = 1; k < i + 1; k++)
        {
            printf("%d", k);
        }
        printf("\n");
    }
    return 0;
}
