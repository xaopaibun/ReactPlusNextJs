
const Menu = () => {
  return (
    <>
      <div className="box-menu">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <img src="./assets/images/LogoReactPlus.png" alt="Logo" />
            </div>
            <div className="col-xl-9">
              <ul className="menu">
                <li className="menu__item">
                  <a href="index.html">Trang chủ</a>
                </li>
                <li className="menu__item">
                  <a href="gioithieu.html">
                    Giới thiệu
                    <img
                      src="./assets/icon/drop-down-icont.png"
                      width="6px"
                      height="4.98px"
                      style={{ marginLeft: "3px" }}
                      alt=""
                    />
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#">Văn hóa </a>
                </li>
                <li className="menu__item">
                  <a href="#">Tuyển dụng</a>
                </li>
                <li className="menu__item">
                  <a href="#">
                    Đào tạo &amp; Sự kiện
                    <img
                      src="./assets/icon/drop-down-icont.png"
                      width="6px"
                      height="4.98px"
                      style={{ marginLeft: "3px" }}
                      alt=""
                    />
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#">Vì cộng đồng</a>
                </li>
                <li className="menu__item">
                  <a href="#">Tin tức &amp; Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box-menu {
          margin: 10px 0;
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

        .menu__item:nth-child(1) {
          border-bottom: 3px solid #00daff;
        }
        li.menu__item:hover {
          border-bottom: 3px solid #00daff;
        }
        .menu__item a {
          color: #25282b;
          font-weight: 500;
          letter-spacing: -0.02em;
          font-size: 13px;
          font-weight: 500;
          display: block;
          text-decoration: none;
          transition: 0.3s;
        }

        .menu__item a:hover {
          color: #0bbee7;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default Menu;
