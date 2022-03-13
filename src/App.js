import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import HomeHeader from "./Components/homeHeader/HomeHeader";
import { HomeTemplate } from "./_Templates/HomeTemplate/HomeTemplate";
import HomeDesktop from "./_Pages/Home/HomeDesktop";
import DanhSachCongViecDesktop from "./_Pages/DanhSachCongViec/DanhSachCongViecDesktop";
import HomeHeaderOtherPages from "./Components/homeHeader/HomeHeaderOtherPages";
import { OtherPagesTemplate } from "./_Templates/OtherPagesTemplate/OtherPagesTemplate";
import AdminTemplate from "./_Templates/AdminTemplate/AdminTemplate";
import Dashboard from "./_Pages/Admin/Dashboard/Dashboard";
import { UserTemplate } from "./_Templates/UserTemplate/UserTemplate";
import Login from "./_Pages/Users/Login/Login";
import Register from "./_Pages/Users/Register/Register";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      {/* <HomeHeader /> */}
      <Switch>
        <HomeTemplate exact path="/home" Component={HomeDesktop} />
        <Route exact path="/homeheader" component={HomeHeader} />
        <Route
          exact
          path="/otherpagesheader"
          component={HomeHeaderOtherPages}
        />
        <OtherPagesTemplate
          exact
          path="/danhsachcongviec/:typejob"
          Component={DanhSachCongViecDesktop}
        />
        {/* <Route
          exact
          path="/danhsachcongviec"
          component={DanhSachCongViecDesktop}
        /> */}
        <HomeTemplate exact path="/" Component={HomeDesktop} />
        <AdminTemplate exact path="/admin" Component={Dashboard} />
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
