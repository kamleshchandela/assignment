// 9. Right-angled Triangle — Alphabets (increasing)
// Input example: n = 5

// A
// A B
// A B C
// A B C D
// A B C D E
// Description & approach

// Objective: row r prints letters A..A + r - 1.
// Approach: outer loop rows, inner loop columns mapping to letters. Hints
// This reinforces the mapping between column index and printed token (number or char). Common pitfalls
// Starting letter offset wrong (should begin at A). Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 1; i < n + 1; i++)
    {
        for (int j = 65; j < 65 + i; j++)
        {
            printf("%c", j);
        }
        printf("\n");
    }
    return 0;
}