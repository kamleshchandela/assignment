// 53. Pyramid with Continuous Numbers
// Input: n = 4

//          1
//       2  3  4
//    5  6  7  8  9
// 10 11 12 13 14 15 16
// Description: Numbers keep increasing across pyramid rows. Hint: Counter variable continues row by row. Difficulty: Challenge



// method 1

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

// method 2



#include <stdio.h>


int main()
{
   int n;
   scanf("%d",&n);
   int count=1;
   for(int i=1;i<=n;i++){
       for(int j=1;j<=2*n-1;j++){
         if(j>=n-i+1 && j<=n+i-1){
             printf("%3d",count);
             count ++;
         }
         else{
             printf(" ");
             
         }
       }
       
       printf("\n");
   }

    return 0;
}






