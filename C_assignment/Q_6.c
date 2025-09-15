// 6. Square of Alphabets (row-wise)
// Input example: n = 4

// A B C D
// A B C D
// A B C D
// A B C D
// Description & approach

// Objective: n rows, each row prints alphabets A..A + n - 1.
// Approach: outer loop for rows, inner loop prints letters from A. Hints
// Keep n ≤ 26 for simplicity. Common pitfalls
// Using ASCII offsets incorrectly; each column is A + colIndex. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 65; j < 65 + n; j++)
        {
            printf("%c", j);
        }
        printf("\n");
    }
    return 0;
}