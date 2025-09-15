// 10. Right-Aligned Triangle — Stars
// Input example: `n = 5`
//     *
//    **
//   ***
//  ****
// *****
// Description & approach

// Objective: right-aligned triangle with row r containing r stars at the right.
// Approach: for each row r (1..n) print (n - r) spaces, then print r stars. Two parts per row: leading spaces, then stars. Hints
// Count spaces exactly — drawing the pattern on paper helps.
// For text output, a “space” is a single character. If you later print tokens that include a following space (e.g., number + " "), you may need to double up leading spaces to keep visual alignment. Common pitfalls
// Using the same number of spaces for all rows; forgetting that spaces decrease as rows increase. Difficulty: Medium

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {

        for (int j = 1; j <= n - i; j++)
        {
            printf(" ");
        }

        for (int k = 1; k < i + 1; k++)
        {
            printf("%c", '*');
        }
        printf("\n");
    }
    return 0;
}
