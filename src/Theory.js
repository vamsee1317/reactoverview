// React State
 
// 💡 Props are passed to the component, while state is managed within the component.

// 💡 State can be accessed using the useState hook in functional components and this.state in class components.

// 💡 State is an object that influences what is rendered in the browser and can be changed within the component.

// 💡 The setState method is used to alter the state of a class component.

// 💡 State is privately maintained inside a component and can be used to influence the user interface.


// React Props :

// Props are nothing but optional inputs for components and returns the jsx as an ouput.
// Props are optional input for components, allowing for dynamic rendering.
// 💡 Props are accessed and used in functional components using the props parameter and in class components using this.props.
// 💡 Props are immutable, meaning their value cannot be changed once set.
// 💡 To render dynamic content passed as props, use props.name or props.children.
// 💡 Props are essential for maintaining component data that may change over time in a React application.




// useContext :

// useContext is a React hook that lets you access the context values in any functional component without passing props manually. (aka prop drilling).


// Prop Drilling : 

// When you pass data (props) from a parent component to a deeply nested child, through multiple intermediate components that don't need the data themselves- they just pass it on. This is called prop drilling. (They just act as a carrying bridge between the parent and the child component).


// useReducer :

// useReducer is a hook used to manage complex or multi-step state logic in a structured way - just like Redux.

// useReducer vs Redux :

// useReducer helps you store and update state in a more predictable and scalable way, similar to Redux, but without the need for a separate store or actions. 

// Redux is a state management library that helps you manage global state by providing a single source of truth for your application's state.


// Syntax : 

// const [state, dispatch] = useReducer(reducer, initialState);

// Real-Life Analogy :

// Imagine you're a bank teller. (Reducer Function)
// You give them a form(action), like a deposit or withdrawal (Action).
// They look at your account, process the form, and return your updated balance.

// Action = What to do (type)
// Reducer = How to do it (logic)
// State = Your current balance (data)

// When to use useReducer :

// Use :
    // State has multiple sub-values (eg. cart : items, total, discount).
    // State changes depend on previous state values.
    // You want to organize your state logic in a more structured way.