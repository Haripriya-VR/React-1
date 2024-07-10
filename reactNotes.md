
# React Basics 
React is a javascript library used to Build UI .
## index
1. DoM
2. virtual DOM
3. Jsx
4. SPA 
5. templating and client side data management in react 
6. bable,webpack how jsx is rendering in the client side .

(https://github.com/sudheerj/reactjs-interview-questions)


ReactDom.render() vs js .append() method : ReactDom.render() is a function provided by react-dom which renders the elements and components in to react dom.It purpose is to render a React component into a specific Dom node. 

Reconcillation : when ReactDom.render() is called it creates in-memory tree in of React elements (Virtual Dom) That then it diffs with the previous rendered tree to compute the most efficient way to update the browser's DOM.

.append() method is used to insert a node or a string as the last child of a parent node . 

Why we use import react from 'react' ? 

React is what defines jsx .

Embedding expressions : Expression is a vaild piece of js code that resolves to get a value. embedding expressions are those expressions enclosed with in curly braces . It includes functions, variables ,calculations etc..

EG : interpolating text, conditional rendering etc

const name = 'Alice';
const element = <h1>Hello, {name}!</h1>;


declarative VS imperative 

Declarative programming is a style where you write a code which specifies what you wanted to do, rather than how to do it. This mainly focus on the end result . In the context of react React's jsx you describe what the UI should look like for a given state ,and react take's care of rendering it. You don't manually manupulate the DOM.

imperative programming is a style of where you write code which specifies how to do what we wanted to do.It involves step by step instructions that change programms state.


Eg : It is the way of DOM manipulation using vanila javascript.

React Component : A component is considered as a core building block of react application .

completed topics + notes 

react - is a JavaScript library used for building and managing UI

components - components are the core concept in react. In react we split up the code into certain pieces and put into reusable component then the code become more readable and manageable.
             There are two types of components - functional components and class components  one is stateful component and other is stateless component. React Hooks are introduced to
             to manage state of components
JSX        - JavaScript XML is extended version of JavaScript with is used to include HTML inside JavaScript this is a way to write react . key features of JSX  is code readability, 		      Enhances 
                  productivity , babel transformation etc. babel is a transpiler which converts source code of one language to another

Pure Components - Are those components which does not re render's while the parent component renders. Pure components render only when there is change in state or props. for functional  
                  components pure components can be created by using react.memo() which is a higher order component.

Higher Order components - Are advanced patterns of react for reusing the component logic. They are a function that takes one component and gives out a new component essentially wrapping the
                  	  original component and provide additional functionality or data injection.

Virtual DOM vs Real DOM - Real DOM is a traditional DOM API provided by the browsers to represent the HTML Documents in a tree like structure allowing us to manipulate and access the                       			  document . virtual DOM is a light weight copy of the real DOM stored in the memory and is a representation of DOM elements as nodes in a tree structure.


Reconciliation - The process also known as diffing determines what has changed in the virtual Dom Then React update only those elements in the React DOM actually changed. 

Diffing Algorithm - This is an algorithm in react that used to change the real Dom according to the changes in the virtual Dom . 1st they identifies the changes and then it get updated in 
	            the real DOM.

strict Mode - This is a tool that used to highlighting the problems in an application in react. It does not have any impact in production build it checks are only run development mode.

Error Boundaries - These are react components that catch up JavaScript errors in their child component tree and display a fallback UI instead of component tree crashed.

profiler - This is a performance measurement tool in react 16.5 which helps the developer to understand the errors in the applications. This can be used in both development and production 
	   production environment.

prop drilling - it is a common pattern in react that the one data that needs to pass to the other components through the other components . It is a difficult task . There comes the 			importance of context API and UseContext Context API is a feature of react that consider the data globaly that can be passed to the component tree. 


data flow in react - unidirectional data flow the data can be transferred from parent components to the child components through state and props.

limitations of react - prop drilling , no data fetch build in method in react , overrelay of virtual dom , third party dependencies.


fragments - it is a feature in react that helps to wrap up the child elements without adding a new node to the dom . 


SPA - single page applications interact with the user dianamically that it renders a particular section of the page without rerendering from the serverside.

webpack - 

profiler


# TO DO

- [x]  useCallback
- [x]  useMemo
- [x]  React.memo vs useMemo
- [x]  useContext and context API
- [x]  useReducer
- [x]  React.lazy – code splitting

# Pendings

- [x]  useCallback
- [x]  useMemo(repeat)
- [x]  useLocation
- [x]  use imperative handle in depth
- [x]  useMemo dependency list
- [x]  show activity indicators
- [x]  show proper messages to users
- [ ]  error handling in react
- [ ]  shadow DOM
- [x]  react fiber
- [x]  react profiler
- [ ]  method binding
- [x]  pure components(repeat)
- [ ]  synthetic events
- [x]  controlled and uncontrolled components
- [x]  axios vs fetch
- [x]  react.memo(repeat)
- [x]  useImperativeHandle
-
===================================================
==================================================
# STUDY

- [ ]  Babel
- [ ]  webpack
- [ ]  DOM
- [ ]  diffing
- [ ]  state
- [ ]  functional component
- [ ]  class component
- [ ]  JSON
- [ ]  JSX

# TO DO

- [ ]  proper validation
- [ ]  unique TODO
- [x]  pure components(repeat)
- [x]  fragnents(repeat)
- [x]  SPA
- [ ]  pass data from child to parent using props
- [x]  browser vs hashrouter
- [x]  dangerousluySetInnerHTML
- [x]  synthetic event(repeat) 2
- [x]  pure function
- [ ]  react.memo depends on props ,not states
- [ ]  what does useMemo depend on to re-run the callback
- [x]  react suspense
- [ ]  attempt re-do TODO app using reducer
- [x]  super
- [x]  animation package in react
- [x]  why react ?
- [x]  proptypes
- [x]  renderprops
- [x]  what is a hook
- [x]  setter method in useState hook
- [ ]  proper validation with proper error messagess
- [x]  limitations of CSR
- [x]  explore class components
- [x]  state vs variables(repeat)
- [x]  strict mode (repeat)
- [x]  controlled  vs uncontrolled elements
- [x]  fragments vs div
- [x]  default export and names exports
- [x]  understand why console messages in app.jsx appears twice
- [x]  react declarative approach
- [x]  limitations of react
- [ ]  types component
- [ ]  react data flow



Basic Concepts
Introduction to React
What is React?
Why use React?
Overview of JSX, Virtual DOM, and React Ecosystem.
Setting Up Development Environment
Create React App (CRA)
Essential tools (Node.js, npm/Yarn, IDEs)
JSX Syntax
Understanding JSX vs. JavaScript
Embedding Expressions
JSX Attributes and Children
Components
Functional Components vs. Class Components
Rendering Components
Composing Components
Props
Passing Data to Components
Validating Props with PropTypes
Default Props
State
State in Class Components
Using State in Functional Components with useState Hook
State vs. Props
Event Handling
Handling Events in JSX (onClick, onChange, etc.)
Passing Arguments to Event Handlers
Conditional Rendering
Inline Conditional Expressions
Logical && Operator
Ternary Conditional Operator
Preventing Component from Rendering
Lists and Keys
Rendering Lists of Data
Keys in Lists
Implementing a List Component
Forms and Controlled Components
Controlled Inputs
Handling Multiple Inputs
Validation and Submission
Intermediate Concepts
Component Lifecycle Methods
Lifecycle Phases: Mounting, Updating, Unmounting
Using Lifecycle Methods in Class Components
Hooks
useState
useEffect
useContext
Custom Hooks
Context API
Creating Context
Consuming Context
Provider and Consumer
Routing with React Router
Setup and Basic Routing
Route Parameters
Nested Routes
Programmatic Navigation
Higher Order Components (HOC)
Enhancing Component Functionality
Reusing Component Logic
Render Props
Sharing Code with a Prop Function
Using Render Props vs. HOC
Advanced Concepts
Advanced State Management
Using Redux in React
Actions, Reducers, and Store
Connecting React to Redux
Middleware in Redux
Thunk and Saga
Asynchronous Actions
Performance Optimization
shouldComponentUpdate
React.memo
PureComponent
Code Splitting with React.lazy and Suspense
React and TypeScript
Setting Up TypeScript with React
Using TypeScript for Props and State
Testing in React
Testing Components with Jest and Enzyme/Testing Library
Mocking API Calls
Snapshot Testing
Advanced Patterns
Compound Components
Controlled and Uncontrolled Components
Lift State Up vs. Containment
React Internals
Understanding Reconciliation
Virtual DOM Deep Dive
Next.js
Server-side Rendering (SSR)
Static Site Generation (SSG)
API Routes
React Native
Basics of React Native
Building a Simple Mobile App
Integrating Native Features





Week 19 - Redux 















