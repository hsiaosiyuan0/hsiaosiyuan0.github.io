## 前言

https://v8.dev/blog/pointer-compression
https://v8.dev/blog/trash-talk

本文主要分析和记录 v8 的 GC 内部实现细节

## 

```c++
#include <stdio.h>

struct S {
    short a;
    int b;
    long c;
};

int main()
{
    struct S s = {1,2,3};
    printf("sizeof short: %d\n", sizeof(short));
    printf("sizeof int: %d\n", sizeof(int));
    printf("sizeof long: %d\n", sizeof(long));
    printf("sizeof struct S: %d\n", sizeof(struct S));
    printf("address of s.a: %ld\n", &s.a);
    printf("address of s.b: %ld\n", &s.b);
    printf("address of s.c: %ld\n", &s.c);
    return 0;
}
```

```
sizeof short: 2
sizeof int: 4
sizeof long: 8
sizeof struct S: 16
address of s.a: 140725435951392
address of s.b: 140725435951396
address of s.c: 140725435951400
```