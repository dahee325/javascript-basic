# beginner-html-site-styled
A simple one page website created to help complete beginners learn HTML basics, which in this repo has also been styled to help beginners learn CSS basics. The styling is explained over the course of [https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/CSS_basics](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/CSS_basics).

[Run the example live](http://mdn.github.io/beginner-html-site-styled/).

# JS(Java Script)
- [mdn](https://developer.mozilla.org/ko/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
- 객체 기반 언어, 동적 프로그래밍 언어


# 
- `scripts/main.js` 최상단에 폴더와 파일 만들기
- `index.html` : `main.js`파일 연결
```html
    <script src="scripts/main.js"></script>
</body>
```
- `scripts/main.js`
```js
let myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello World!'
```
=> html파일을 순서대로 코드진행\
=> `index.html`에 `main.js`를 코드 마지막에 연결\
=> `index.html`에 제목을 `Mozilla is cool`이라고 되어있지만 `main.js`의 `<h1>`를 만나 `myHeading`안에 `<h1>Mozilla is cool</h1>`가 들어있고 그 `content`인 `Mozilla is cool`를 수정

- `scripts/main.js`
```js
var myVariable = 10

console.log(myVariable) //관리자창의 Consle에서 출력 => print문이라고 생각
```


- [jsonplaceholder](https://jsonplaceholder.typicode.com/) : fake placeholder