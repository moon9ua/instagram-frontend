# Instagram 클론 프로젝트

## 개요

- 강의나 완성된 코드를 참고하지 않고 한땀한땀 공부하며 구현한 리액트 **첫** 프로젝트... 😵
- [백엔드](https://github.com/h000/instagram-backend)와 함께 진행

<details>
<summary>서버 실행 방법</summary>👀
<div markdown="1">

  * src/main/resources/application.properties 추가
    ```
    spring.datasource.url=jdbc:mysql://localhost:3306/instagram_db?autoReconnect=true
    spring.datasource.username=user
    spring.datasource.password=pwd
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver


    spring.jpa.hibernate.ddl-auto=create
    spring.jpa.show-sql: true
    #spring.datasource.initialization-mode=always

    jwt.secret=c2VjcmV0a2V5LWZvci1pbnN0YWdyYW0tYmFja2VuZC1jbG9uZQo=
    jwt.expiration.time=86400


    springdoc.swaqgger-ui.enabled=true
    ```
  * `java -jar build/libs/instagram-backend-0.0.1-SNAPSHOT.jar`
  * 서버를 실행한 후, 다른 터미널을 켜서 다음과 같이 mysql 명령어 실행
    ```
    mysql -u root
    use instagram_db;
    insert into role (role) values ('ROLE_USER');
    ```

</div>
</details>

## 사용 스택

- JavaScript
- React
- Atomic Design
- Redux
- Redux-Saga
- styled-components

## 회고

### React

React를 처음 접하다보니 상태의 개념, 리액트의 작동 원리(특히 작동 순서), 생명 주기, Hooks 등이 어려웠고, 따라서 이에 대한 처리가 미흡했던 것 같다.

### Atomic Design

리액트 파일 구조는 어떻게 해야할지 찾아보던 중, Atomic Design을 알게 돼서 적용하게 됐다.

그러나... Atomic Design을 사용하며 다음과 같은 문제점들을 마주하게 됐다.

1. molecules와 organisms의 구분이 모호
2. 생각보다 재사용되는 컴포넌트가 많이 없어 효율적이지 못한 느낌
3. 최대한 page에서 상태나 메서드를 구현하려 했으나... 이곳 저곳에 흩어진 상태들
4. Prop Drilling...
5. 쓸데없이 많아진 컴포넌트들과 이에 따른 보수 난이도 상승

### Redux

Redux Toolkit을 주로 사용하는 것 같지만, 첫 프로젝트인 만큼 학습의 목적이 크므로 일부러 Toolkit을 사용하지 않았다.  
하지만 엄청난 중복과 쓸데 없이 긴 코드들... 왜 Toolkit을 사용하는지 느낄 수 있었다.
