import React, { useEffect, useState } from "react";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import {
  capnhatPhimUpload,
  layThongTinPhim,
} from "../../../../redux/actions/QuanLyPhimAction";
import { GROUP_ID } from "../../../../util/settings/config";

const Edit = () => {
  const [componentSize, setComponentSize] = useState("default");
  //Set state for image
  const { filmIdDetail } = useSelector((state) => state.QuanLyPhimReducer);
  const [imgSrc, setImgSrc] = useState("");
  let { id } = useParams();
  // console.log(id);
  console.log(filmIdDetail);
  useEffect(() => {
    const action = layThongTinPhim(id);
    dispatch(action);
  }, []);
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true, //Only use if want to edit form
    initialValues: {
      maPhim: filmIdDetail?.maPhim,
      tenPhim: filmIdDetail?.tenPhim,
      trailer: filmIdDetail?.trailer,
      moTa: filmIdDetail?.moTa,
      ngayKhoiChieu: filmIdDetail?.ngayKhoiChieu,
      dangChieu: filmIdDetail?.dangChieu,
      sapChieu: filmIdDetail?.sapChieu,
      hot: filmIdDetail?.hot,
      danhGia: filmIdDetail?.danhGia,
      hinhAnh: null,
      maNhom: GROUP_ID,
    },
    onSubmit: (values) => {
      console.log("Giá trị formik", values);
      //Make object for formData upload
      const formData = new FormData();
      //values.maNhom = GROUP_ID;
      for (let key in values) {
        formData.append(key, values[key]);
        if (values.hinhAnh !== null) {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      //console.log("Giá trị formData", formData.get);
      //Call api
      dispatch(capnhatPhimUpload(formData));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeFile = async (event) => {
    // Always check if got synchronous using async
    //Get file from event object
    let file = event.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      //Set image to formik
      await formik.setFieldValue("hinhAnh", file);
      //Create object to read file
      let reader = new FileReader();
      //Read file
      reader.readAsDataURL(file);

      reader.onload = (e) => {
        setImgSrc(e.target.result); //base64 img
        //console.log(e.target.result);
      };
    }
  };
  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  //Set closure for handleChangeSwitch
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      className="text-left"
    >
      <h3>Thêm mới phim </h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên phim">
        <Input
          name="tenPhim"
          onChange={formik.handleChange}
          value={formik.values.tenPhim}
        />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input
          name="trailer"
          onChange={formik.handleChange}
          value={formik.values.trailer}
        />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input
          name="moTa"
          onChange={formik.handleChange}
          value={formik.values.moTa}
        />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker
          format={"DD/MM/YYYY"}
          onChange={handleChangeDatePicker}
          value={moment(formik.values.ngayKhoiChieu)}
        />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Switch
          name="dangChieu"
          onChange={handleChangeSwitch("dangChieu")}
          checked={formik.values.dangChieu}
        />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Switch
          name="sapChieu"
          onChange={handleChangeSwitch("sapChieu")}
          checked={formik.values.sapChieu}
        />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch
          name="hot"
          onChange={handleChangeSwitch("hot")}
          checked={formik.values.hot}
        />
      </Form.Item>

      <Form.Item label="Số sao">
        <InputNumber
          min={1}
          max={10}
          onChang={handleChangeSwitch("danhGia")}
          value={formik.values.danhGia}
        />
      </Form.Item>

      <Form.Item label="Hình ảnh">
        <input
          type="file"
          accept="image/png, image/jpeg,image/gif,image/png"
          onChange={handleChangeFile}
        />
        <br />
        <img
          style={{ width: 150, height: 150 }}
          src={imgSrc === "" ? filmIdDetail.hinhAnh : imgSrc}
          alt="..."
        />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-500 text-white p-2">
          Cập Nhật
        </button>
      </Form.Item>
    </Form>
  );
};

export default Edit;
