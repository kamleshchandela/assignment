// 8. Right-angled Triangle — Numbers (increasing)
// Input example: n = 5

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// Description & approach

// Objective: row r prints numbers from 1 to r.
// Approach: outer loop for rows; inner loop prints 1..row. Hints
// Compare structure to the stars triangle — same loops, different printed value. Common pitfalls
// Forgetting spaces between numbers or trailing spaces. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        for (int j = 1; j < i + 2; j++)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}