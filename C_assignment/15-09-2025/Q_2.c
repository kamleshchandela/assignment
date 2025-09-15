// 2. Single Row of Numbers
// Input example: n = 5

// 1 2 3 4 5
// Description & approach

// Objective: print numbers 1 to n separated by a single space in one line.
// Approach: single loop from 1 to n. Print a space after each number except optionally the last one (or trim). Hints
// Decide whether you want a trailing space or not; many judges allow it but it’s cleaner to avoid it. Common pitfalls
// Printing the numbers without spaces (e.g., 12345) or wrong start index. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        printf("%4d\n", i);
    }
    return 0;
}
