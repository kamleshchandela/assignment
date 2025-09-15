// 4. Square of Stars
// Input example: n = 4

// ****
// ****
// ****
// ****
// Description & approach

// Objective: print an n × n block of stars.
// Approach: outer loop for n rows; for each row, inner loop prints n stars. Hints
// Visualize the grid: rows and columns are symmetric here. Common pitfalls
// Confusing rows and columns; printing different counts per row. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
