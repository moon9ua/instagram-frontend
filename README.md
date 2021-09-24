# Instagram 클론 프로젝트

## 개요

- 강의나 완성된 코드를 참고하지 않고 한땀한땀💦 공부하며 구현한 리액트 첫 프로젝트
- [백엔드](https://github.com/h000/instagram-backend)와 함께 진행했다.

## 구현 모습

추후에 추가

## 사용 기술

- JavaScript
- React
- Atomic Design
- Redux
- Redux-Saga
- styled-components

## 회고

#### React에 대한 회고

React를 처음 접하다보니 상태의 개념, 리액트의 작동 원리(특히 작동 순서), 생명 주기, Hooks 등이 특히 어려웠고, 따라서 이에 대한 처리가 미흡했던 것 같다.

### Atomic Design에 대한 회고

리액트 파일 구조는 어떻게 해야할지 찾아보던 중, Atomic Design을 알게 돼서 적용하게 됐다.

그.러.나... Atomic Design을 사용하며 다음과 같은 문제점들을 마주하게 됐다.

1. molecules와 organisms의 구분이 모호
2. 생각보다 재사용되는 컴포넌트가 많이 없어 효율적이지 못한 느낌
3. 최대한 page에서 상태나 메서드를 구현하려 했으나... 이곳 저곳에 흩어진 상태들
4. Prop Drilling...
5. 쓸데없이 많아진 컴포넌트들과 이에 따른 보수 난이도 상승

따라서 다음에는 Container & Presenter 패턴 등 다른 방식으로 디자인해볼까 한다.

### Redux에 대한 회고

Redux Toolkit을 주로 사용하는 것 같지만, 첫 프로젝트인 만큼 학습의 목적이 크므로 Toolkit을 사용하지 않았다.  
하지만 엄청난 중복과 쓸데 없이 긴 코드들... 왜 Toolkit을 사용하는지 느낄 수 있었다. 😥
