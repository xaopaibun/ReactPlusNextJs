import Footer from "../../../src/components/footer";
import Head from "next/head";
import Menu from "../../../src/components/menu";
import { ListExperts } from "../../../src/config";

const RegularEvent = () => {
  return (
    <>
      <Head>
        <title>Các sự kiện thường kỳ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="image-page">
        <img
          src="../assets/images/Khoa-Dao-Tao-React-Plus.png"
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="container">
        <div className="list-events">
          <div className="event-item">
            <h5 className="content-review-date text-center">
              01/10/2021 - 28/11/2021
            </h5>
            <div className="position-relative">
              <img
                src="../assets/icon/BorderSolid.png"
                width="100%"
                height="1px"
              />
              <div className="box-circle">
                <div className="circle"></div>
              </div>
            </div>
            <h2 className="event-item-title">Talkshow</h2>
            <p className="event-item-content">
              Tương lai của React trên thị trường Việt Nam và quốc tế
            </p>
          </div>

          <div className="event-item">
            <h5 className="content-review-date text-center text-active">
              01/10/2021 - 28/11/2021
            </h5>
            <div className="position-relative">
              <img
                src="../assets/icon/BorderSolid.png"
                width="100%"
                height="1px"
              />
              <div className="box-circle">
                <div className="circle circle-active"></div>
              </div>
            </div>
            <h2 className="event-item-title">Talkshow</h2>
            <p className="event-item-content">
              Tương lai của React trên thị trường Việt Nam và quốc tế
            </p>
          </div>

          <div className="event-item">
            <h5 className="content-review-date text-center">
              01/10/2021 - 28/11/2021
            </h5>
            <div className="position-relative">
              <img
                src="../assets/icon/BorderSolid.png"
                width="100%"
                height="1px"
              />
              <div className="box-circle">
                <div className="circle"></div>
              </div>
            </div>
            <h2 className="event-item-title">Talkshow</h2>
            <p className="event-item-content">
              Tương lai của React trên thị trường Việt Nam và quốc tế
            </p>
          </div>


        </div>
      </div>

      <div className="container center-content">
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
          <div className="address">
            <span className="address-text">
              <img src="../assets/icon/dinhvi-blue.png" className="img-icont" />
              React Plus HQ, Cầu Giấy, Hà Nội
            </span>
            <span className="address-text">
              <img src="../assets/icon/time.png" className="img-icont" />
              06 Mar 2020 00:00 - 08 Mar 2020 00:00
            </span>
          </div>
          <h2 className="title-page">Khoá đào tạo Mầm non React</h2>
          <img
            src="../assets/images/Khoa-Dao-Tao-React-Plus.png"
            width={"100%"}
            height={"294px"}
          />
          <h3 className="title">Nội dung sự kiện</h3>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
          <h3 className="title">Diễn giả</h3>
          <div className="box-team-of-experts">
            {ListExperts &&
              ListExperts.map((val) => (
                <div className="item-experts" key={val._id}>
                  <div className="item__img">
                    <img
                      width="110px"
                      height="110px"
                      style={{ borderRadius: "50%" }}
                      src={"../assets/images/" + val.avatar}
                      alt={val.fullname}
                    />
                  </div>
                  <div className="item__content">
                    <h3 className="name-experts">{val.fullname}</h3>
                    <p className="content-experts">
                      Chuyên về React &amp; React Native <br />
                      Sẵn sàng 24/7 <br />
                      Đẳng cấp thế giới <br />
                      Khả năng tăng trưởng, mở rộng nhanh <br />
                      Phản hồi ngay lập tức <br />
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <button className="btnJoin">
            <span>Đăng ký tham gia</span>
          </button>
        </div>
        <div className="box-icon"></div>
      </div>

      <div className="event-is-happening">
        <div className="container">
          <h3 className="title0">Các sự kiện đang diễn ra</h3>
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

      <Footer />
      <style jsx>{`
        .image-page {
          height: 430px;
          width: 100%;
        }
        .box-circle {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 999;
        }
        .circle {
          margin-top: 2px;
          width: 20px;
          height: 20px;
          background: #d2d1d1;
          border: 2px solid #ffffff;
          box-sizing: border-box;
          border-radius: 50%;
          margin: 3px auto;
        }
        .circle-active {
          background: #0BBEE7;
          
        }
        .text-active{
            color: #0BBEE7 !important;
            font-weight: 600;
        }
        .list-events {
          margin-top: -50px;
          padding-top: 70px;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 268px;
          background: #ffffff;
          box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.05);
        }
        .event-item-title {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .event-item-content {
          font-size: 13px;
          line-height: 18px;
          text-align: center;
          width: 225px;
          margin: auto;
          letter-spacing: -0.02em;
          color: #52575c;
        }
        .event-item {
          height: 100%;
        }
        .center-content {
          display: flex;
          margin: 50px auto;
        }
        .box-icont {
          width: 150px;
        }
        .box-content {
          width: 741px;
        }
        .title-page {
          font-weight: 600;
          font-size: 28px;
          line-height: 28px;
          color: #25282b;
          margin: 20px 0;
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
        .title {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
          padding-left: 10px;
          margin: 10px 0;
          border-left: 4px solid #0bbee7;
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
        .text {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .img-icont {
          margin-right: 10px;
        }
        .address-text {
          font-size: 13px;
          line-height: 19px;
          color: #25282b;
          margin-right: 30px;
        }
        .box-team-of-experts {
          display: flex;
          flex-wrap: wrap;
          margin: 30px 0;
        }
        .title_teaching_staff {
          font-weight: 600;
          font-size: 28px;
          line-height: 42px;
          letter-spacing: -0.02em;
          text-align: center;
          font-size: 32px;
        }
        .item-experts {
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .box-team-of-experts .item-experts .item__img {
          width: 184px;
          height: 184px;
          background-image: url(/assets/images/Frame.png);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .name-experts {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .content-experts {
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .btnJoin {
          width: 252px;
          height: 46px;
          box-sizing: border-box;
          border-radius: 40px;
          background: #0bbee7;
          border: none;
          display: block;
          margin: 0 auto;
          transition: 0.5s;
        }
        .btnJoin span {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .btnJoin:hover {
          background: #03a3c8;
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

export default RegularEvent;
