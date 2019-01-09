The interface can be broken down into 3 large components beneath the larger App component: the "Todos" list, the "Add" input, and the "Search" input. The first of these will be made up of a div, wrapping an h1 and a ul. The h1 will contain the header for the list, and the ul will contain the Task subcomponents. The p tag will read "No todos to complete" and will be dynamically displayed only if the array holding the tasks is empty. The Task subcomponents will render an li with the task and a button for the delete function.

The add input is made up of a an input and a button. Upon hitting the button, it adds the string in the input to the array holding all of the todos, which is stored in the App component so that it can be accessed by the other components.

The search input will dictate how the Todos component renders. It will use a listener to re-render Todos every time a change is made to the search input using the Array.filter() function.

Components:
- App
    - Current Todos List (<div> <h1> , <ul> if !empty(<p>) </div>)
        - Tasks (<li> <button>)
    - Add input (<input> <button>)
    - Search input (<input>)
