import React from "react";

import { Route } from "react-router-dom";
import HomeFooter from "../../Components/homeFooter/HomeFooter";
import DanhSachCongViecHeader from "../../Components/danhSachCongVIecHeader/DanhSachCongViecHeader";

export const DanhSachCongViecTemPlate = (props) => {
  let { Component, path } = props;
  return (
    <Route
      path={path}
      render={(propsRoute) => {
        return (
          <div>
            <DanhSachCongViecHeader {...propsRoute} />
            <Component {...propsRoute} />
            <HomeFooter />
          </div>
        );
      }}
    />
  );
};
