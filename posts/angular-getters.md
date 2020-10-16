---
title: "How to use Getters and Setters in Angular without negative performance impact?"
date: "2020-06-30"
imageUrl: './images/post-1.jpg'
---

Sometimes, working on Angular components, you can discover using **getters and setters** could be very handy in achieving your goals. Especially when you are working on creating some UI library and even  working on some business logic. 

## What are getters and setters? 

According to the MDN, **getter**  and **setter** binds property to a function when that property is looked up or set accordingly. 

And having this "magic property" allows developer to add any logic when object's property defines or retrieves, for ex.: 

 - validation logic;
 - additional computations;
 - emit events;
 - encapsulation of some data;
 - etc.

like in this getter example: 

```js script
let user = {
    name: "John", 
    surname: "Smith", 

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

alert(user.fullName); // John Smith
```

## How to properly use them in Angular?
In Angular it's very handy to use getters and setters in Classes, Components and Services.
In my practise, one of the most common use case of usage is the @Input decorator. 

Let's check the following example of the *HelloComponent*: 

![Getters and Setters](../images/getters/1.gif#centered)

```ts script 
@Component({
  selector: "hello",
  template: `
    <h1>Hello, {{ fullName }}!</h1>
    <h3>History:</h3>
    <p>{{ history.join(", ") }}</p>
    <button (click)="onSelectPrevious()">Select previous</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  innerFirstName: string;
  history = [];

  constructor() {}

  get fullName() {
    console.log("calculate fullName");
    return `${this.innerFirstName} ${this.lastName}`;
  }

  @Input() set firstName(name) {
    this.innerFirstName = name;
    this.history.push(name);
  }

  @Input() lastName: string;

  onSelectPrevious() {
    if (this.history.length > 1) {
      this.history.pop();
      this.innerFirstName = this.history[this.history.length - 1];
    }
  }
}
```

It's very synthetical, but it shows the main ideas of using setters and getters: 

 - When "firstName" changes component pushes new name into the "history" list and changes "innerFirstName" property.
 - When we trying to access to "fullName" proprety - it calculates it by concatenating `innerFirstName + lastName` properties. 


And seems like this logic is pretty straightforward, our code works as expected until we put the 'fullName' into the template and check how often it computes getter.

Let's put into the parent of our component setInterval and check how often our component will trigger `get fullName()`.

```ts code 
app.component.html

ngOnInit() {
    setInterval(() => console.log("tick"), 1000);
}
```

As you can see, every 'tick' of our setInterval we compute 2 times our property (in prod mode - 1 time).

![Getters and Setters](../images/getters/2.gif#centered)

Imagine we have some more advanced calculations in getter, like traversing array or some object. It could drastically slow down the performance of the whole app.

And it's just in only one small component. 

And in order to fix this issue - we can just change `changeDetectionStrategy` of the component. Let's change it to OnPush. 

> This tells Angular that the component only depends on its  `@inputs()`
> ( aka pure ) and needs to be checked only in the following cases:

You can read more about them in Netanel's article - [🚀 A Comprehensive Guide to Angular onPush Change Detection Strategy](https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4)

If we know - all logic of component depends on Inputs - we can chose this type of changeDetectionStrategy and even don't need to adjust anything in our component. 

So, our component looks like so for now: 

```ts code
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello, {{ fullName }}!</h1>
    <h3>History:</h3>
    <p>{{ history.join(", ") }}</p>
    <button (click)="onSelectPrevious()">Select previous</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  innerFirstName: string;
  history = [];

  constructor() {}

  get fullName() {
    console.log("calculate fullName");
    return `${this.innerFirstName} ${this.lastName}`;
  }

  @Input() set firstName(name) {
    this.innerFirstName = name;
    this.history.push(name);
  }

  @Input() lastName: string;

  onSelectPrevious() {
    if (this.history.length > 1) {
      this.history.pop();
      this.innerFirstName = this.history[this.history.length - 1];
    }
  }
}
```

And check our logs: 
![Getters and Setters](../images/getters/3.gif#centered)


Check the full example of the code on stackblitz:  [Getters and Setters Angular example](https://stackblitz.com/edit/angular-getters-setters-bgaq44?)
