import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;
  //console.log(props);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <section className="flex flex-col md:flex-row h-screen items-center">
              <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img
                  src="https://source.unsplash.com/random"
                  alt
                  className="w-full h-full object-cover"
                />
              </div>
              <Component {...propsRoute} />
            </section>
          </Fragment>
        );
      }}
    />
  );
};
