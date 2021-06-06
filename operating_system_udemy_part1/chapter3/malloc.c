#include<stdio.h>
#include<stdlib.h> //malloc


int main(void)
{
   int *p1 = malloc(4 * sizeof(int));   // allocates enough for an array of 4 int
   int *p2 = malloc(sizeof(int[4]));    // same, naming the type directoly
   int *p3 = malloc(4 *sizeof *p3);     // same, without repeating the type name

   if (p1) {
       for (int n=0; n<4; ++n) // populate the array
        p1[n] = n * n;

      for (int n=0; n<4; ++n) // print it back out
       printf("p1[%d] == %d\n", n, p1[n]);
   }

   free(p1);
   free(p2);
   free(p3);
}

/*
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/operating_system_udemy_part1/chapter3$ gcc -o rslt2 malloc.c && ./rslt2
p1[0] == 0
p1[1] == 1
p1[2] == 4
p1[3] == 9
*/