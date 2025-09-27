// 43. Border Rectangle (Numbers)
// Input: rows = 4, cols = 7

// 1234567
// 1     7
// 1     7
// 1234567
// Description: Numbers fill the border, hollow inside. Hint: Use row/column conditions; edges print numbers, inside print spaces. Difficulty: Medium



// method 1

#include <stdio.h>

int main()
{
    int r,c;
    scanf("%d",&r);
    scanf("%d",&c);
    
        for(int i=1;i<=r;i++){
          
             if(i==1 || i==r){
                for(int k=1;k<=c;k++){
                    printf("%d",k);
                }
                 
             }
             else{
                 printf("1");
                 for(int k=1;k<=c-2;k++){
                    printf(" ");
                }
                 printf("%d",c);
             }
             
              printf("\n");
             
          
         
          }
          
          
    
    
    return 0;
}


// method 2


#include <stdio.h>

int main()
{
int r;
   scanf("%d",&r);

   int c;
   scanf("%d",&c);
  
  
   for(int i=1;i<=r;i++){
       for(int j=1;j<=c;j++){
           if (i==r || i==1 || j==1 || j==c){
               printf("%d",j);
           }
           else{
               printf(" ");
           }
       }
       printf("\n");
       
          
       
   }
       
       
   
   
  

    return 0;
}


