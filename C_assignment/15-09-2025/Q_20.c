// 20. Continuous Alphabet Triangle
// Input: n = 6

// A
// B C
// D E F
// G H I J
// K L M N O
// P Q R S T U
// Description: Like numbers but with alphabets. Hint: Maintain a character counter; wrap after ‘Z’ if needed. Difficulty: Medium

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
            printf("%c\t",64+k);
            k++;
        }
        printf("\n");
    }
    return 0;
}




