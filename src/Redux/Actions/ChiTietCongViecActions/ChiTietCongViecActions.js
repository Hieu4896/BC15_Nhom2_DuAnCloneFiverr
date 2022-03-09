import { http, DOMAIN } from "../../../Util/Setting";
export const getApiThongTinCongViec = (idjob) => {
  return async (dispatch) => {
    try {
      let result = await http.get(`${DOMAIN}/api/jobs/${idjob}`);

      console.log("thongtincongviec", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      await dispatch({
        type: "GET_API_INFOR_JOB",
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

      console.log("danhsachcomment", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      await dispatch({
        type: "GET_API_LIST_COMMENT",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
export const getApiDanhSachCommentMoi = (newcomment) => {
  return async (dispatch) => {
    try {
      let result = await http.post(`${DOMAIN}/api/comments`, newcomment);
      console.log("danhsachcommentmoi", result);
      //SAu khi lây được dữ liệu về thì cập nhật dữ liệu vào redux
      await dispatch({
        type: "GET_API_LIST_COMMENT_NEW",
        data: result.data,
      });
    } catch (err) {
      console.log("err", err.response?.data);
    }
  };
};
