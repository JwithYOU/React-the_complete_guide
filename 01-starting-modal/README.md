# React - The Complete Guide

## 2022.12.06.(화)

### Chapter - Section9: 109~117

<br/>

### 1. React.Fragment 활용하기

<br/>

JSX를 사용해서 컴포넌트를 리턴할 때는 태그로 감싸져 있어야한다. 그렇다고 <div>와 같은 태그를 감싸서 리턴을 한다면 적은 컴포넌트를 사용할 때는 큰 문제가 되지는 않겠지만 만약 큰 프로젝트 같은 데에서 많은 컴포넌트를 사용한다면 DOM에 렌더링 된 것을 보면 정말로 많은 불필요한 태그들이 생겨날 텐데 코드를 작성함에 있어서 바람직하지는 않다. 이러한 <div>soup를 방지하기 위해서 React.Fragment를 사용한다

```js
// 사용 예시1
import React from "react";

import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}></Card>
    </React.Fragment>
  );
};

export default ErrorModal;

// 사용 예시2
import React, { Fragment } from "react";

import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}></Card>
    </Fragment>
  );
};

export default ErrorModal;

```

<br/>

### 2. Portal 활용하기

```js
// index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!-- modal-root, backdrop-root 추가 -->
    <div id="modal-root"></div>
    <div id="backdrop-root"></div>
    <div id="root"></div>
  </body>
</html>
```

```js
// ErrorModal.js

import React from "react";
import ReactDOM from "react-dom/client";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
```

<br/>

### 3. Ref 활용하기

```js
// Ref 추가
import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // Ref 선언
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // Ref를 통해서 input에 입력된 텍스트를 확인할 수 있음
    console.log(nameInputRef.current.value);
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            // ref는 key 프롭처럼 내장프롭이다
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
```
