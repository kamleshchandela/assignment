// 31. Hollow Square (Stars)
// Input: n = 5

// *****
// *   *
// *   *
// *   *
// *****
// Description: Print a square frame of stars. Inside remains empty. Hint: Print * if row = 1 or n, or column = 1 or n; otherwise print space. Difficulty: Medium (first condition check pattern).

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        if (i == 0 || i == n - 1)
        {
            for (int k = 0; k < n; k++)
            {
                printf("*");
            }
        }
        else
        {
            printf("*");
            for (int k = 0; k < n - 2; k++)
            {
                printf(" ");
            }
            printf("*");
        }

        printf("\n");
    }

    return 0;
}
