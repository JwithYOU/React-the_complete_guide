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
