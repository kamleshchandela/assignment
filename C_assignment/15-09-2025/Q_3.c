// 3. Single Row of Alphabets
// Input example: n = 5

// A B C D E
// Description & approach

// Objective: print letters starting from A for n characters.
// Approach: loop i from 0 to n-1, print chr('A' + i) separated by spaces. Hints
// If n > 26, define whether to wrap to A again or stop at Z. For beginners, keep n ≤ 26. Common pitfalls
// Off-by-one in ASCII offset (use 'A' + i where i starts at 0). Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 65; i <= 65 + n; i++)
    {
        printf("%c\n", i);
    }
    return 0;
}