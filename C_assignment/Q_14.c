// 14. Full Pyramid — Numbers (centered)
// Input example: `n = 5`
//         1
//       1 2 3
//     1 2 3 4 5
//   1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9
// Description & approach

// Objective: centered number pyramid where row r prints numbers from 1 to 2*r - 1 (or visually, an odd-count sequence). Often easier to think: print numbers 1..(2*r - 1) or print 1..r then r-1..1.

// Approach variants:

// Simple: print 2*r - 1 increasing numbers (1,2,3...) in each row (this matches the example but is not a palindrome).
// Alternative (palindrome variant): print 1..r then r-1..1. Both are widely used — pick one consistently and give students that spec. Hints
// Spaces to center: treat each printed token as having width (token + following space). A practical beginner rule is to print 2*(n - r) leading spaces when printing items separated by spaces. That makes the visual center look correct. Common pitfalls

// Confusion about whether the row is a palindrome or just an increasing odd count — specify which you want. Difficulty: Medium

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
            printf("%d", k);
        }
        printf("\n");
    }
    return 0;
}
