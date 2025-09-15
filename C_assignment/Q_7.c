// 7. Right-angled Triangle — Stars (increasing)
// Input example: n = 5

// *
// **
// ***
// ****
// *****
// Description & approach

// Objective: triangle where row r has r stars (r = 1..n).
// Approach: outer loop for rows (1..n). Inner loop prints row stars. Hints
// This is the first place students should practice inner loop bounds as a function of the outer index. Common pitfalls
// Using <= vs < incorrectly; printing wrong number of stars per row. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i + 1; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
