// 13. Full Pyramid — Stars (centered)
// Input example: `n = 5`
//     *
//    ***
//   *****
//  *******
// *********
// Description & approach

// Objective: centered pyramid with n rows; row r has 2*r - 1 stars, centered with (n - r) leading spaces.

// Approach (per row r from 1 to n):

// Print (n - r) spaces.
// Print 2*r - 1 stars (no internal spaces between stars). Hints
// Visualize the pyramid as two halves mirrored around the center. The formula 2*r - 1 produces the odd star counts.

// For text containing tokens with separators (numbers/letters), alignment requires extra attention (see Q14–Q15). Common pitfalls

// Printing 2*r or 2*r+1 stars by mistake; incorrect number of spaces. Difficulty: Medium

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

        for (int k = 1; k <= (i * 2) - 1; k = k + 1)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
