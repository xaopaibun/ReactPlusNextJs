import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import { useScroll } from "../../hooks/useScroll";
const Menu = ({ isColor }) => {
  const router = useRouter();
  const [DropDownGioiThieu, setDropDownGioiThieu] = useState(false);
  const [DropDownEvent, setDropDownEvent] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const handleClickDropDownEvent = () => {
    if (DropDownGioiThieu === true) {
      setDropDownGioiThieu(false);
    }
    setDropDownEvent(!DropDownEvent);
  };
  const handleClickDropDownGioiThieu = () => {
    if (DropDownEvent === true) {
      setDropDownEvent(false);
    }
    setDropDownGioiThieu(!DropDownGioiThieu);
  };
  const { data } = useScroll();
  // style={{boxShadow:  data > 0 ? '0px 4px 4px rgb(0 0 0 / 7%)': 'none'}}
  return (
    <>
      <div className="box-menu">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-3 col-3">
              <img src="../assets/images/LogoReactPlus.png" alt="Logo" />
            </div>
            <div className="col-xl-9 col-sm-9 col-9">
              <div className="menu-reponsive">
                <div className="btn-menu" onClick={() => setIsClose(!isClose)}>
                  {!isClose ? (
                    <img src="../assets/icon/menu-3.1.png" alt="Open" />
                  ) : (
                    <img
                      src="../assets/icon/X.png"
                      width="24px"
                      height="24px"
                      alt="Close"
                    />
                  )}
                </div>
              </div>

              <ul className="menu">
                <li className="menu__item">
                  <Link href="/">
                    <a className={router.pathname == "/" ? "active" : ""}>
                      {" "}
                      Trang chủ
                    </a>
                  </Link>
                </li>
                <li className="menu__item">
                  {/* <Link href="/gioi-thieu"> */}
                  <a
                    className={
                      router.pathname == "/gioi-thieu/gioi-thieu-cong-ty" ||
                      router.pathname == "/gioi-thieu/gioi-thieu-react"
                        ? "active"
                        : ""
                    }
                    onClick={handleClickDropDownGioiThieu}
                  >
                    Giới thiệu
                    <img
                      src="../assets/icon/drop-down-icont.png"
                      width="6px"
                      height="4.98px"
                      style={{ marginLeft: "3px" }}
                      alt=""
                    />
                  </a>
                  {/* </Link> */}
                </li>
                <li className="menu__item">
                  <Link href="/van-hoa">
                    <a
                      className={router.pathname == "/van-hoa" ? "active" : ""}
                    >
                      Văn hóa{" "}
                    </a>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/tuyen-dung">
                    <a
                      className={
                        router.pathname == "/tuyen-dung" ? "active" : ""
                      }
                    >
                      Tuyển dụng
                    </a>
                  </Link>
                </li>
                <li className="menu__item">
                  {/* <Link href="/daotao-sukien"> */}
                  <a
                    onClick={handleClickDropDownEvent}
                    className={
                      router.pathname == "/cac-khoa-dao-tao/su-kien-thuong-ky"
                        ? "active"
                        : ""
                    }
                  >
                    Đào tạo &amp; Sự kiện
                    <img
                      src="../assets/icon/drop-down-icont.png"
                      width="6px"
                      height="4.98px"
                      style={{ marginLeft: "3px" }}
                      alt=""
                    />
                  </a>
                  {/* </Link> */}
                </li>
                <li className="menu__item">
                  <Link href="/vi-cong-dong">
                    <a
                      className={
                        router.pathname == "/vi-cong-dong" ? "active" : ""
                      }
                    >
                      Vì cộng đồng
                    </a>
                  </Link>
                </li>
                <li className="menu__item">
                  <Link href="/tin-tuc">
                    <a
                      className={
                        router.pathname == "/tin-tuc" ||
                        router.pathname == "/tin-tuc/bai-viet-chi-tiet"
                          ? "active"
                          : ""
                      }
                    >
                      Tin tức &amp; Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {(DropDownGioiThieu === true && (
        <div className="drop-down">
          <div className="box-center">
            <Link href="/gioi-thieu/gioi-thieu-react">
              <a>Về React & React Native </a>
            </Link>
            <Link href="/gioi-thieu/gioi-thieu-cong-ty">
              <a> Công ty React Plus </a>
            </Link>
            <div className="triangle" />
          </div>
        </div>
      )) ||
        (DropDownEvent === true && (
          <div className="drop-down">
            <div className="box-center">
              <Link href="/cac-khoa-dao-tao">
                <a>Các khoá đào tạo </a>
              </Link>
              <Link href="/cac-khoa-dao-tao/su-kien-thuong-ky">
                <a> Sự kiện thường kỳ </a>
              </Link>
              <div className="triangle" />
            </div>
          </div>
        ))}
      <div className="box-menu-reponsive">
        <h2 className="menu-reponsive-item">Trang chủ</h2>
        <h2 className="menu-reponsive-item">Giới thiệu</h2>
        <h2 className="menu-reponsive-item">Văn hóa </h2>
        <h2 className="menu-reponsive-item">Tuyển dụng</h2>
        <h2 className="menu-reponsive-item">Đào tạo & Sự kiện </h2>
        <h2 className="menu-reponsive-item">Vì cộng đồng</h2>
        <h2 className="menu-reponsive-item">Tin tức & Blog</h2>
      </div>
      <style jsx>{`
        .btn-menu {
          border: 1px solid #c4c4c4;
          box-sizing: border-box;
          border-radius: 8px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu-reponsive {
          display: none;
        }
        .box-menu {
          padding: 10px 0;
          position: sticky;
          background-color: ${isColor && data === 0
            ? "transparent"
            : "#ffffff"};
          top: 0;
          left: 0;
          z-index: 999;
          box-shadow: ${data > 10 ? "0px 4px 4px rgb(0 0 0 / 7%)" : "none"};
        }
        .menu {
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .menu__item {
          list-style: none;
          height: 25px;
          width: auto;
        }
        .drop-down {
          background-color: #00c6e8;
          height: 48px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .box-center {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .box-center::before {
          content: "";
          height: 15px;
          width: 15px;
          background-color: #00c6e8;
          transform: rotate(45deg);
          position: absolute;
          top: -2px;
          left: 50px;
        }
        .active {
          border-bottom: 3px solid #00daff;
        }
        .menu__item a {
          color: ${isColor && data === 0 ? "#ffffff" : "#25282b"};
          font-weight: 500;
          letter-spacing: -0.02em;
          font-size: 13px;
          font-weight: 500;
          display: block;
          cursor: pointer;
          text-decoration: none;
          transition: 0.3s;
        }
        .drop-down a {
          font-weight: 500;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-decoration: none;
          margin: 20px;
        }
        .box-menu-reponsive {
          display: none;
        }

        .menu__item a:hover {
          color: #0bbee7;
          text-decoration: none;
        }
        .triangle-relative {
          position: relative;
        }
        .menu-reponsive {
          display: none;
        }
        @media screen and (max-width: 768px) {
          .box-menu {
            width: 100%;
            background-color: #ffffff;
          }

          .menu {
            display: none;
          }
          .menu-reponsive {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }
          .box-menu-reponsive {
            display: block;
            width: 80%;
            height: 900px;
            background-color: #f4f6fa;
            padding: 53px 38px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            overflow-y: hidden;
            transform: translateX(125%);
          }
          .menu-reponsive-item {
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: -0.02em;
            color: #25282b;
            margin: 28px 0;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          transform: ${!isClose ? `none` : `translateX(-80%)`};
        }
        @keyframes OpenMenu {
          from {
            transform: none;
          }

          to {
            transform: translateX(-80%);
          }
        }
      `}</style>
    </>
  );
};

export default Menu;
