// 12. Right-Aligned Triangle — Alphabets
// Input example: `n = 5`
//         A
//       A B
//     A B C
//   A B C D
// A B C D E
// Description & approach

// Objective: similar to the numeric right-aligned triangle but print letters instead. Row r prints A..A + r - 1 with leading spaces.
// Approach: for row r, print (n-r) leading spacing groups (follow the same method as numbers for visual alignment), then print letters separated by single spaces. Hints
// Same alignment caveat as numbers: letters plus following space make token width; you may want 2*(n - r) leading spaces for consistent look. Common pitfalls
// Miscounting leading spaces; forgetting to treat each printed token uniformly. Difficulty: Medium

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
            printf("%c", 64 + k);
        }
        printf("\n");
    }
    return 0;
}