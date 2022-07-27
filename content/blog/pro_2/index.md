---
title: "[프로그래머스] 주차요금계산"
date: "2022-07-19"
description: "2022 KAKAO BLIND RECRUITMENT"
tags: ["algorithm", "python", "프로그래머스"]
---

# 문제

[주차요금계산](https://school.programmers.co.kr/learn/courses/30/lessons/92341)

# 접근 방법

1. 차량 번호와 출차 기록을 딕셔너리에 같이 넣음

2. 출차기록을 파싱하여 주차 시간 계산

   - 출차기록의 길이가 홀수인 경우 -> 11:59를 출차시간으로 계산

   - 짝수인 경우 -> 그냥 파싱

3. 총 주차시간을 더해서 요금 측정

# 코드

```python
from math import ceil

def solution(fees, records):
answer = []
total_time = []
car_num_time_dict = {}

    basic_time, basic_fee, cri_time, cri_fee = fees[0], fees[1], fees[2], fees[3]

    for r in records:
        time, car_num, in_out = r.split()

        if car_num not in car_num_time_dict:
            car_num_time_dict[car_num] = [time]

        else:
            car_num_time_dict[car_num].append(time)

    car_num_time_dict = sorted(car_num_time_dict.items())
    print(car_num_time_dict)

    for car_info, time_line in car_num_time_dict:
        total = 0
        # 출차한 기록이 없을 경우
        if len(time_line) % 2 != 0:
            for i in range(0, len(time_line) - 1, 2):
                start_h, start_m = map(int, time_line[i].split(":"))
                end_h, end_m = map(int, time_line[i + 1].split(":"))
                # 시간 계산
                total += (end_h * 60 + end_m) - (start_h * 60 + start_m)

            start_h, start_m = map(int, time_line[-1].split(":"))
            total += (23 * 60 + 59) - (start_h * 60 + start_m)

        else:
            for i in range(0, len(time_line), 2):
                start_h, start_m = map(int, time_line[i].split(":"))
                end_h, end_m = map(int, time_line[i + 1].split(":"))
                # 시간 계산
                total += (end_h * 60 + end_m) - (start_h * 60 + start_m)

        total_time.append(total)

    for time in total_time:
        if time <= basic_time:
            total_fee = basic_fee

        else:
            total_fee = basic_fee + ceil((time - basic_time) / cri_time) * cri_fee

        answer.append(total_fee)
    return answer
```
