# React - The Complete Guide

## 2022.12.08.(목)

### Chapter - Section10: 118~

<br/>

## useEffect

<br/>
1. useEffect의 두번째 인자에 []을 넣었기 때문에 값이 변하지 않아서 맨 처음 렌더링 될 때를 제외하고는 App 컴포넌트 안에서 state가 변해도 useEffect는 재실행 되지 않는다.

```js
import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeInfo = localStorage.getItem("isLogin");
    console.log("useEffect 안");

    if (storeInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  console.log("useEffect 밖");

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLogin", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
```
