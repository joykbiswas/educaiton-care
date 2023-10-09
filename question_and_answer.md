<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <p> A:{}</p>
greeting coll kora hola o tar mane set kora hoy ni but pra coll kora greeting ar man Object set kora hoy and console {}
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <p>C:"12"</p>

<i>Write your explanation here</i>
<p>number and string multiplay kora hola number string A print hoy . number and string aksata bosa jai</p>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <p>A: `['🍕', '🍫', '🥑', '🍔']`</p>

<i>Write your explanation here</i>
<p>
  food is array  and info is object  property. favoriteFood  reassigning kora jaba na.  so, food is unchanged .  
</p>
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:<p>B: `Hi there, undefined`</p>

<i>Write your explanation here</i>
<p>`SayHi` function without providing an argument for the name parameter.
 without providing a required argument, always result in undefined.In this case name will be undefined, and `sayHi` function will return.
 </p>


</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: <p>C: 3</p>

<i>Write your explanation here</i>
<p>an array nums  is  [0, 1, 2, 3], and in this case using the forEach method. only three of each truthy value (1, 2, and 3) . The number 0 is falsy.After the loop completes, the value of count 3. </p>
</p>
</details>
