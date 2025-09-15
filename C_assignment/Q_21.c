// 21. Right-Aligned Inverted Triangle (Stars)
// Input: n = 5

// *****
//  ****
//   ***
//    **
//     *
// Description: Stars shrink each row but remain right-aligned. Hint: Spaces increase row by row; stars decrease. Difficulty: Medium

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

        for (int j = 0; j < n - i; j++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}