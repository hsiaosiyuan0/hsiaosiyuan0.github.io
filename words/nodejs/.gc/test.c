#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    void *a = malloc(30 * (1 << 20));
    strcpy(a, "hello world");
    getchar();
    return 0;
}
