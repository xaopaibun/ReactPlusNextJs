import Footer from "../../src/components/footer";
import Head from "next/head";
import Menu from "../../src/components/menu";
import { useRouter } from "next/router";

const News = () => {
  const router = useRouter();
  const handleDetail = () => router.push("/tuyen-dung/thong-tin-chi-tiet-form");
  const handleViewAllNews = () => router.push("/tin-tuc/danh-sach-tin-tuc");
  return (
    <>
      <Head>
        <title>Tin tức & blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="banner">
        <img
          src="./assets/images/React-news.png"
          height={"100%"}
          width={"100%"}
        />
        <div className="content-review">
          <div className="center">
            <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
            <h2 className="content-review-title">
              Talkshow: Ứng dụng React trong ABC giúp cho BCD{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <div className="borderblue"></div>
            <h2 className="header-title">Tin tức</h2>
          </div>
          <div className="header-right" onClick={handleViewAllNews}>
            <span className="text-xemthem">Xem thêm</span>
            <img
              src="./assets/icon/arrow-sm-right-blue.png"
              height={"24px"}
              width={"24px"}
            />
          </div>
        </div>
        <div className="list-posts">
          <div className="list-posts-item">
            <img
              src="./assets/images/img27.png"
              height={"193px"}
              width={"340px"}
            />
            <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
            <a href="" className="post-title" onClick={handleDetail}>
              Khoá đào tạo mầm non React{" "}
            </a>
          </div>

          <div className="list-posts-item">
            <img
              src="./assets/images/img28.png"
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
              src="./assets/images/img29.png"
              height={"193px"}
              width={"340px"}
            />
            <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
            <a href="" className="post-title">
              Khoá đào tạo mầm non React{" "}
            </a>
          </div>
        </div>
        <div className="margin" />
        <div className="header">
          <div className="header-left">
            <div className="borderblue"></div>
            <h2 className="header-title">Blog</h2>
          </div>
          <div className="header-right">
            <span className="text-xemthem">Xem thêm</span>
            <img
              src="./assets/icon/arrow-sm-right-blue.png"
              height={"24px"}
              width={"24px"}
            />
          </div>
        </div>
        <div className="list-posts">
          <div className="list-posts-item">
            <img
              src="./assets/images/img30.png"
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
              src="./assets/images/img31.png"
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
              src="./assets/images/img32.png"
              height={"193px"}
              width={"340px"}
            />
            <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
            <a href="" className="post-title">
              Khoá đào tạo mầm non React{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="margin" />
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        footer {
          padding-top: 38px;
          padding-bottom: 10px;
          background: #f4f6fa;
        }
        .container {
          margin-top: 30px;
        }
        .banner {
          height: 430px;
          width: 100%;
          position: relative;
        }
        .content-review {
          position: absolute;
          width: 100%;
          bottom: 0px;
          left: 0;
          z-index: 10;
        }
        .header {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }
        .center {
          width: 997px;
          height: auto;
          margin: 0 auto;
        }
        .content-review-date {
          font-size: 13px;
          line-height: 19px;
          margin-top: 12px;
          letter-spacing: -0.02em;
          color: #a0a4a8;
        }
        .content-review-title {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .list-posts {
          display: flex;
          justify-content: space-between;
        }
        .borderblue {
          width: 5px;
          height: 32px;
          background: #0bbee7;
          margin-right: 20px;
        }
        .text-xemthem {
          font-size: 14px;
          line-height: 135.4%;
          display: flex;
          align-items: center;
          color: #0bbee7;
          margin-right: 10px;
        }
        .header-left,
        .header-right {
          display: flex;
          align-items: center;
        }
        .header-right{
          cursor: pointer;
        }
        .header-title {
          font-weight: 600;
          font-size: 24px;
          line-height: 135.4%;
          color: #000000;
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

export default News;
