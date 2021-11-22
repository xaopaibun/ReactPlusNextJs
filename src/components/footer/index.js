import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footer_itemlogo">
            <img
              src="../assets/images/LogoReactPlus.png"
              width="89px"
              height="46px"
              alt="Logo"
            />
            <p>
              Tầng 7, Golden Field Building,
              <br /> 24 Nguyễn Cơ Thạch, Nam Từ Liêm, Hà Nội
            </p>
          </div>
          <div className="footer-right">
            <div className="footer_item">
              <p className="item__title">Cộng đồng</p>
              <Link href="/cac-khoa-dao-tao">
                <a>Đào tạo &amp; Sự kiện</a>
              </Link>
              <Link href="/vi-cong-dong">
                <a>Vì cộng đồng</a>
              </Link>
              <Link href="/tin-tuc">
                <a>Tin tức &amp; Blog</a>
              </Link>
            </div>
            <div className="footer_item">
              <p className="item__title">Công ty</p>
              <Link href="/gioi-thieu/gioi-thieu-react">
                <a>Giới thiệu</a>
              </Link>
              <Link href="/van-hoa">
                <a>Văn hoá</a>
              </Link>
              <Link href="/tuyen-dung">
                <a>Tuyển dụng</a>
              </Link>
            </div>
            <div className="footer_item">
              <p className="item__title">Liên hệ</p>
              <a tel={"0349177306"}>
                <img
                  src="../assets/icon/phone.png"
                  style={{ marginRight: "5px" }}
                  width="13.33px"
                  height="13.33px"
                  alt="phone"
                />
                0349177306
              </a>
              <a href="#">
                <img
                  src="../assets/icon/mail.png"
                  style={{ marginRight: "5px" }}
                  width="16px"
                  height="13.33px"
                  alt="mail"
                />
                contact@reactplus.jp
              </a>
            </div>
            <div className="footer_item">
              <p className="item__title">Kết nối với chúng tôi</p>
              <div className="connect">
                <a href="https://www.facebook.com/reactplus.jsc">
                  <img
                    src="../assets/icon/facebook.png"
                    style={{ marginRight: "5px" }}
                    width="32.24px"
                    height="32.24px"
                    alt="facebook"
                  />
                </a>
                <a href="#">
                  <img
                    src="../assets/icon/Instagram.png"
                    style={{ marginRight: "5px" }}
                    width="32.24px"
                    height="32.24px"
                    alt="Instagram"
                  />
                </a>
                <a href="#">
                  <img
                    src="../assets/icon/youtube.png"
                    style={{ marginRight: "5px" }}
                    width="32.24px"
                    height="32.24px"
                    alt="youtube"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="copy-right">
          © React Plus, JSC 2021. All rights reserved.
        </p>
      </div>
      <style jsx>{`
        .footer {
          height: 170px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #f0f0f0;
        }
        .footer_itemlogo {
          width: 40%;
        }
        .footer-right {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
        .footer_item {
          width: 22%;
        }
        .footer_item .item__title {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;

          letter-spacing: -0.02em;

          color: #25282b;
        }
        .footer_item a {
          text-decoration: none;
          display: block;
          height: 30px;
          font-size: 13px;
          margin: 9.5px 0;
          line-height: 20px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .footer_item:nth-child(4) {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .footer_item a:hover {
          color: #0bbee7;
          text-decoration: none;
        }
        .footer_itemlogo {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .footer_itemlogo p {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          margin-bottom: 35px;
          color: #000000;
        }

        .footer_item .connect {
          display: flex;
          margin: 0 13px;
        }
        .copy-right {
          font-size: 11px;
          line-height: 16px;
          letter-spacing: -0.02em;
          margin: 15px 0;
          color: #000000;
        }
        @media screen and (max-width: 768px) {
          .footer {
            display: block;
            height: auto;
            margin: 16px 0;
          }
          .footer_itemlogo {
            width: 100%;
          }
          .footer_itemlogo p {
            margin: 10px 0;
          }
          .footer_itemlogo p br {
            display: block;
          }
          .footer_item a {
            font-size: 12.23px;
          }
          .footer-right {
            flex-wrap: wrap;
          }

          .footer_item {
            width: 50%;
            margin: 10px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
