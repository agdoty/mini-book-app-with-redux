///////////////////////////
//        REDUCERS       //
///////////////////////////
-What is a reducer?:
      A function that returns a piece of the applications state.
      Because an application can have many different pieces of state, you can have
      many different reducers.

-Use export default to export a function from a reducer, ex (export default function(){}). The exported file is now available to your other files.

-Step 1 : create the reducer
-Step 2 : wire it into the project (in index.js)

-combine react and redux by using a library called react-redux

///////////////////////////
//       CONTAINERS      //
///////////////////////////
-Do this by defining a component as a container  
-Container : a react component that has a direct connection to the state managed by redux.

How do you know what components should be containers?
      -In general, you want the most parent component that cares about a particular piece of state to be a container.
      -only the most parent component that cares about a particular piece of state needs to be connected to redux.

-a word pulls the entire object on import while a word in {} pulls out a single property

Action and action readers.

-an action creator is a function that returns an object.
