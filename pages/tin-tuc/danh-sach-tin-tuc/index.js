import Footer from "../../../src/components/footer";
import Head from "next/head";
import Menu from "../../../src/components/menu";
import { useRouter } from "next/router";

const DanhSachTinTuc = () => {
  const router = useRouter();
  const handleDetail = () => router.push("/tuyen-dung/thong-tin-chi-tiet-form");
  return (
    <>
      <Head>
        <title>Danh sách tin tức</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <div className="container">
        <div className="header">
          <h3 className="header-title">Tin tức</h3>
          <div className="box-back">
            <div className="btn-back">
              <img
                src="../assets/icon/arrow-sm-right4.png"
                width={24}
                height={24}
              />
            </div>
            <p className="btn-back-text"> Quay lại</p>
          </div>
        </div>

        <div className="list-posts">
          <div className="list-posts-item">
            <img
              src="../assets/images/img27.png"
              height={"193px"}
              width={"340px"}
            />
            <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
            <a href="" className="post-title">
              Khoá đào tạo mầm non React{" "}
            </a>
          </div>

          <div className="list-posts-item">
            <img
              src="../assets/images/img28.png"
              height={"193px"}
              width={"340px"}
            />
            <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
            <a href="" className="post-title">
              Talkshow: Ứng dụng React trong ABC giúp cho BCD{" "}
            </a>
          </div>

          <div className="list-posts-item">
            <img
              src="../assets/images/img29.png"
              height={"193px"}
              width={"340px"}
            />
            <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
            <a href="" className="post-title">
              Khoá đào tạo mầm non React{" "}
            </a>
          </div>
        </div>
        <button className="btnmorefull">
          <span>Tải thêm ...</span>
        </button>
      </div>
      <div className="margin" />
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        .header {
          height: auto;
          border-bottom: 1px solid #ebebeb;
          margin-bottom: 20px;
        }

        .header-title {
          font-weight: 600;
          font-size: 36px;
          line-height: 28px;
          margin-top: 10px;
          color: #25282b;
          text-align: center;
        }
        .box-back {
          display: flex;
        }

        .btn-back {
          background-color: #f4f6fa;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          cursor: pointer;
        }
        .btn-back-text {
          font-weight: 600;
          font-size: 12px;
          margin-left: 10px;
          line-height: 24px;
          color: #25282b;
        }
        .btnmorefull {
          width: 239px;
          height: 43px;
          display: block;
          margin: 20px auto 0  auto;
          box-sizing: border-box;
          border-radius: 44px;
          background: #0bbee7;
          border: none;
          transition: 0.5s;
        }
        .btnmorefull:hover {
          background: #03a3c8;
        }
        .btnmorefull span {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        footer {
          padding-top: 38px;
          padding-bottom: 10px;
          background: #f4f6fa;
        }

        .content-review-date {
          font-size: 13px;
          line-height: 19px;
          margin-top: 12px;
          letter-spacing: -0.02em;
          color: #a0a4a8;
        }
        .list-posts-item {
          width: 340px;
        }
        .list-posts {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .post-title {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #25282b;
          text-decoration: none;
        }
        .post-title:hover {
          color: #0bbee7;
        }
        .margin {
          height: 80px;
        }

        @media screen and (max-width: 768px) {
          .banner img {
            height: 110px !important;
          }
          .list-posts {
            overflow-x: scroll;
          }
          .list-posts-item {
            margin-right: 20px;
          }
          .center {
            width: auto;
          }
          .banner img {
            height: auto !important;
          }
          .banner {
            height: auto;
          }
          .content-review {
            position: unset;
            padding: 19px;
            background: linear-gradient(
              360deg,
              #f4f6fa 0%,
              rgba(244, 246, 250, 0) 83.85%
            );
          }
          .content-review-title {
            font-size: 20px;
            line-height: 28px;
            color: #25282b;
          }
        }
      `}</style>
    </>
  );
};

export default DanhSachTinTuc;
