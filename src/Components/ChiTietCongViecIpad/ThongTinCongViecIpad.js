import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getApiThongTinCongViec } from "../../Redux/Actions/ChiTietCongViecActions/ChiTietCongViecActions";
import Style from "./ThongTinCongViecIpad.module.css";
export default function ThongTinCongViecIpad(props) {
  let id = props.idjob;
  let { thongTinCongViec } = useSelector(
    (rootReducer) => rootReducer.ChiTietCongViecReducer
  );
  let dispatch = useDispatch();
  useEffect(() => {
    const action = getApiThongTinCongViec(id);
    dispatch(action);
  }, []);

  return (
    <div>
      <div className={`${Style.inforJob_Div}`}>
        <h3>
          <span style={{ fontSize: 35, color: "green", fontStyle: "normal" }}>
            {thongTinCongViec.name}
          </span>
        </h3>
        <img
          className={Style["inforImage"]}
          src={thongTinCongViec.image}
          alt={thongTinCongViec.image}
        />
        <h3>About this job</h3>
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              alignItems: "center",
              fontSize: 18,
              marginBottom: 20,
            }}
          >
            <span style={{ fontStyle: "italic", marginRight: 20 }}>
              <span>Rating : {thongTinCongViec.rating}</span>
              <i
                style={{
                  color: "red",
                }}
                className="fas fa-heart"
              ></i>
            </span>
            <span style={{ fontStyle: "italic" }}>
              <span>Starting at : {thongTinCongViec.price}</span>
              <span style={{ color: "teal" }}>$</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              flexDirection: "row",

              fontSize: 18,
            }}
          >
            <p
              className={
                thongTinCongViec.proServices
                  ? Style["services_available"]
                  : Style["services_unavailable"]
              }
            >
              ProServices
            </p>
            <p
              className={
                thongTinCongViec.localSellers
                  ? Style["services_available"]
                  : Style["services_unavailable"]
              }
            >
              LocalSellers
            </p>
            <p
              className={
                thongTinCongViec.onlineSellers
                  ? Style["services_available"]
                  : Style["services_unavailable"]
              }
            >
              OnlineSellers
            </p>
            <p
              className={
                thongTinCongViec.deliveryTime
                  ? Style["services_available"]
                  : Style["services_unavailable"]
              }
            >
              DeliveryTime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
