"use strict";

function Person(name, yearCount) {
  this.name = name;
  this.age = 0;
  var increAge = function increAge() {
    this.age++;
  };
  for (var i = 1; i <= yearCount; i++) {
    increAge();
  }
}

var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1, age);