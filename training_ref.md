# Break Time

- Tea => 11:00AM (15 mins)
- Lunch => 1:00PM (45 mins)
- Tea => 3:30PM (15 mins)

- JavaScript is dynamically typed language.
- JavaScript DataTypes -
  > Primitive Types : Number, Boolean, String, Symbol, BigInt
  > Reference Types : Object, Array, Functions, Date

# TypeScript :

- Type Inference / Implicit
- Type Explicit

- TypeScript compiler converts TypeScript code into JavaScript Code
- npm install -g typescript
- tsc --version
- tsc main.ts

- Babel : converting Latest JS (ES6+ features) into Vanilla JS (ES5);

# ES6+ Features

- Classes
- Interfaces
- Inheritance
- Arrow
- Destructuring
- Spread / Rest Operator (...)
- Default Parameters
- Map/ Set
- Decorators

# Angular Building Blocks-

- Components
- Directives
- Pipes
- Modules
- Services

@Component({})
class DemoComponent{}

@Directive()
class DemoDirective{}

@Pipe()
class DemoPipe{}

@NgModule()
class DemoNodule{}

@Injectable({})
class DemoService{}

# Other JavaScript Libraries / Framework

- jQuery : DOM Manipulation, Animation, AJAX Call
- AngularJS : v1, library
- Angular : latest angular version, framework
  > Templates
  > Component based arch
  > XHR Calls
  > State Management
  > Form Validation
  > Animation
  > Single Page Apps
  > AoT Compiler - Tree-shaking, faster app bootstraping (kick-start)
- ReactJS (30kb): Rendering the UI quickly and efficiently, react-router-dom, formik, yup, react-redux, axios, jQuery, fetch API
- VueJS : Template oriented,
- BackboneJS : MVC Pattern at client side
- KnockoutJS : 2 way data binding - MVVM
- EmberJS : Framework
- PolymerJS : Web custom components
- Stencil : VDOM, Components
- Electron : Desktop based apps

- NodeJS : Platform; Server Side only
- ExpressJS : Web application for Node Environment
- NextJS : Server side for React Apps

# DataTypes in TypeScript

> Primitive Types : Number, Boolean, String, Symbol, BigInt
> Reference Types : Object, Array, Functions, Date
> any, unknown, never, void, null, tuple etc
> Custom Types -> type keyword / interface / classes

# Angular CLI Installation

- npm install @angular/cli@14 -g
- ng version
- ng new first-app
  > No for Routing
  > CSS Stylesheet
- cd first-app
- ng serve

- npm uninstall @angular/cli -g
- npm install @angular/cli@14 -g

# ng Commands

- ng generate component path/to/directory/ComponentName
- ng g c path/componentName

- ng g c components/users

- ng generate directive path/to/directory/DirectiveName
- ng g d path/directiveName

- ng g s path/serviceName
- ng g m path/moduleName
- ng g p path/pipeName

# Bootstrap Installation

- npm install bootstrap

# Component Types

- Smart / Container / Parent : does have UI logic and works on model
- Dump / Presentational / Child : does not have UI logic / does not own the model; receive the model from the parent component.

# Web Designing Terminologies

- Atom : smallest unit; one button, one input field etc
- Molecule : combo of atom; e.g Search bar contains input element + button
- Organism : combo of molecules; e.g Navigation Bar => various links + Search Bar
- Template : combo of Organism; e.g A Form
- Page : A Complete Page

# View Encapsulation

> Component creates Shadow DOM
> Stylesheet does not affect the other component UI.
> Encapsulation Properties
> : Emulated : (default) Local CSS rules will override the global CSS rules
> : ShadowDOM - Only local CSS rules will apply. Global CSS rules does not affect at all.
> : None - No encapsulation. Local CSS rule will affect the other component UI also.

# Notes

- Projected Content and UI is not accessible inside ngOnInt().

# Decorators

- @Component
- @Input
- @Output
- @ViewChild
- @ContentChild
- @HostBinding
- @HostListener

# Pure Pipe -> works with pure changes (default)

# Impure Pipe -> works with both pure & impure changes. Not efficient for large record set.

let fruits = ['apple', 'banana', 'kiwi'];

fruits.push('orange'); // Impure Change

fruits = ['apple' ,'banana', 'kiwi', 'orange']; // Pure Change

let user = {
name : "John"
}

user.name = "Jenny"; // Impure Change

user = { // Pure Change
name : "Jack"
}
