import React from "react";

import { Route } from "react-router-dom";
import HomeFooter from "../../Components/homeFooter/HomeFooter";
import HomeHeaderOtherPages from "../../Components/homeHeader/HomeHeaderOtherPages";

export const OtherPagesTemplate = (props) => {
  let { Component, path } = props;
  return (
    <Route
      path={path}
      render={(propsRoute) => {
        return (
          <div>
            <HomeHeaderOtherPages {...propsRoute} />
            <Component {...propsRoute} />
            <HomeFooter />
          </div>
        );
      }}
    />
  );
};
