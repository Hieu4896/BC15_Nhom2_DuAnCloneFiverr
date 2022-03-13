import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import { HomeTemplate } from "./_Templates/HomeTemplate/HomeTemplate";
import HomeDesktop from "./_Pages/Home/HomeDesktop";
import LoaiCongViecDesktop from "./_Pages/LoaiCongViec/LoaiCongViecDesktop";
import { LoaiCongViecTemplate } from "./_Templates/LoaiCongViecTemplate/LoaiCongViecTemplate";
import HomeIpad from "./_Pages/Home/HomeIpad";
import HomeIphonePlus from "./_Pages/Home/HomeIphonePlus";
import HomeIphone from "./_Pages/Home/HomeIphone";
import { OtherPagesTemplate } from "./_Templates/OtherPagesTemplate/OtherPagesTemplate";
import OtherPageIpad from "./Components/otherPagesHeader/otherPagesIpad/OtherPageIpad";
import OtherPageIphonePlus from "./Components/otherPagesHeader/otherPagesIphonePlus/OtherPageIphonePlus";
import OtherPageIphone from "./Components/otherPagesHeader/otherPagesIphone/OtherPageIphone";
import ChiTietCongViecDesktop from "./_Pages/ChiTietCongViec/ChiTietCongViecDesktop/ChiTietCongViecDesktop";
import { ChiTietCongViecTemplate } from "./_Templates/ChiTietCongViecTemplate/ChiTietCongViecTemplate";
import { ChiTietNguoiDungTemplate } from "./_Templates/ChiTietNguoiDungTemplate/ChiTietNguoiDungTemplate";
import LoaiCongViecIpad from "./Components/loaiCongViecIpad/loaiCongViecHeaderIpad/LoaiCongViecIpad";
import LoaiCongViecIphonePlus from "./Components/loaiCongViecIphonePlus/LoaiCongViecIphonePlus";
import LoaiCongViecIphone from "./Components/loaiCongViecIphone/LoaiCongViecIphone";
import DanhSachCongViecDesktop from "./_Pages/DanhSachCongViec/DanhSachCongViecDesktop";
import ChiTietNguoiDungDeskTop from "./_Pages/ChiTietNguoiDung/ChiTietNguoiDungDesktop/ChiTietNguoiDungDeskTop";
import ChiTietCongViecIpad from "./Components/ChiTietCongViecIpad/ChiTietCongViecIpad";
import ChiTietCongViecIphonePlus from "./Components/ChiTietCongViecIphonePlus/ChiTietCongViecIphonePlus";
import ChiTietCongViecIphone from "./Components/ChiTietCongViecIphone/ChiTietCongViecIphone";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate
          exact
          path="/home"
          Component={HomeDesktop}
          IpadComponent={HomeIpad}
          IphonePlusComponent={HomeIphonePlus}
          IphoneComponent={HomeIphone}
        />

        <OtherPagesTemplate
          exact
          path="/danhsachcongviec/:typejob"
          Component={DanhSachCongViecDesktop}
          IpadComponent={OtherPageIpad}
          IphonePlusComponent={OtherPageIphonePlus}
          IphoneComponent={OtherPageIphone}
        />
        <LoaiCongViecTemplate
          exact
          path="/loaicongviec/:subtypejob"
          Component={LoaiCongViecDesktop}
          IpadComponent={LoaiCongViecIpad}
          IphonePlusComponent={LoaiCongViecIphonePlus}
          IphoneComponent={LoaiCongViecIphone}
        />
        <ChiTietCongViecTemplate
          exact
          path="/chitietcongviec/:idjob"
          Component={ChiTietCongViecDesktop}
          IpadComponent={ChiTietCongViecIpad}
          IphonePlusComponent={ChiTietCongViecIphonePlus}
          IphoneComponent={ChiTietCongViecIphone}
        />
        <ChiTietNguoiDungTemplate
          exact
          path="/chitietnguoidung"
          Component={ChiTietNguoiDungDeskTop}
        />
        <HomeTemplate
          exact
          path="/"
          Component={HomeDesktop}
          IpadComponent={HomeIpad}
          IphonePlusComponent={HomeIphonePlus}
          IphoneComponent={HomeIphone}
        />
      </Switch>
    </Router>
  );
}

export default App;
