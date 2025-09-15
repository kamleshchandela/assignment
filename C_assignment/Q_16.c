// 16. Inverted Right-Angled Triangle (Stars)
// Input: n = 5

// *****
// ****
// ***
// **
// *
// Description: Start with n stars in row 1, then decrease by 1 star each row. Hint: Outer loop for rows, inner loop prints decreasing stars (n - row + 1). Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {

        for (int j = 0; j < n - i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
