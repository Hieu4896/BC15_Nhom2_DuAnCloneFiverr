import { http, DOMAIN } from "../../../Util/Setting";
export const getApiThongTinCongViec = (idjob) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`${DOMAIN}/api/jobs/${idjob}`);

      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_INFOR_JOB",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
export const getApiDatCongViec = (idjob) => {
  return async (dispatch) => {
    try {
      let result = await http.patch(`${DOMAIN}/api/jobs/booking/${idjob}`);

      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_DAT_CONGVIEC",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};

export const getApiDanhSachComment = () => {
  return async (dispatch) => {
    try {
      let result = await http.get(
        `${DOMAIN}/api/comments/by-job/60e5b578ed980c7344c64d7e`
      );

      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_LIST_COMMENT",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
export const getApiDanhSachCommentMoi = (comment) => {
  return async (dispatch) => {
    try {
      let result = await http.post(`${DOMAIN}/api/comments`, comment);
      console.log("result", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      dispatch({
        type: "GET_API_LIST_COMMENT_NEW",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
