import Head from "next/head";
import Menu from "../../../src/components/menu";
import Footer from "../../../src/components/footer";
const NewsBlogDetail = () => {
  return (
    <>
      <Head>
        <title>Bài viết chi tiết</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="container">
        <div className="header-detail">
          <div className="box-icont">
            <div className="icont">
              <img src="../assets/icon/fb-black.png" />
            </div>
            <div className="icont">
              <img src="../assets/icon/in-black.png" />
            </div>
            <div className="icont">
              <img src="../assets/icon/dinh-kem.png" />
            </div>
          </div>
          <div className="box-content">
            <h1 className="title-news-detail">Khoá đào tạo Mầm non React</h1>
            <img
              src="../assets/icon/logo-react-plus2.png"
              width="36px"
              height="36px"
            />
            <p className="title2-news-detail">
              React Plus Corp <br />
              August 3, 2021
            </p>
          </div>
        </div>

        <div className="image-page">
          <img src="../assets/images/banner.png" width="100%" height="100%" />
        </div>
      </div>

      <div className="container-content">
        <p className="content-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitatio
        </p>
        <img
          src="../assets/icon/Group2101.png"
          width="63.3px"
          height="13.1px"
          className="icont-image"
        />
        <div className="marginTop" />
        <h4 className="text-title-content"> Nội dung</h4>
        <div className="text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <img src="../assets/images/img42.png" width="100%" />
        <div className="marginTop" />
        <img
          src="../assets/icon/Group2101.png"
          width="63.3px"
          height="13.1px"
          className="icont-image"
        />
      </div>

      <div className="event-is-happening">
        <div className="container">
          <h3 className="title0">Tin liên quan</h3>
          <div className="list-posts">
            <div className="post-item">
              <img
                src="../assets/images/img39.png"
                height={"193px"}
                width={"340px"}
              />
              <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
              <a href="" className="post-title">
                Khoá đào tạo mầm non React{" "}
              </a>
            </div>

            <div className="post-item">
              <img
                src="../assets/images/img40.png"
                height={"193px"}
                width={"340px"}
              />
              <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
              <a href="" className="post-title">
                Talkshow: Ứng dụng React trong ABC giúp cho BCD{" "}
              </a>
            </div>

            <div className="post-item">
              <img
                src="../assets/images/img41.png"
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
      </div>

      <div className="marginTop" />
      <Footer />

      <style jsx>{`
        .header-detail {
          width: 904px;
          display: flex;
          margin: 50px auto;
        }
        .box-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .box-icont {
          width: 150px;
        }
        .icont {
          width: 32px;
          height: 32px;
          border: 1px solid #ebebeb;
          box-sizing: border-box;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4px 0;
          cursor: pointer;
        }
        .title-news-detail {
          font-weight: 600;
          font-size: 28px;
          line-height: 28px;
          color: #25282b;
          margin: 20px 0;
        }
        .title2-news-detail {
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: #a0a4a8;
          margin: 20px 0;
        }
        .image-page {
          width: 904px;
          height: 360px;
          margin: auto;
          overflow: hidden;
        }
        .marginTop {
          margin-top: 70px;
        }
        .container-content {
          width: 600px;
          margin: 0 auto;
        }
        .content-1 {
          margin-top: 40px;
          font-style: italic;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .text-title-content {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .text-content {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #25282b;
          margin: 20px 0;
        }
        .icont-image {
          display: block;
          margin: 0 auto;
        }
        .title0 {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
          padding-left: 10px;
          margin: 10px 0;
        }
        .event-is-happening {
          width: 100%;
          background: #f4f6fa;
          margin: 20px 0;
          height: 424px;
          padding: 42px;
          box-sizing: border-box;
        }
        .list-posts {
          display: flex;
          justify-content: space-between;
        }

        .content-review-date {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #a0a4a8;
          margin-top: 10px;
        }
        .content-review-title {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #ffffff;
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
      `}</style>
    </>
  );
};

export default NewsBlogDetail;
