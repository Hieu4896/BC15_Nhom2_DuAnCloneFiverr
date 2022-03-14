import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApiDatCongViec,
  getApiThongTinCongViec,
} from "../../Redux/Actions/ChiTietCongViecActions/ChiTietCongViecActions";
import Style from "./ThongTinCongViecIphone.module.css";
export default function DatCongViecIphone(props) {
  let [hireBasic, SethireBasic] = useState(true);
  let [hireStandard, SethireStandard] = useState(false);
  let [hirePremium, SethirePremium] = useState(false);
  let [datCongViec, setDatCongViec] = useState(false);
  let { thongTinCongViec } = useSelector(
    (rootReducer) => rootReducer.ChiTietCongViecReducer
  );
  let idjob = props.idjob3;
  let dispatch = useDispatch();
  useEffect(() => {
    const actionThongTinCongViec = getApiThongTinCongViec(idjob);
    dispatch(actionThongTinCongViec);
  }, [idjob]);
  return (
    <div className={Style["hire_box"]}>
      <div
        className={`${Style.button_hire} row m-0 justify-content-between text-center`}
      >
        <div
          onClick={() => {
            SethireBasic(true);
            SethireStandard(false);
            SethirePremium(false);
          }}
          className={
            hireBasic
              ? `col-4 pt-2 pb-2 ${Style.button_hire_change}`
              : `col-4 pt-2 pb-2`
          }
        >
          Basic
        </div>
        <div
          onClick={() => {
            SethireStandard(true);
            SethireBasic(false);
            SethirePremium(false);
          }}
          className={
            hireStandard
              ? `col-4 pt-2 pb-2 ${Style.button_hire_change}`
              : `col-4 pt-2 pb-2`
          }
        >
          Standard
        </div>
        <div
          onClick={() => {
            SethirePremium(true);
            SethireBasic(false);
            SethireStandard(false);
          }}
          className={
            hirePremium
              ? `col-4 pt-2 pb-2 ${Style.button_hire_change}`
              : `col-4 pt-2 pb-2`
          }
        >
          Premium
        </div>
      </div>
      <div style={{ padding: "30px 0" }}>
        {hireBasic ? (
          <div>
            <p style={{ marginLeft: 20, fontSize: 16, fontWeight: 700 }}>
              Basic Package
            </p>
            <span style={{ marginLeft: 20 }}>
              <i style={{ marginRight: 10 }} className="far fa-clock"></i>
              <span style={{ color: "#74767e", fontSize: 12 }}>
                14 Days Delivery
              </span>
            </span>
            <span style={{ marginLeft: 20 }}>
              <i style={{ marginRight: 10 }} className="fab fa-rev"></i>
              <span style={{ color: "#74767e", fontSize: 12 }}>
                2 Revisions
              </span>
            </span>
            <div style={{ width: "100%", padding: 10 }}>
              {" "}
              <button
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: 16,
                  padding: "10px 0",
                  background: "green",
                }}
                onClick={() => {
                  const actionDatCongViec = getApiDatCongViec(idjob);
                  dispatch(actionDatCongViec);
                  setDatCongViec(true);
                }}
              >
                Continue {`($${thongTinCongViec.price})`}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {hireStandard ? (
          <div>
            <p style={{ marginLeft: 20, fontSize: 16, fontWeight: 700 }}>
              Standard Package
            </p>
            <span style={{ marginLeft: 20 }}>
              <i style={{ marginRight: 10 }} className="far fa-clock"></i>
              <span style={{ color: "#74767e", fontSize: 14 }}>
                10 Days Delivery
              </span>
            </span>
            <span style={{ marginLeft: 20 }}>
              <i style={{ marginRight: 10 }} className="fab fa-rev"></i>
              <span style={{ color: "#74767e", fontSize: 14 }}>
                3 Revisions
              </span>
            </span>
            <div style={{ width: "100%", padding: 10 }}>
              {" "}
              <button
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: 16,
                  padding: "10px 0",
                  background: "green",
                }}
                onClick={() => {
                  const actionDatCongViec = getApiDatCongViec(idjob);
                  dispatch(actionDatCongViec);
                  setDatCongViec(true);
                }}
              >
                Continue {`($${thongTinCongViec.price * 1.5})`}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {hirePremium ? (
          <div>
            <p style={{ marginLeft: 20, fontSize: 16, fontWeight: 700 }}>
              Premium Package
            </p>
            <span style={{ marginLeft: 20 }}>
              <i style={{ marginRight: 10 }} className="far fa-clock"></i>
              <span style={{ color: "#74767e", fontSize: 14 }}>
                14 Days Delivery
              </span>
            </span>
            <span style={{ marginLeft: 20 }}>
              <i style={{ marginRight: 10 }} className="fab fa-rev"></i>
              <span style={{ color: "#74767e", fontSize: 14 }}>
                3 Revisions
              </span>
            </span>
            <span style={{ marginLeft: 20 }}>
              <i style={{ marginRight: 10 }} className="fas fa-phone"></i>
              <span style={{ color: "#74767e", fontSize: 14 }}>
                Support 24/7
              </span>
            </span>

            <div style={{ width: "100%", padding: 10 }}>
              {" "}
              <button
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: 16,
                  padding: "10px 0",
                  background: "green",
                }}
                onClick={() => {
                  const actionDatCongViec = getApiDatCongViec(idjob);
                  dispatch(actionDatCongViec);
                }}
              >
                Continue {`($${thongTinCongViec.price * 2})`}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {datCongViec ? (
        <div className="alert alert-success" role="alert" data-dismiss="alert">
          Bạn đã đặt việc thành công ✌️✌️✌️!
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
