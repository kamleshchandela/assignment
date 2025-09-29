// 55. Hollow Diamond (Numbers Palindrome)
// Input: n = 4

//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1
//   1 2 3 2 1
//     1 2 1
//       1
// Description: Diamond of palindromic numbers. Hint: Top = palindrome pyramid, bottom = inverted version. Difficulty: Challenge

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);

    for (int i = 1; i <= n; i++)
    {
        int count = 1;
        for (int j = 1; j <= n; j++)
        {
            if (i + j >= n + 1)
            {
                printf("%d", count++);
            }

            else
            {
                printf(" ");
            }
        }
        count--;
        for (int j = 1; j < i; j++)
        {
            if (i > 1)
            {

                printf("%d", --count);
            }

            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }

    for (int i = 1; i < n; i++)
    {
        int count = 1;
        for (int j = 1; j <= n; j++)
        {
            if (j > i)
            {
                printf("%d", count++);
            }

            else
            {
                printf(" ");
            }
        }
        count--;
        for (int j = 1; j < n - 1; j++)
        {
            if (j <= n - i - 1)
            {

                printf("%d", --count);
            }

            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}
