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
