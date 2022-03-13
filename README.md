# CLERK EXERCISE

The requirement were met using React, and Create React App. In the project root directory, you can run:

- Run in Dev Mode with `yarn start`.
- Run the Tests with `yarn test`.

## A FEW NOTES:

Regarding the requirements, and the way they were implemented, here is some reationale:

### Using Zustand, for State Mangement and Async Actions:

The exercise, required to create an App, we could implement, in various frameworks. 
While I chose React, State Management is one of those things that need to be Framework Agnostic.

That's why I used Zustand. It has a core package, that would allow us to create a Store, and then
we can use it in React, Vue, Angular even Plain HTML.

It also, connects with Redux DevTools, meaning increased D.X, and is quite easily testable since it doesn't
have any providers.

### UI and Prototype, aren't 100% the same

The Prototype that was provided, is not implement exactly, but all the functionality is there. 
Just a few differences, to make it easier to work across Web, Mobile devices.

### Fetching User Data

I am fetching 9 User per requrest. I have implemented it, by manipulating the `page` and `pageSize` properties
in their API. There is a Prev, Next Button, to fetch more stuff, but a request is made on mount.

Regarding, this statement, `Therefore, fetch up to 100 users any way you like but avoid fetching them and display them all at once`,
I am a bit confused, since it would require either Server + Client Side filtering or only Client Side but seems a bit contradicting to me.
So, if you wanted that, it wouldn't be difficult to implement, but sorry, I didn't implement it.

### Persistent Storage

The persistant is again, achieved by Zustand, with their `persist` middleware, and setting it into session-storage.