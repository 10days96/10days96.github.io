---
title: "[프로그래머스] 크레인 인형뽑기 게임"
date: "2022-07-12"
description: "2019 카카오 개발자 인턴십"
tags: ["algorithm", "python"]
---

# 접근 방법

# 코드

```python
def solution(board, moves):
    answer = 0
    bucket = []

    for m in moves:
        for i in range(len(board[0])):
            if board[i][m - 1] != 0:
                bucket.append(board[i][m - 1])
                board[i][m - 1] = 0
                break

        if len(bucket) >= 2 and bucket[-1] == bucket[-2]:
            answer += 2
            bucket.pop()
            bucket.pop()

    return answer
```
