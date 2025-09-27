// 42. Border Rectangle (Stars)
// Input: rows = 4, cols = 7

// *******
// *     *
// *     *
// *******
// Description: A rectangular frame with stars only on the border. Hint: Stars at row = 1, row = last, col = 1, col = last. Difficulty: Medium



// method 1


#include <stdio.h>

int main()
{
   int r;
   scanf("%d",&r);

   int c;
   scanf("%d",&c);
  
  
   for(int i=1;i<=r;i++){
       
           if(i==1 || i==r){
               for(int k=1;k<=c;k++){
               
                   printf("*");
               }
                printf("\n");
           }
           else{
               printf("*");
               for(int k=1;k<=c-2;k++){
                   printf(" ");
               }
               printf("*");
               printf("\n");
           }
       
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
               printf("*");
           }
           else{
               printf(" ");
           }
       }
       printf("\n");
       
          
       
   }
       
       
   
   
  

    return 0;
}
