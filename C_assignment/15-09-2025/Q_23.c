// 23. Right-Aligned Inverted Triangle (Alphabets)
// Input: n = 5

// A B C D E
//   A B C D
//     A B C
//       A B
//         A
// Description: Same as above but with letters. Hint: Spaces increase, letters decrease. Difficulty: Medium


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
            printf("%c",64+j);
        }
        printf("\n");
    }
    return 0;
}