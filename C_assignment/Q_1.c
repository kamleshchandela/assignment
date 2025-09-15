// 1. Single Row of Stars
// Input example: n = 5

// *****
// Description & approach

// Objective: print a straight line of n stars.
// Approach: single loop that prints * exactly n times. Hints
// If printing with separators, avoid trailing extra characters at the end of the line. Common pitfalls
// Off-by-one: printing n+1 or n-1 stars. Difficulty: Easy

#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        printf("*");
    }
    return 0;
}