import { http, DOMAIN } from "../../../Util/Setting";
export const getApiLoaiCongViec = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`${DOMAIN}/api/type-jobs/${id}`);

      console.log("loaicongviec", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      await dispatch({
        type: "GET_API_LOAI_CONGVIEC",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};

export const getApiCongViecTheoLoaiCongViecChinh = (id) => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        `${DOMAIN}/api/jobs/by-type?type=${id}&skip=0&limit=12`
      );

      console.log("congviecchinh", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      await dispatch({
        type: "GET_API_CONGVIEC_THEO_LOAICONGVIECCHINH",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
