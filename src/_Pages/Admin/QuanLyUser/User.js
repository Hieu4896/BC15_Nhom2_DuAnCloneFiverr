import React, { useEffect, Fragment } from "react";
import { Table, Input, Button } from "antd";
import { history } from "../../../App";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
  AppstoreAddOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  quanLyPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimAction";

const { Search } = Input;

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
export default function Films() {
  const dispatch = useDispatch();
  const { filmArrDefault } = useSelector((state) => state.QuanLyPhimReducer);
  const getDataFilmAction = () => dispatch(quanLyPhimAction());
  useEffect(() => {
    getDataFilmAction();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSearch = (value) => {
    //Make search film call api
    dispatch(quanLyPhimAction(value));
  };
  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      filterMode: "tree",
      filterSearch: true,
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      //render is a function in antd table to render image
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              className="w-1/4 h-1/4"
              src={film.hinhAnh}
              alt={film.tenPhim}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",

      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" text-2xl"
              to={`/admin/films/edit/${film.maPhim}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              key={2}
              className="text-2xl cursor-pointer"
              onClick={() => {
                //Confirm to delete film
                if (
                  window.confirm("Bạn có chắc muốn xóa phim này" + film.tenPhim)
                ) {
                  //Call action api delete film
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>

            <NavLink
              key={3}
              className=" mr-2 text-2xl"
              to={`/admin/showtime/${film.maPhim}/${film.tenPhim}`}
              onClick={() => {
                localStorage.setItem("filmParams", JSON.stringify(film));
              }}
            >
              <CalendarOutlined style={{ color: "green" }} />{" "}
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = filmArrDefault;
  return (
    <div className="container m-2 text-left items-center">
      <Button
        className="mb-5"
        onClick={() => {
          history.push("/admin/films/addnew");
        }}
      >
        <AppstoreAddOutlined /> Thêm phim
      </Button>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />
      <Table
        className="mt-4"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={(record) => record.maPhim}
      />
    </div>
  );
}
