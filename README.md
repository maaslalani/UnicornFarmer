# JS Fundamentals Final Project

You'll be developing a JS-based client-side application that is either:

- a game
- an app

You are completely free to decide what you'd like to build in either category, subject to the requirements below. If you have any concerns or difficulty coming up with something, feel free to speak with your instructor.

## Time Commitment

You should spend a maximum of **10 hours** on this project. Please be sure to take on a realistic amount of work, particularly if it will implement things that you haven't worked with before. 

## Detailed requirements

### General (applies to both options)

- Follow the [Shopify Style Guide](https://github.com/Shopify/javascript) (Links to an external site.)Links to an external site. and write the game entirely using JavaScript ES6.

- Make great use of Classes and Object Literals in your code.

- Your code is written in multiple .js files if/when appropriate, through use of modules

- Your code is commented properly and is easy to follow.

- Any CSS/HTML work will be looked at, but will not weigh heavily in your final evaluation. That said, it should still be in good form.

### Game option

- The game must be live and fully playable by the due date.

- The game follows traditional Clicker mechanics (ie: you click things, numbers go up, gameplay expands overtime)

- The game must have an ending and / or goal.
Automatically save the players progress, reloading the page will bring the user where they left off.

- Create cheating functions that allow you to test and demo aspects of the game through the console.

- The game must listen for some type of Input Event from the user and act upon it.

### App option

- Your app's use case should be mostly front-end focused and have a rich, interactive UI. If anything, you can create a simple web server to allow you to run off of `localhost` (which can help with CORS issues).

- Given the above, if there is anything you need to save during a session, just use `localstorage` instead of a back-end database/datafile.

- As a minimum, the app must:
  - Make an Ajax request
  - Have event listeners
  - Manipulate DOM elements in some way
  - Implement form elements in some way
  - Must little to no business logic located in your HTML (perhaps just to initialize your app object)
  - It is preferred that you do not use a framework, but if you really think it would benefit your use case, please bring the proposal up to your instructor. Be aware that you don't have a lot of time for this project, so it might not be a good idea to learn one if you haven't used it before. If you have used it before, make sure that you still meet the above requirements.

- You are strongly discouraged from using jQuery, but if you must, please try to keep its use to a minimum. You *cannot* use Prototype (sorry York!).