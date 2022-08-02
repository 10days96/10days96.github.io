---
title: "[논문] StyleGAN: A Style-Based Generator Architecture for Generative Adversarial Networks"
date: "2022-08-02"
description: "StyleGAN 논문 설명"
tags: ["논문", "GAN", "pytorch"]
---

## 논문 소개

---

- **저자**: Tero Karras, Samuli Laine, Timo Aila
- **paper**: https://arxiv.org/abs/1812.04948
- **CVPR 2019**
- **목표**:
  1. 고화질 이미지를 생성하며
  2. 특징이 분리된 잠재공간(Disentanglement latent space) 구성을
  3. 복잡한 손실 함수 없이 모델의 구조를 제안 했다.

## 사전지식

### GAN

GAN 모델은 [2014년 Ian Goodfellow가 제안한 생성 모델](!https://arxiv.org/abs/1406.2661)로 후에 나온 생성 모델들은 모두 GAN 구조를 기반으로 했다고 해도 과언이 아니다.

![GAN-Family](../../../src/images/StyleGAN/fig1_GAN-family.png)

GAN의 구조에 대해 간략하게 설명해보자면 GAN은 이미지 생성을 담당하는 생성자(Generator) 생성된 가짜 이미지와 진짜 이미지를 판별하는 판별자(Discriminator)로 구성 되어있다. GAN을 공부한 사람들이 많이 본 비유는 아마 위조지폐범과 그를 잡는 경찰일 것이다.

![GAN의 구조](../../../src/images/StyleGAN/fig2_GAN_structure.png)

즉 **생성자는 진짜와 비슷한 위조 지폐(가짜 이미지/생성된 이미지)를 만드는 것이고** **판별자는 생성자가 만든 위조 지폐와 진짜 지폐를 두고 위조지폐를 찾는 경찰** 인 것이다!

학습을 진행하면서 생성자와 판별자는 경쟁적으로 학습을 하게 되고 결국 생성자는 **판별자가 구분할 수 없을 정도로 그럴듯한(진짜같은) 이미지를 만들게 된다**

그러나 초기의 GAN(VanillaGAN)은 단순히 선형 레이어 여러개로만 이뤄져서 안정적으로 학습할 할 수 없다는 단점이 있었다. 이를 개선한 것이 2015에 나온[DCGAN](https://arxiv.org/abs/1511.06434) 논문이다. 이 모델은 기존의 GAN 모델에 CNN 구조를 더해 학습이 안정적으로 될 수 있는 구조를 제안하였다(후속 모델들은 사실 DCGAN의 구조를 기반으로 나왔다.)

![DCGAN구조](../../../src/images/StyleGAN/fig3_DCGAN.png)

더 자세한 설명은 [쉽게 쓰여진 GAN](https://dreamgonfly.github.io/blog/gan-explained/) 글을 보면 좋다. 이해하기 쉬운 설명과 코드까지 있는 좋은 글이다.

오늘의 주인공은 GAN이 아니라 StyleGAN이기 때문에 StyleGAN 이전에 나온 ProGAN에 대해서 먼저 설명해고자 한다.

### ProGAN

## 본론

### 모델의 구조

### 특징이 분리된 잠재공간 (Disentanglement latent space)

### Style Mixing

### 실습

## 참고자료

- 쉽게 쓰여진 GAN: https://dreamgonfly.github.io/blog/gan-explained/
- StyleGAN 포스팅: https://happy-jihye.github.io/gan/gan-6/
- 꼼꼼한 딥러닝 논문 리뷰와 코드 실습(StyleGAN): https://www.youtube.com/watch?v=HXgfw3Z5zRo&t=1979s
