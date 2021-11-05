import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.less';
import { FirstRouterPaths } from './configs/routerPaths';
// import { UserUtils } from './page/login/entry/utils';
const Home = React.lazy(() => import("./page/home"))
const Login = React.lazy(() => import("./page/login/entry"))

function App() {
  // const { user } = UserUtils
  // console.log(user);

  return <Suspense fallback={<Spin style={{ position: "absolute", top: "50%", left: "50%" }} spinning={true}></Spin>}>
    <BrowserRouter>
      <Switch>
        <Route exact path={FirstRouterPaths.home} component={Home}>

        </Route>
        <Route exact path={FirstRouterPaths.login} component={Login}>

        </Route>
      </Switch>
    </BrowserRouter>
  </Suspense>
}

export default App;
