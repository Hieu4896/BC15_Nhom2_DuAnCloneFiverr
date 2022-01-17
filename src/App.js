import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import HomeHeader from "./Components/homeHeader/HomeHeader";
import { HomeTemplate } from "./_Templates/HomeTemplate/HomeTemplate";
import HomeDesktop from "./_Pages/Home/HomeDesktop";
import DanhSachCongViecDesktop from "./_Pages/DanhSachCongViec/DanhSachCongViecDesktop";
import HomeHeaderOtherPages from "./Components/homeHeader/HomeHeaderOtherPages";
import { OtherPagesTemplate } from "./_Templates/OtherPagesTemplate/OtherPagesTemplate";
import LoaiCongViecDesktop from "./_Pages/LoaiCongViec/LoaiCongViecDesktop";
import { DanhSachCongViecTemPlate } from "./_Templates/DanhSachCongViecTemplate/DanhSachCongViecTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/home" Component={HomeDesktop} />
        <Route exact path="/homeheader" component={HomeHeader} />
        <Route
          exact
          path="/danhsachcongviec/:typejob"
          component={HomeHeaderOtherPages}
        />
        <DanhSachCongViecTemPlate
          exact
          path="/loaicongviec/:subtypejob"
          Component={LoaiCongViecDesktop}
        />
        <HomeTemplate exact path="/" Component={HomeDesktop} />
      </Switch>
    </Router>
  );
}

export default App;
