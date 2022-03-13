import { baseService } from "./baseService";

export class QuanLyUserService extends baseService {
  layDanhSachLogin = (idLogin) => {
    //idLogin includes taiKhoan-matKhau
    return this.post(`api/auth/signin`, idLogin);
  };
  layThongTinUser = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };
}

export const quanLyUserService = new QuanLyUserService();
