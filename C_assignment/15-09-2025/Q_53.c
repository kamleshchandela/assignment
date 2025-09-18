// 53. Pyramid with Continuous Numbers
// Input: n = 4

//          1
//       2  3  4
//    5  6  7  8  9
// 10 11 12 13 14 15 16
// Description: Numbers keep increasing across pyramid rows. Hint: Counter variable continues row by row. Difficulty: Challenge

#include <stdio.h>

int main()
{
    int n;
    int num=1;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {

        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }

        for (int k = 1; k <= (i * 2) - 1; k = k + 1)
        {
            printf("%d",num);
            num++;
        }
        printf("\n");
    }
    return 0;
}




