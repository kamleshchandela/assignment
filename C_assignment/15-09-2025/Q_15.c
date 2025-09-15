// 15. Full Pyramid — Alphabets (centered)
// Input example: `n = 5`
//         A
//       A B C
//     A B C D E
//   A B C D E F G
// A B C D E F G H I
// Description & approach

// Objective: centered pyramid with alphabets; row r contains 2*r - 1 alphabet tokens (starting from A) centered.
// Approach: per row r print appropriate leading spacing then print letters (e.g., A to A + 2*r - 2) or alternatively print A..A+(r-1) then A+(r-2)..A if you want a specific mirrored order. The example above prints increasing sequence of distinct letters across the row. Hints
// Keep track of the current letter index carefully. For n > 26, decide whether to wrap or stop. For beginners use n ≤ 13 for safe non-wrapping within the full pyramid.
// For neat centering when letters are printed with separators, use 2*(n - r) leading spaces. Common pitfalls
// Running past Z without wrapping rule; miscounting letters per row. Difficulty: Medium

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
            printf("%c", 64 + k);
        }
        printf("\n");
    }
    return 0;
}