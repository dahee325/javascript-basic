// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello World!'


// 변수 선언
// var myVariable
//값 할당
// myVariable = 10 
// 자바스크립트는 변수 선언하고 값할당을 따로 할 수 있음
// 하지만 우린 같이 할 것
// 변수 선언 + 값 할당
var myVariable = 10

// console.log(myVariable) //관리자창의 Consle을 의미

// ES6 이전 문법
// var : 유연하게 동적으로 동작
var myV1 = 1
// ES6 이후 문법
let myV2 = 2
const myV3 = 3

// var 변수는 재할당 O, 재선언 O
myV1 = 10
var myV1 = 100

// let 변수는 재할당 O, 재선언 X
myV2 = 20
// let myV2 = 20

// const 변수는 재할당 X, 재선언 X
// myV3 = 30
// const myV3 = 300

let a = 'bob' // string
let b = 10 // number
let c = true // boolean : 소문자 사용
let d = [1, 2, 3] // array
let e = {
    'apple': '사과', 
} //object, python의 class와 비슷

// console.log(a, b, c, d, e)

// console.log(1+2) // 더하기
// console.log('Hello' + 'World!') // concatnation

let varA = '10' // string
let varB = 10 // number

console.log(varA == varB) // => true, 값이 같은지
console.log(varA === varB) // => false, 완전히 같은지(값과 타입까지)
console.log(varA !== varB) // => true

// Array : 여러개의 데이터 쌓기, 추가, 제거
let myArray = []
myArray.push('hello') // 추가, python의 append와 같다고 생각
myArray.push('world')
console.log(myArray)
myArray.pop() // 마지막에 데이터가 제거, stack구조
console.log(myArray)
console.log(myArray[0]) // 인덱스 접근

// Object, python의 class + dictionary라고 생각, json(JavaScript Object Nation)구조
let myObject = {
    'apple': '사과',
}
console.log(myObject.apple) // python에서 class의 변수에 접근하는 방식과 같음

myObject.grape = '포도' // 추가
console.log(myObject)

// 조건문
/*
if (조건문1) {
    조건문1이 참일 경우 실행할 코드
} else if(조건문2) {
    조건문2가 참일 경우 실행할 코드
} else {
    조건문1, 2가 거짓일 경우 실행할 코드
}
*/
// alert('hello') : 팝업창
let icecream = 'vanila'
if (icecream == 'chocolate') {
    console.log('I love chocolate')
} else if (icecream == 'vanila') {
    console.log('vanila')
} else {
    console.log('awwwww')
}


// 반복문
// while문
console.log('---while---') // while문 실행
let i = 0
while (i < 5) {
    console.log(i)
    i++ // i = i + 1 (python)
}

// for문 
// Ver1. while문 축약
/*
for (변수 초기화; 조건식; 조건식이 참일 경우 실행할 코드) {console.log()}
*/
console.log('---for1---')
for (let i = 0 ; i<5 ;i++ ) {
    console.log(i)
}

// Ver2. 데이터를 꺼내오는 방법
let arrayA = ['a', 'b', 'c']
console.log('---for2----')
// arrayA.length : python len(arrayA)과 같음
for (let i = 0 ; i < arrayA.length ; i++) {
    console.log(arrayA[i])
}

console.log('---for in---')
// arrayA 안의 값을 하나씩 출력 => item으로 하면 인덱스 번호만 출력
for(let index in arrayA) {
    console.log(index, arrayA[index])
}


// python과 완전히 동일하게 값만 출력
console.log('---for of---')
for (let item of arrayA) {
    console.log(item)
}

// forEach : python의 map과 비슷
console.log('---forEach---')
arrayA.forEach(function(item, index, array){
    console.log(item,index, array)
})


// 함수 만들기
// python => def fucn():
// JS => function 함수이름() {}
function multiply(num1, num2) {
    let result = num1 * num2
    return result
}
console.log(multiply(2, 3))

// 함수 표현식 : 함수만들고 함수를 변수에 선언 => 변수가 함수이름이 됨
let multiply2 = function(num1, num2) {
    return num1 * num2
}
console.log(multiply2(3, 4))

// 화살표함수 : function이 => 로 바뀜
let multiply3 = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(2, 5))

// 화살표함수 생략1
// {}안에 코드가 return하는 문장 하나만 있다면
// {}와 return을 생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(4, 6))

// 화살표함수 생략2
// ()안에 매개변수가 하나만 있다면
// ()를 생략 가능
let cube = num => num ** 3
console.log(cube(10))

// 이벤트 (onclick)
// onclick : 클릭했을 때 반응
// querySelector() : 특정 조건에 맞는 요소를 찾을 때 사용
// 'html' : html 태그를 의미
// document.querySelector('html').onclick = function() {
//     alert('hello!')
// }

// 이벤트 (이벤트리스너)
// => index.html파일의 h1태그 content에만 적용
let myH1 = document.querySelector('h1') 
// <element>.addEventListener(무슨일이 일어났을 때, 무슨행동을 할지) : 특정상황이 일어날 때까지 기다림
myH1.addEventListener('click', function(e) { // e: event
    // alert('hihi')
    console.log(e)
    console.log(e.clientX, e.clientY)
})

// index.html 파일에 img태그가 여러개 있다면 클래스를 지정해서 img.class로 찾기
let myImg = document.querySelector('img')
myImg.addEventListener('click', function(){
    let src = myImg.getAttribute('src') // img태그 안의 src를 가져와서 src에 저장
    if (src === 'images/blue_miffy.png'){
        myImg.setAttribute('src', 'images/firefox-icon.png')
    } else {
        myImg.setAttribute('src', 'images/blue_miffy.png')
    }
})

let myInput = document.querySelector('input')
// keydown : 키보드가 눌렸는지 체크
myInput.addEventListener('keydown', function (e) {
    // console.log(e)
    console.log(myInput.value)
}) 


// 비동기
// console.log('hi')
// callback 함수
// setTimeout() : 몇 초 이후에 무슨 일을 시킬 때 사용
// setTimeout(function(){console.log('1234')}, 1000)
// console.log('bye')


// request
const URL = 'https://jsonplaceholder.typicode.com/todos/1'

// 비동기 처리 방법 1 (Promise)
// fetch : 외부로 요청을 보냄
let response = fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))

// 비동기 처리 방법 2 (async await)
async function fetchTodo(url) {
    let res = await fetch(url)
    let result = await res.json()
    console.log(result)
    // return result
}
console.log(fetchTodo(URL))


let liArray = document.querySelectorAll('li') // li태그를 모두 가져옴
// console.log(liArray)

// liArray의 요소를 하나씩 꺼내서 함수 실행
liArray.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(e.target) // target : 이벤트가 발생한 요소를 의미
    })
})