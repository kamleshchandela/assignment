// 19. Continuous Number Triangle
// Input: n = 5

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// Description: Numbers don’t reset in each row; they keep increasing continuously. Hint: Use a counter variable that increments after each print. Difficulty: Medium

#include <stdio.h>

int main()
{
    int n;
    int k=1;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {

        for (int j = 1; j <=i; j++)
        {
            printf("%d\t",k);
            k++;
        }
        printf("\n");
    }
    return 0;
}




