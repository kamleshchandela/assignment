// 17. Inverted Right-Angled Triangle (Numbers)
// Input: n = 5

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// Description: Numbers reduce per row instead of stars. Hint: Inner loop runs from 1 to n - row + 1. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {

        for (int j = 1; j <= n - i; j++)
        {
            printf("%d", j);
        }
        printf("\n");
    }
    return 0;
}