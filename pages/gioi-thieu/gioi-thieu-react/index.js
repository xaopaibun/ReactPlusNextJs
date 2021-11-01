import Footer from "../../../src/components/footer";
import Head from "next/head";
import Menu from "../../../src/components/menu";
import { ListQuestion } from "../../../src/config";
import { useState } from "react";

const IntroduceReact = () => {
  return (
    <>
      <Head>
        <title>Giới thiệu React Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="main-page">
        <div className="container backgroudReact">
          <div className="box_introduce">
            <div className="introduce__left">
              <img src="../assets/icon/Group2101.png" alt="" />
              <h1>
                React Plus <br />
                Công ty chuyên về React lớn nhất tại Việt nam
              </h1>
              <p>
                React (React.js) là thư viện Javascript để xây dựng UI vượt
                trội, được phát triển bởi Facebook. React Native là framework
                xây dựng ứng dụng di động native. Với React Native, chỉ cần 1
                ngôn ngữ Javascript duy nhất để xây dựng ứng dụng iOS và
                Android. <br />
                Hiện nay, React &amp; React Native đang được Facebook đầu tư
                phát triển mạnh với những cập nhật liên tục, nó còn được hỗ trợ
                bởi sự đóng góp từ các cá nhân và công ty trên khắp thế giới như
                Callstack, Expo, Infinite Red, Microsoft và Software Mansion.
              </p>
            </div>
            <div className="introduce__right">
              <img src="../assets/images/GioiThieu.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box-introduce-react-content">
          <div className="container">
            <div className="introduce-item">
              <div className="item-image">
                <img
                  src="../assets/images/img43.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <div className="item-content">
                <h2 className="item-content-title">Sức mạnh không giới hạn</h2>
                <p className="item-content-text">
                  Chỉ cần sử dụng Javascript, bạn có thể hô mưa gọi gió trên mọi
                  mặt trận: web, desktop, server và đặc biệt là mobile. Điều này
                  giúp một developer trở nên đa năng và độc lập, đảm bảo công
                  việc được thống nhất và giúp dự án được rút gọn đi nhiều lần.
                </p>
              </div>
            </div>

            <div className="introduce-item-reverse">
              <div className="item-content">
                <h2 className="item-content-title">
                  Tương lai của ứng dụng di động
                </h2>
                <p className="item-content-text">
                  Với hơn 98.000 sao trên Github và số lượng contributors cao
                  thứ 2 trên toàn thế giới (2018), React Native chính là xu
                  hướng hàng đầu của các nhà phát triển trong tương lai.
                  <br />
                  Sức mạnh vượt trội và khả năng ứng dụng không giới hạn của nó
                  đã thu hút những khách hàng lớn trong mọi lĩnh vực và khiến họ
                  ưu tiên lựa chọn các công ty chuyên về React để thực hiện dự
                  án.
                </p>
              </div>
              <div className="item-image">
                <img
                  src="../assets/images/img44.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            </div>

            <div className="introduce-item-reverse-reponsive">
              <div className="item-image">
                <img
                  src="../assets/images/img44.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <div className="item-content">
                <h2 className="item-content-title">
                  Tương lai của ứng dụng di động
                </h2>
                <p className="item-content-text">
                  Với hơn 98.000 sao trên Github và số lượng contributors cao
                  thứ 2 trên toàn thế giới (2018), React Native chính là xu
                  hướng hàng đầu của các nhà phát triển trong tương lai.
                  <br />
                  Sức mạnh vượt trội và khả năng ứng dụng không giới hạn của nó
                  đã thu hút những khách hàng lớn trong mọi lĩnh vực và khiến họ
                  ưu tiên lựa chọn các công ty chuyên về React để thực hiện dự
                  án.
                </p>
              </div>
            </div>

            <div className="introduce-item">
              <div className="item-image">
                <img
                  src="../assets/images/img45.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <div className="item-content">
                <h2 className="item-content-title">
                  Lợi thế vượt trội của developer khi thành thạo React
                </h2>
                <p className="item-content-text">
                  Chỉ cần sử dụng Javascript, bạn có thể hô mưa gọi gió trên mọi
                  mặt trận: web, desktop, server và đặc biệt là mobile. Điều này
                  giúp một developer trở nên đa năng và độc lập, đảm bảo công
                  việc được thống nhất và giúp dự án được rút gọn đi nhiều lần.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="box-frequently-asked-questions">
          <div className="container flex">
            <div className="asked-questions-left">
              <h2 className="asked-questions-left-title">
                Những câu hỏi thường gặp về công việc React & React Native
              </h2>
              <button className="btnmorefull">
                <span>Tìm hiểu khóa học React miễn phí</span>
                <img
                  className="btnmore__icon"
                  src="../assets/icon/muitenwhite.png"
                />
              </button>
              <img
                src="../assets/images/img46.png"
                width="309px"
                height="241px"
                alt=""
              />
            </div>
            <div className="asked-questions-right">
              {ListQuestion &&
                ListQuestion.map((value) => {
                  const [isActive, setActive] = useState(false);
                  const handleDropDown = () => setActive(!isActive);
                  return (
                    <div className="asked-question-item" key={value._id}>
                      <div
                        className={
                          isActive
                            ? "question-title question-title-active"
                            : "question-title"
                        }
                        onClick={handleDropDown}
                      >
                        <span>{value.title_question}</span>
                        <img
                          src={
                            isActive
                              ? "../assets/icon/drop-down2-active.png"
                              : "../assets/icon/drop-down2.png"
                          }
                          width="8px"
                          height="4px"
                          alt=""
                        />
                      </div>
                      <p
                        className={isActive ? "asked-text" : "asked-text-none"}
                      >
                        {value.asked}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <style jsx>{`
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .backgroudReact {
          background-image: url(/assets/images/ReactPlus2.png);
        }
        .box_introduce {
          margin: 15px 0;
          height: auto;
          width: 100%;
          display: flex;
          margin-top: 60px;
          padding-bottom: 50px;
          justify-content: space-between;
        }

        .introduce__left {
          width: 837px;
        }
        .introduce__left h1 {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
        }
        .introduce__left p {
          width: 662px;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
          color: #52575c;
        }
        .introduce__right {
          width: 211px;
        }
        .box-introduce-react-content {
          width: 100%;
          height: auto;
          padding-top: 70px;
          background-repeat: no-repeat;
          background-image: url(/assets/images/BG-career.png);
        }
        .introduce-item,
        .introduce-item-reverse,
        .introduce-item-reverse-reponsive {
          height: 335px;
          width: 100%;
          margin-bottom: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .introduce-item-reverse-reponsive {
          display: none;
        }
        .item-image {
          height: 335px;
          width: 528px;
        }
        .item-content {
          width: 453px;
          height: auto;
        }
        .item-content-title {
          font-weight: 600;
          font-size: 26px;
          line-height: 39px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .item-content-text {
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
          color: #52575c;
        }
        .box-frequently-asked-questions {
          padding-top: 92px;
          box-sizing: border-box;
          width: 100%;
          min-height: 591px;
          height: auto;
          background-repeat: no-repeat;
          background-image: url(/assets/images/BG-career.png);
          margin-bottom: 70px;
        }

        .asked-questions-left {
          width: 408px;
        }
        .asked-questions-left-title {
          font-weight: 600;
          font-size: 26px;
          line-height: 39px;
          letter-spacing: -0.02em;
          color: #25282b;
          text-align: center;
        }
        .btnmorefull {
          margin: 15px 0;
          width: 281px;
          height: 36px;
          box-sizing: border-box;
          border-radius: 44px;
          background: #0bbee7;
          border: none;
          transition: 0.5s;
        }
        .btnmorefull:hover {
          background: #03a3c8;
        }
        .btnmorefull:hover .btnmore__icon {
          transform: translateX(5px);
          transition: 0.4s;
        }

        .btnmorefull span {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-right: 5px;
        }

        .asked-questions-right {
          width: 580px;
          padding: 32px 42px;
          height: auto;
          background: #ffffff;
          box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.05);
        }
        .asked-question-item {
          border-bottom: 1px solid #efefef;
        }
        .question-title {
          font-weight: 600;
          font-size: 16px;
          line-height: 56px;
          letter-spacing: -0.02em;
          color: #25282b;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .question-title-active {
          color: #0bbee7;
        }
        .asked-text {
          font-size: 14px;
          display: block;
          line-height: 21px;
          letter-spacing: -0.02em;
          color: #52575c;
        }
        .asked-text-none {
          display: none;
        }
        @media screen and (max-width: 768px) {
          .box_introduce {
            display: block;
          }
          .introduce__left {
            width: 100%;
          }
          .introduce__left p {
            width: 100%;
          }
          .introduce__right {
            margin: auto;
          }
          .flex {
            display: block;
          }
          .asked-questions-right {
            width: auto;
            margin: 20px 0;
          }
          .btnmorefull {
            margin: 10px auto;
            display: block;
          }
          .question-title {
            padding: 15px 0;
            line-height: 25px;
          }
          .introduce-item {
            height: auto;
            display: block;
          }
          .item-image {
            height: auto;
            width: 100%;
          }
          .item-content {
            width: 100%;
          }

          .item-content-title {
            font-size: 20px;
            margin-top: 20px;
          }
          .asked-questions-left > img {
            margin: 0 auto;
            display: block;
          }
          .asked-questions-left {
            width: auto;
          }
          .introduce-item-reverse {
            display: none;
          }
          .introduce-item-reverse-reponsive {
            height: auto;
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default IntroduceReact;