// Q1. Number Pyramid

// Write a program to print a number pyramid using nested for loops.

// Example (n = 4):

// 1
// 1 2
// 1 2 3
// 1 2 3 4


// Q2. Reverse Triangle of Stars

// Write a program to print a reverse right-angled triangle of stars using nested for loops.

// Example (n = 5):

// * * * * *
// * * * *
// * * *
// * * *
// * *

// Q3. Find Pairs with a Given Sum in an Array

// Write a program to find all pairs of elements in an array whose sum is equal to a given target number.

// Example:

// Array: [2, 4, 3, 5, 6, 1]
// Target sum: 7
// Output: (2, 5), (4, 3), (6, 1)



#include <stdio.h>

int main()
{

    // Q 1

    printf("\n Q 1\n");

    int i = 2;
    for (int i = 1; i < 5; i++)
    {
        for (int a = 1; a <= i; a++)
        {
            printf("%d", a);
        }
        printf("\n");
    }

    // Q 2

    printf("\n Q 2\n");

    char a = '*';
    for (i = 5; i > 0; i--)
    {
        for (int b = 1; b <= i; b++)
        {
            printf("%c", a);
        }
        printf("\n");
    }

    // Q 3

    printf("\n Q 3\n");
    int arr[6] = {2, 4, 3, 5, 6, 1};
    int c;
    int b;
    for (int c = 0; c < 6; c++)
    {
        for (int b = 1; b < 6; b++)
        {
            if (7 == arr[c] + arr[b])
            {
                printf("( %d , %d )\n", arr[c], arr[b]);
            }
        }
    }

    return 0;
}










// 1..Find Maximum and Minimum Element

// Write a program to input n integers and find the largest and smallest numbers in the array.

// 2..Sum and Average of Array Elements
// Write a program to calculate the sum and average of all elements in the array.


// 3..Count Frequency of Each Element

// Write a program to count how many times each unique element occurs in the array.

// 4..Remove Duplicate Elements

// Remove duplicate values from the array and print the updated array.

// 5..Find Most Frequent Element

// Find which element appears the most times in the array.


// 6..Find Missing Number in Consecutive Array
// One number is missing in the sequence [1…n]. Find the missing number. Example: [1,2,4,5] → 3.


// 7..Check if Array is Palindrome
// Write a program to check whether an array reads the same forwards and backwards. Example: [1,2,3,2,1] → Palindrome.






#include <stdio.h>

int main()
{

    // Q 1

    int arr[100], n, i;
    int max, min;

    printf("Kitne elements dalne hain? ");
    scanf("%d", &n);

    printf("Elements dalo:\n");
    for (i = 0; i < n; i++)
    {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }

    max = arr[0];
    min = arr[0];

    for (i = 1; i < n; i++)
    {
        if (arr[i] > max)
            max = arr[i];
        if (arr[i] < min)
            min = arr[i];
    }

    printf("\n Result:\n");
    printf("\nQ 1 = Sabse bada number: %d\n", max);
    printf("Q 1 = Sabse chhota number: %d\n", min);

    // Q 2

    int sum = 0;

    for (i = 0; i < n; i++)
    {
        sum = sum + arr[i];
    }
    printf("\nQ 2 = sum of elements is %d\n", sum);
    float average = (float)sum / n;
    printf("Q 2 = Average of all elements is %f\n\n", average);
    ;

    // Q 3

    int count;
    for (i = 0; i < n; i++)
    {
        count = 0;
        for (int k = 0; k < n; k++)
        {
            if (arr[i] == arr[k])
            {
                count++;
            }
        }
        printf("Q 3 = %d : %d\n", arr[i], count);

        // Q 5
        int w = 1;
        if (w < count)
        {
            printf("\nQ 5 = max %d\n", count);
        }
    }

    // Q 4

    if (count == 1)
    {
    }

    // Q 6
    for (i = 0; i < n; i++)
    {
        if (arr[i] == i)
        {
        }
        else
        {
            printf("\nQ 6 %d is not\n", i);

            break;
        }
    }

    // Q 7
    int k;
    for (i = 0; i <= n / 2; i++)
    {
        if (arr[i] == arr[n - i - 1])
        {
        }
        else
        {
            k = 0;
        }
    }
    if (k == 0)
    {
        printf("\nQ 7 =  not Palindrome.\n");
    }
    else
    {
        printf("Q 7 =  Palindrome.\n");
    }

    return 0;
}
