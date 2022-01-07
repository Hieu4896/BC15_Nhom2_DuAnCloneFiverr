import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import HomeHeader from "./Components/homeHeader/HomeHeader";
import { HomeTemplate } from "./_Templates/HomeTemplate/HomeTemplate";
import HomeDesktop from "./_Pages/Home/HomeDesktop";
import DanhSachCongViecDesktop from "./_Pages/DanhSachCongViec/DanhSachCongViecDesktop";
import HomeHeaderOtherPages from "./Components/homeHeader/HomeHeaderOtherPages";
import { OtherPagesTemplate } from "./_Templates/OtherPagesTemplate/OtherPagesTemplate";

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
      </Switch>
    </Router>
  );
}

export default App;
