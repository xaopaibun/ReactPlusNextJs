import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import { useScroll } from "../../hooks/useScroll";

const Menu = ({ isColor }) => {
  const router = useRouter();

  const [isClose, setIsClose] = useState(false);

  const { data } = useScroll();
  // style={{boxShadow:  data > 0 ? '0px 4px 4px rgb(0 0 0 / 7%)': 'none'}}
  return (
    <>
      <div className="box-menu">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-3 col-4 text-center">
              <Link href="/">
                <a>
                  <img
                    src="/assets/images/LogoReactPlus.png"
                    alt="Logo"
                    style={{ marginLeft: "-30px" }}
                  />
                </a>
              </Link>
            </div>
            <div className="col-xl-9 col-sm-9 col-8">
              <div className="menu-reponsive">
                <div className="btn-menu" onClick={() => setIsClose(!isClose)}>
                  {!isClose ? (
                    <img src="/assets/icon/menu-3.1.png" alt="Open" />
                  ) : (
                    <img
                      src="/assets/icon/X.png"
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
                    <a>
                      {" "}
                      Trang chủ
                      <div
                        className={router.pathname == "/" ? "active" : ""}
                      ></div>
                    </a>
                  </Link>
                </li>
                <li className="menu__item">
                  {/* <Link href="/gioi-thieu"> */}
                  <a>
                    Giới thiệu
                    <img
                      src="/assets/icon/drop-down-icont.png"
                      width="6px"
                      height="4.98px"
                      style={{ marginLeft: "3px" }}
                      alt=""
                    />
                  </a>
                  <div
                    className={
                      router.pathname == "/gioi-thieu/gioi-thieu-cong-ty" ||
                      router.pathname == "/gioi-thieu/gioi-thieu-react"
                        ? "active"
                        : ""
                    }
                  />
                  <div className="drop-down">
                    <div className="box-center">
                      <Link href="/gioi-thieu/gioi-thieu-react">
                        <a
                          className={
                            router.pathname == "/gioi-thieu/gioi-thieu-react"
                              ? "active_while"
                              : ""
                          }
                        >
                          Về React & React Native{" "}
                        </a>
                      </Link>
                      <Link href="/gioi-thieu/gioi-thieu-cong-ty">
                        <a
                          className={
                            router.pathname == "/gioi-thieu/gioi-thieu-cong-ty"
                              ? "active_while"
                              : ""
                          }
                        >
                          {" "}
                          Công ty React Plus{" "}
                        </a>
                      </Link>
                      <div className="triangle" />
                    </div>
                  </div>
                  {/* </Link> */}
                </li>
                <li className="menu__item">
                  <Link href="/van-hoa">
                    <a>Văn hóa </a>
                  </Link>
                  <div
                    className={router.pathname == "/van-hoa" ? "active" : ""}
                  />
                </li>
                <li className="menu__item">
                  <Link href="/tuyen-dung">
                    <a>Tuyển dụng</a>
                  </Link>
                  <div
                    className={
                      router.pathname == "/tuyen-dung" ||
                      router.pathname ==
                        "/tuyen-dung/dang-ky-ung-vien-tiem-nang" ||
                      router.pathname === `/tuyen-dung/chi-tiet-form/[slug]` ||
                      router.pathname === `/tuyen-dung/form-tuyen-dung/[slug]`
                        ? "active"
                        : ""
                    }
                  />
                </li>
                <li className="menu__item">
                  {/* <Link href="/daotao-sukien"> */}
                  <a>
                    Đào tạo &amp; Sự kiện
                    <img
                      src="/assets/icon/drop-down-icont.png"
                      width="6px"
                      height="4.98px"
                      style={{ marginLeft: "3px" }}
                      alt=""
                    />
                  </a>
                  <div
                    className={
                      router.pathname == "/dao-tao-su-kien/su-kien-thuong-ky" ||
                      router.pathname ==
                        "/dao-tao-su-kien/form-tham-gia-su-kien" ||
                      router.pathname == "/dao-tao-su-kien/cac-khoa-dao-tao" ||
                      router.pathname ==
                        "/dao-tao-su-kien/dang-ky-tham-gia-khoa-hoc"
                        ? "active"
                        : ""
                    }
                  />
                  <div className="drop-down">
                    <div className="box-center2">
                      <Link href="/dao-tao-su-kien/cac-khoa-dao-tao">
                        <a
                          className={
                            router.pathname ==
                            "/dao-tao-su-kien/cac-khoa-dao-tao"
                              ? "active_while"
                              : ""
                          }
                        >
                          Các khoá đào tạo{" "}
                        </a>
                      </Link>

                      <Link href="/dao-tao-su-kien/su-kien-thuong-ky">
                        <a
                          className={
                            router.pathname ==
                            "/dao-tao-su-kien/su-kien-thuong-ky"
                              ? "active_while"
                              : ""
                          }
                        >
                          Sự kiện thường kỳ
                        </a>
                      </Link>

                      <div className="triangle" />
                    </div>
                  </div>
                  {/* </Link> */}
                </li>
                <li className="menu__item">
                  <Link href="/vi-cong-dong">
                    <a>Vì cộng đồng</a>
                  </Link>
                  <div
                    className={
                      router.pathname == "/vi-cong-dong" ? "active" : ""
                    }
                  />
                </li>
                <li className="menu__item">
                  <Link href="/tin-tuc">
                    <a>Tin tức &amp; Blog</a>
                  </Link>
                  <div
                    className={
                      router.pathname == "/tin-tuc" ||
                      router.pathname == "/tin-tuc/danh-sach-tin-tuc" ||
                      router.pathname == "/tin-tuc/danh-sach-blog" ||
                      router.pathname == "/tin-tuc/[slug]"
                        ? "active"
                        : ""
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="box-menu-reponsive">
        <Link href="/">
          <a
            className={
              router.pathname == "/"
                ? "menu-reponsive-item menu-reponsive-item-active"
                : "menu-reponsive-item"
            }
          >
            Trang chủ
          </a>
        </Link>
        <a
          className="menu-reponsive-item"
          className={
            router.pathname == "/gioi-thieu/gioi-thieu-react" ||
            router.pathname == "/gioi-thieu/gioi-thieu-cong-ty"
              ? "menu-reponsive-item menu-reponsive-item-active"
              : "menu-reponsive-item"
          }
        >
          Giới thiệu
        </a>
        <Link href="/gioi-thieu/gioi-thieu-react">
          <a
            className={
              router.pathname == "/gioi-thieu/gioi-thieu-react"
                ? "menu-reponsive-item-category menu-reponsive-item-active"
                : "menu-reponsive-item-category"
            }
          >
            Về React & React Native
          </a>
        </Link>
        <Link href="/gioi-thieu/gioi-thieu-cong-ty">
          <a className="menu-reponsive-item-category">Công ty React Plus</a>
        </Link>
        <Link href="/van-hoa">
          <a
            className={
              router.pathname == "/van-hoa"
                ? "menu-reponsive-item menu-reponsive-item-active"
                : "menu-reponsive-item"
            }
          >
            Văn hóa{" "}
          </a>
        </Link>
        <Link href="/tuyen-dung">
          <a
            className={
              router.pathname == "/tuyen-dung" ||
              router.pathname == "/tuyen-dung/dang-ky-ung-vien-tiem-nang" ||
              router.pathname === `/tuyen-dung/chi-tiet-form/[slug]` ||
              router.pathname === `/tuyen-dung/form-tuyen-dung/[slug]`
                ? "menu-reponsive-item menu-reponsive-item-active"
                : "menu-reponsive-item"
            }
          >
            Tuyển dụng
          </a>
        </Link>
        <a
          className={
            router.pathname == "/dao-tao-su-kien/su-kien-thuong-ky" ||
            router.pathname == "/dao-tao-su-kien/form-tham-gia-su-kien" ||
            router.pathname == "/dao-tao-su-kien/cac-khoa-dao-tao" ||
            router.pathname == "/dao-tao-su-kien/dang-ky-tham-gia-khoa-hoc"
              ? "menu-reponsive-item menu-reponsive-item-active"
              : "menu-reponsive-item"
          }
        >
          Đào tạo & Sự kiện
        </a>
        <Link href="/dao-tao-su-kien/cac-khoa-dao-tao">
          <a className="menu-reponsive-item-category">Các khoá đào tạo</a>
        </Link>
        <Link href="/dao-tao-su-kien/su-kien-thuong-ky">
          <a className="menu-reponsive-item-category">Sự kiện thường kỳ</a>
        </Link>
        <Link href="/vi-cong-dong">
          <a
            className={
              router.pathname == "/vi-cong-dong"
                ? "menu-reponsive-item menu-reponsive-item-active"
                : "menu-reponsive-item"
            }
          >
            Vì cộng đồng
          </a>
        </Link>
        <Link href="/tin-tuc">
          <a
            className={
              router.pathname == "/tin-tuc" ||
              router.pathname == "/tin-tuc/danh-sach-tin-tuc" ||
              router.pathname == "/tin-tuc/danh-sach-blog" ||
              router.pathname == "/tin-tuc/[slug]"
                ? "menu-reponsive-item menu-reponsive-item-active"
                : "menu-reponsive-item"
            }
          >
            Tin tức & Blog
          </a>
        </Link>
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
          padding-top: 18px;
          height: 76px;
          box-sizing: border-box;
          position: sticky;
          background-color: ${isColor && data === 0
            ? "transparent"
            : "#ffffff"};
          top: 0;
          left: 0;
          z-index: 1020;
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
          height: 50px;
          width: auto;
        }
        .menu__item .drop-down {
          display: none;
        }
        .menu__item:hover .drop-down {
          background-color: #00c6e8;
          height: 48px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 76px;
          left: 0;
          z-index: 999;
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
          left: 80px;
        }
        .box-center2 {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .box-center2::before {
          content: "";
          height: 15px;
          width: 15px;
          background-color: #00c6e8;
          transform: rotate(45deg);
          position: absolute;
          top: -2px;
          right: -80px;
        }

        .active {
          height: 3px;
          margin: 10px auto 0 auto;
          width: 64px;
          background-image: url("/assets/icon/menu-active.png");
        }
        .active_while {
          border-bottom: 1.5px solid #ffffff;
        }
        .box-active-while {
          height: 3px;
          margin: 10px auto 0 auto;
          width: 64px;
          background-color: "#FFFFFF";
          border-radius: 5px 5px 0 0;
        }
        .menu__item a {
          color: ${isColor && data === 0 ? "#ffffff" : "#25282b"};
          font-weight: 500;
          letter-spacing: -0.02em;
          font-size: 13px;
          font-weight: 500;
          display: block;
          text-align: center;
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
        .drop-down a:hover {
          color: #ffffff;
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
            height: 60px;
            padding-top: 10px;
            background-color: #ffffff;
            transform: ${!isClose ? `none` : `translateX(-80%)`};
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
            position: fixed;
            top: 0;
            right: ${!isClose ? `-80%` : `0`};

            z-index: 999999999999999999999;
            height: 100vh;
            background-color: #f4f6fa;
            padding: 38px;
          }
          .menu-reponsive-item {
            font-weight: 600;
            display: block;
            font-size: 18px;
            text-decoration: none;
            line-height: 27px;
            letter-spacing: -0.02em;
            color: #25282b;
            margin: 28px 0;
          }
          .menu-reponsive-item:hover {
            color: #0bbee7;
          }
          .menu-reponsive-item-active {
            color: #0bbee7;
          }
          .menu-reponsive-item-category {
            display: block;
            font-weight: 500;
            text-decoration: none;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: -0.02em;
            margin: 12px 20px;
            color: #52575c;
          }
        }
      `}</style>

      <style jsx global>{`
        .main {
          transform: ${!isClose ? `none` : `translateX(-80%)`};
        }
        body{
          overflow-y: ${!isClose ? `none` : `hidden`};
        }
       
        }
      `}</style>
    </>
  );
};

export default Menu;
