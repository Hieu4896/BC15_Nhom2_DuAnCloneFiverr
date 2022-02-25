import React from "react";

import { Route } from "react-router-dom";
import HomeFooter from "../../Components/homeFooter/HomeFooter";
import DanhSachCongViecHeader from "../../_Pages/LoaiCongViec/DanhSachCongViecHeader";
import { useEffect } from "react";
import { useState } from "react";
import HomeFooterIpad from "../../Components/homeFooter/HomeFooterIpad";
import HomeFooterIphonePlus from "../../Components/homeFooter/HomeFooterIphonePlus";
import LoaiCongViecHeaderIpad from "../../Components/loaiCongViecIpad/loaiCongViecHeaderIpad/LoaiCongViecHeaderIpad";
import LoaiCongViecHeaderIphonePlus from "../../Components/loaiCongViecIphonePlus/LoaiCongViecHeaderIphonePlus";
import HomeFooterIphone from "../../Components/homeFooter/HomeFooterIphone";
import LoaiCongViecHeaderIphone from "../../Components/loaiCongViecIphone/LoaiCongViecHeaderIphone";

export const LoaiCongViecTemplate = (props) => {
  const [widthHeight, setwidthHeight] = useState({
    // độ phân giải màn hình mặc định
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    //khai báo sự kiện thay đổi kích thước màn hình
    window.onresize = () => {
      // set lại độ phân giải sau khi co giãn màn hình
      setwidthHeight({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.onload = () => {
      setwidthHeight({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    return () => {
      //hủy đăng ký sự kiện khi chuyển qua template khác
      window.removeEventListener("onresize");
      window.removeEventListener("onload");
    };
  }, []);
  let { Component, path } = props;
  const renderComponent = (propsRoute) => {
    if (
      widthHeight.width >= 768 &&
      widthHeight.width <= 1200 &&
      props.IpadComponent
    ) {
      return (
        <div>
          <LoaiCongViecHeaderIpad {...propsRoute} />
          <props.IpadComponent {...propsRoute} />
          <HomeFooterIpad {...propsRoute} />
        </div>
      );
    } else if (
      widthHeight.width >= 414 &&
      widthHeight.width < 768 &&
      props.IphonePlusComponent
    ) {
      return (
        <div>
          <LoaiCongViecHeaderIphonePlus {...propsRoute} />
          <props.IphonePlusComponent {...propsRoute} />
          <HomeFooterIphonePlus {...propsRoute} />
        </div>
      );
    } else if (widthHeight.width < 414 && props.IphoneComponent) {
      return (
        <div>
          <LoaiCongViecHeaderIphone {...propsRoute} />
          <props.IphoneComponent {...propsRoute} />
          <HomeFooterIphone {...propsRoute} />
        </div>
      );
    } else {
      return (
        <div>
          <DanhSachCongViecHeader {...propsRoute} />
          <Component {...propsRoute} />
          <HomeFooter />
        </div>
      );
    }
  };
  return (
    <Route
      path={path}
      render={(propsRoute) => {
        return <div>{renderComponent(propsRoute)}</div>;
      }}
    />
  );
};
