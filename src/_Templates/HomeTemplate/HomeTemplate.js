import React, { useEffect } from "react";
import { useState } from "react";

import { Route } from "react-router-dom";
import HomeFooter from "../../Components/homeFooter/HomeFooter";
import HomeHeader from "../../Components/homeHeader/HomeHeader";
import HomeHeaderIphonePlus from "../../Components/homeHeader/HomeHeaderIphonePlus";
import HomeFooterIphonePlus from "../../Components/homeFooter/HomeFooterIphonePlus";
import HomeHeaderIpad from "../../Components/homeHeader/HomeHeaderIpad";
import HomeFooterIpad from "../../Components/homeFooter/HomeFooterIpad";
export const HomeTemplate = (props) => {
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
      widthHeight.width == 414 &&
      widthHeight.height == 736 &&
      props.IphonePlusComponent
    ) {
      return (
        <div>
          <HomeHeaderIphonePlus {...propsRoute} />
          <props.IphonePlusComponent {...propsRoute} />
          <HomeFooterIphonePlus {...propsRoute} />
        </div>
      );
    } else if (
      widthHeight.width == 768 &&
      widthHeight.height == 1024 &&
      props.IpadComponent
    ) {
      return (
        <div>
          <HomeHeaderIpad {...propsRoute} />
          <props.IpadComponent {...propsRoute} />
          <HomeFooterIpad {...propsRoute} />
        </div>
      );
    } else if (widthHeight.width > 1200) {
      return (
        <div>
          <HomeHeader {...propsRoute} />
          <Component {...propsRoute} />;
          <HomeFooter {...propsRoute} />
        </div>
      );
    }
  };
  return (
    <Route
      exact
      path={path}
      render={(propsRoute) => {
        return <div>{renderComponent(propsRoute)}</div>;
      }}
    />
  );
};
