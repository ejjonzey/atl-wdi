# React Documentation Scavenger Hunt

[React Docs](https://facebook.github.io/react/docs/hello-world.html)

### Post answers (and links to where you found them) for each of the questions below:

1. Can we use `npm` with React or do we have to use `yarn`?

You can use either yarn or npm with react.  From the "Add React to existing app tab": A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.


2. We are using JSX to write HTML inside of our React. Are we required to use JSX with React? Are there any alternatives?

You can use javascript and jquery with React. https://facebook.github.io/react/docs/react-without-jsx.html

3. Does React re-render the entire component when one part of it changes?

No, it only updates the changed part.  Found in the "Rendering-Elements' page:

 React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

4. Should we ever change `props` (or parameters) inside of a component? 

No, all React components must be a pure function with regards to their props.
https://facebook.github.io/react/docs/components-and-props.html

5. Are all components classes? 

Yes. https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html

6. List five "Synthetic Events" provided by React:

Clipboard, Keyboard, Wheel, Touch, and Form events.  https://facebook.github.io/react/docs/events.html

7. Do we have to use ES6 syntax with React?

no, you can use the create-react-class. https://facebook.github.io/react/docs/react-without-es6.html

8. Where can I go to check out React's built-in Accessibility features?

Here: https://facebook.github.io/react/docs/accessibility.html

9. List five React Component Lifecycle Methods:

Render, Constructor, componentWillMount, componentDidMount, componentWillUpdate. https://facebook.github.io/react/docs/react-component.html 

10. Where would I go to check out React's built-in testing tools?

Here: https://facebook.github.io/react/docs/test-utils.html

### Turning in:

* Post a link to this file on Github to Schoology.
