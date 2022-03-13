import axios from "axios";
import { DOMAIN_API, TOKEN, TOKEN_LOGIN } from "../Util/settings/config";

export class baseService {
  //put json về phía backend

  put = (url, model) => {
    return axios({
      url: `${DOMAIN_API}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
  post = (url, model) => {
    return axios({
      url: `${DOMAIN_API}/${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN_LOGIN), //Token mà người dùng đăng nhập
        token: TOKEN,
        tokenByClass: TOKEN,
      },
    });
  };
  get = (url) => {
    return axios({
      url: `${DOMAIN_API}/${url}`,
      method: "GET",
      headers: {
        token: TOKEN,
        tokenByClass: TOKEN,
      },
    });
  };
  delete = (url, model) => {
    return axios({
      url: `${DOMAIN_API}/${url}`,
      method: "DELETE",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN_LOGIN), //Token mà người dùng đăng nhập
        Token: TOKEN,
      },
    });
  };
}
