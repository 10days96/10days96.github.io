---
title: "[백준] 15649번 N과 M (1)"
date: "2022-06-20"
description: "파이썬 문제 풀이"
tags: ["algorithm", "python", "백준"]
---

```python
import sys

N, M = map(int, sys.stdin.readline().split())

def combination(com:list):

    if len(com) == M:
        print(' '.join(map(str, com)))
        return

    for i in range(1, N + 1):
        if i in com:
            continue
        combination(com + [i])

combination([])
```
