What problem does the context API help solve?
In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
What is the difference between Application state and Component state? When would be a good time to use one over the other?
Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
What is your favorite state management system you've learned and this sprint? Please explain why!


1. Context API allows us to store data on a context object so it can be retrieved in any component that needs it, saving the developper from passing props from parents to children components. In larger applications prop drilling can get combersome, hence context API.

2. Store: The store is a centralized state hub ie the state of the whole app is stored inside store.
   reducers: Are functions that allow us to manage state in an application
   Actions: Describe to the app that something has happened, based on which the reducer will act to update the state of the app, that's why they (actions) are passed as a parameter inside the reducer.

3. Application state is global: Any component in the app has access to it.
   Component state is local: it lives within a specific component, as such it can only be updated within that component and can only be passed to the children of that same component.

In medium to large size apps the use of Application state is obviousely preferable as state management can get out of controle if scattered all over the app. However if we are developping a small app it's better to use component state which will save us the extra work setting up the boiler plate code for the Application state management system.

4. Redux Thunk middleware allows us to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.The inner function receives the store methods dispatch and getState as parameters.
Redux thunk allows the action creators to create asynchronous actions.

5. My favorite state management system is context api for it is much simpler and easier to implement than redux.