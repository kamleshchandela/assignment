// 18. Inverted Right-Angled Triangle (Alphabets)
// Input: n = 5

// A B C D E
// A B C D
// A B C
// A B
// A
// Description: Like numbers but with alphabets. Hint: Inner loop prints letters up to decreasing count. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {

        for (int j = 1; j <= n - i; j++)
        {
            printf("%c", 64 + j);
        }
        printf("\n");
    }
    return 0;
}