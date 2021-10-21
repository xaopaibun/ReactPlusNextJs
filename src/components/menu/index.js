import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const Menu = () => {
  const router = useRouter();
  const [DropDownGioiThieu, setDropDownGioiThieu] = useState(false);
  const [DropDownEvent, setDropDownEvent] = useState(false);
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
  return (
    <>
      <div className="box-menu">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <img src="../assets/images/LogoReactPlus.png" alt="Logo" />
            </div>
            <div className="col-xl-9">
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

      <style jsx>{`
        .box-menu {
          padding: 10px 0;
          position: sticky;
          background: white;
          top: 0;
          left: 0;
          z-index: 999;
          box-shadow: 0px 4px 4px rgb(0 0 0 / 7%);
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
          color: #25282b;
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

        .menu__item a:hover {
          color: #0bbee7;
          text-decoration: none;
        }
        .triangle-relative {
          position: relative;
        }
      `}</style>
    </>
  );
};

export default Menu;
