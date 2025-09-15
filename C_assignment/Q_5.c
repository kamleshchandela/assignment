// 5. Square of Numbers (row-wise)
// Input example: n = 4

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Description & approach

// Objective: print n rows, each row printing numbers 1 to n.
// Approach: outer loop for rows, inner loop prints 1..n each time. Hints
// Same inner loop as single row of numbers; reuse logic. Common pitfalls
// Forgetting to reset the inner loop each row. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}