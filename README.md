## SuperTokens Auth on React with Custom UI

This is an example repository for authenticating users using [`supertokens-website`](https://github.com/supertokens/supertokens-website) SDK on ReactJS.

The demo app can be viewed here: https://supertokens-ui.vercel.app/

### How to use

- Clone the repository

```
git clone https://github.com/vihar/supertokens-custom-ui.git
```

- Installation (yarn/npm)

```
yarn install
```

- Development

```
yarn start
```

### How it works?

This repository uses SuperTokens for user authentication. The backend server runs Node (ExpressJS) while the frontend is powered by React.

> SuperTokens is an open-source auth provider offering access control, Session management, and more. More details [here](https://github.com/supertokens).

The way it works is, we use a Node SDK that provides APIs for sign-up, sign-in, signout, session refreshing, etc. All we'll need to do is initialize SuperTokens and add middleware. With this, the server automatically exposes all the auth APIs.

Behind the scenes, when SuperTokens is initialized on the backend, it needs the SuperTokens core API keys. This core essentially is an HTTP service for auth logic and database operations. We can either use the SuperTokens managed core (cloud version) or self-host it on our own server.

On the frontend, we bind these APIs using the `supertokens-website` SDK, which lets us add secure login and provides us session management. The login behind session-management can be found at `Home.js` component.
