import React, { useState } from "react";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import moment from "moment";
import { themPhimUploadHinhMoi } from "../../../../redux/actions/QuanLyPhimAction";
import { GROUP_ID } from "../../../../util/settings/config";

const AddNew = () => {
  const [componentSize, setComponentSize] = useState("default");
  //Set state for image
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom: GROUP_ID,
    },
    onSubmit: (values) => {
      //console.log("Giá trị formik", values);
      //Make object for formData upload
      const formData = new FormData();
      //values.maNhom = GROUP_ID;
      for (let key in values) {
        formData.append(key, values[key]);
      }
      console.log("Giá trị formData", formData.get("File"));
      //Call api
      dispatch(themPhimUploadHinhMoi(formData));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeFile = (event) => {
    //Get file from event object
    let file = event.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      //Create object to read file
      let reader = new FileReader();
      //Read file
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result); //base64 img
        //console.log(e.target.result);
      };

      //Set image to formik
      formik.setFieldValue("hinhAnh", file);
    }
  };
  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
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
        <Input name="tenPhim" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name="trailer" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formik.handleChange} />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Switch name="dangChieu" onChange={handleChangeSwitch("dangChieu")} />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch name="hot" onChange={handleChangeSwitch("hot")} />
      </Form.Item>

      <Form.Item label="Số sao">
        <InputNumber min={1} max={10} onChang={handleChangeSwitch("danhGia")} />
      </Form.Item>

      <Form.Item label="Hình ảnh">
        <input
          type="file"
          accept="image/png, image/jpeg,image/gif,image/png"
          onChange={handleChangeFile}
        />
        <br />
        <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type="submit" className="bg-blue-300 text-white p-2">
          Thêm phim
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddNew;
