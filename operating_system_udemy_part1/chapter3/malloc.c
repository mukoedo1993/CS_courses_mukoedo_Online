/*

void* calloc (size_t num, size_t size);
Allocate and zero-initialize array
Allocates a block of memory for an array of num elements, each of them size bytes long, and initializes all its bits to zero.

The effective result is the allocation of a zero-initialized memory block of (num*size) bytes.

If size is zero, the return value depends on the particular library implementation (it may or may not be a null pointer), but the returned pointer shall not be dereferenced.


*/


/* calloc example */
#include <stdio.h>      /* printf, scanf, NULL */
#include <stdlib.h>     /* calloc, exit, free */

int main ()
{
  int i,n;
  int * pData;
  printf ("Amount of numbers to be entered: ");
  scanf ("%d",&i);
  pData = (int*) calloc (i,sizeof(int));
  if (pData==NULL) exit (1);
  for (n=0;n<i;n++)
  {
    printf ("Enter number #%d: ",n+1);
    scanf ("%d",&pData[n]);
  }
  printf ("You have entered: ");
  for (n=0;n<i;n++) printf ("%d ",pData[n]);
  free (pData);
  return 0;
}

/*
 zcw@mukoedo1993:~/udemy_OS/udemy_operating_system/operating_system_udemy_part1/chapter3$ gcc -o rslt2 malloc.c
(base) zcw@mukoedo1993:~/udemy_OS/udemy_operating_system/operating_system_udemy_part1/chapter3$ ./rslt2
Amount of numbers to be entered: 5
Enter number #1: -2
Enter number #2: -5
Enter number #3: 10
Enter number #4: 23
Enter number #5: -190
You have entered: -2 -5 10 23 -190 (base)
*/