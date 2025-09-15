// 22. Right-Aligned Inverted Triangle (Numbers)
// Input: n = 5

// 1 2 3 4 5
//   1 2 3 4
//     1 2 3
//       1 2
//         1
// Description: Similar to stars, but with numbers decreasing per row. Hint: For row r, print (r-1) spaces then numbers. Difficulty: Medium

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        for (int k = i; k > 0; k--)
        {
            printf(" ");
        }

        for (int j = 1; j <= n - i; j++)
        {
            printf("%d",j);
        }
        printf("\n");
    }
    return 0;
}