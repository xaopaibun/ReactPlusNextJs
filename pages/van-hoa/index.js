import Footer from "../../src/components/footer";
import Head from "next/head";
import Menu from "../../src/components/menu";
import {
  Btn_HealthIsGold,
  ListExperts,
  ListImage,
  ListItem,
  SummerFestival,
} from "../../src/config";
import JoinNow from "../../src/components/common/thamgiangay";
import { useState } from "react";
const VanHoa = () => {
  const [isActive, setActive] = useState("1");
  const [isActiveSumber, setActiveSummer] = useState("1");
  return (
    <>
      <Head>
        <title>Văn Hóa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header">
        <Menu isColor={true} />
        <div className="header-text">
          <p className="introduce-text">Giới thiệu</p>
        </div>
      </div>
      <div className="container">
        <div className="backgroudReact">
          <div className="box-village-react">
            <div className="village-react-top">
              <h3 className="village-title">Làng React</h3>
              <p className="village-react-text">
                React Plus là một cái làng, nơi mà anh em tắt lửa tối đèn có
                nhau. Chúng tôi dành nhau những bát mỳ nóng hổi cuối buổi OT,
                bật dậy thả tim cho tin nhắn giữa đêm báo khách ok rồi, bồi hồi
                nhớ lại những buổi đi chơi, tưng bừng mua bán từ đôi giày đến
                cái máy chơi game, và đặc biệt, xúc động nghẹ ngào mỗi lần chia
                thưởng dự án cuối năm...
              </p>
            </div>
          </div>
          <div className="list-images">
            {ListImage &&
              ListImage.map((value, index) => (
                <div
                  className={
                    index % 2 === 0 ? "box-image" : "box-image-marginTop"
                  }
                  key={index}
                >
                  <img
                    src={`./assets/images/${value}`}
                    height={"100%"}
                    width={"100%"}
                    alt="img"
                  />
                </div>
              ))}
            <div className="background-icon"></div>
          </div>
          <div className="distance"></div>

          <p className="Office-Title">VĂN PHÒNG LÀM VIỆC</p>
          <h3 className="Office-TitleContent">
            Không gian làm việc & Trang thiết bị
          </h3>
          <div className="Office-Images">
            <div className="Office-Images-Left">
              <div className="Office-Images-Left-Top">
                <div className="Office-Images-Left-Top-IMG1">
                  <img
                    src="./assets/images/img20.png"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div className="Office-Images-Left-Top-IMG2">
                  <img
                    src="./assets/images/img21.png"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
              </div>
              <div className="Office-Images-Left-Bottom">
                <div className="Office-Images-Left-Bottom-IMG3">
                  <img
                    src="./assets/images/img22.png"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div className="Office-Images-Left-Bottom-IMG4">
                  <img
                    src="./assets/images/img23.png"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
            <div className="Office-Images-Right">
              <img
                src="./assets/images/img24.png"
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Office-Content">
        <div className="container">
          <div className="content">
            <div className="content-left">
              <img
                src="./assets/images/img25.png"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="content-right">
              <h1 className="title">Sức khoẻ là vàng</h1>
              <p className="content-text">
                React Plus quan tâm sâu sắc tới sức khoẻ của từng thành viên, do
                đó, chúng tôi mạnh dạn tổ chức đợt khám sức khoẻ tổng thể hàng
                năm cho tất cả các thành viên. <br /> <br /> Ngoài ra, chúng tôi
                liên tục tổ chức các ngày hội thể thao, thành lập các câu lạc bộ
                và tổ chức các buổi tea-break time hàng ngày giúp cân bằng các
                bó cơ lưng bụng, chống thoái hoá cột sống, tăng dẻo dai cho cơ
                mặt....
              </p>
              <div className="list-btn">
                {Btn_HealthIsGold.map((val) => {
                  return (
                    <div className="box-loadmore" key={val._id}>
                      <button
                        onClick={() => setActive(val._id)}
                        className={
                          isActive === val._id
                            ? "btnmore btnmore-active"
                            : "btnmore"
                        }
                      >
                        <span>{val.text}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-right">
              <h1 className="title">Hội hè - Tập quán</h1>
              <p className="content-text">
                React Plus không chỉ là nơi để đến làm việc, đây là nơi để mọi
                người cùng sống và chia sẻ. Mà cuộc sống, thì không thể nào
                thiếu những chuyến đi: đi du lịch, du xuân, đi thi, đi hội, đi
                ăn, đi chơi, đi ngủ, đi nghỉ, đi khắp nơi cùng nhau... Quan
                trọng nhất là đi đâu thì đi, cứ phải vui cái đã.
                <br />
                <br />
                Sau những đợt chạy dự án dài hơi không thế nào thiếu được những
                bữa liên hoan vui nổ trời. Đặc biệt, làng React quanh năm luôn
                tưng bừng với các thể loại hội hè lễ Tết, giúp các anh chị em
                đầu thôn cuối xóm gắn kết, thật mật cùng nhau.
              </p>
              <div className="list-btn">
                {SummerFestival.map((val) => {
                  return (
                    <div className="box-loadmore" key={val._id}>
                      <button
                        onClick={() => setActiveSummer(val._id)}
                        className={
                          isActiveSumber === val._id
                            ? "btnmore btnmore-active"
                            : "btnmore"
                        }
                      >
                        <span>{val.text}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="content-left">
              <img
                src="./assets/images/img26.png"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h4 className="text-awards">AWARDS</h4>
        <div className="header1">
          <div className="header-left">
            <h2 className="header-title">Giải thưởng nội bộ</h2>
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
        <div className="award-list">
          <div className="award-item">
            <div className="award-item-img">
              <img src="./assets/images/img47" height={"auto"} width={"auto"} />
            </div>
            <div className="award-item-content">
              <h2 className="award-item-content-big">
                Giải thưởng anh hùng lao động nhiều hạng
              </h2>
              <h4 className="award-item-content-smail">
                Cập nhật mới cho phép nhà phát triển làm gì đó đại loại vậy...
              </h4>
            </div>
          </div>
        </div>
      </div>
      <JoinNow />
      <Footer />

      <style jsx>{`
        .header {
          height: 410px;
          width: 100%;
          background-image: url("/assets/images/ReactPlusAnhBia.png");
        }
        .introduce-text {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          text-align: center;
          color: #ffffff;
        }
        .header-text {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -30px;
        }
        .distance {
          width: 100%;
          height: 60px;
        }
        .village-react-top {
          width: 620px;
          height: auto;
          margin: 50px auto;
        }
        .village-title {
          font-weight: 600;
          text-align: center;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .village-react-text {
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .backgroudReact {
          height: auto;
          background-image: url("/assets/images/ReactPlus3.png");
        }
        .list-images {
          display: flex;

          justify-content: center;
          position: relative;
        }
        .background-icon {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 99;
          background-image: url("/assets/icon/BG2.png");
          background-size: contain;
          background-repeat: no-repeat;
        }
        .box-image {
          width: 165px;
          height: 250px;
          margin-right: 24px;
        }
        .box-image-marginTop {
          margin-top: 40px;
          width: 165px;
          height: 250px;
          margin-right: 24px;
        }
        .Office-Title {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: 0.18em;
          color: #0bbee7;
          text-align: center;
        }
        .Office-TitleContent {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #25282b;
          text-align: center;
        }
        .Office-Images {
          display: flex;
          height: 486px;
          width: 1080px;
          margin: 0 auto;
        }
        .Office-Images-Left {
          width: 72.31%;
          height: 100%;
          margin-right: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .Office-Images-Right {
          width: 27.69%;
          height: 100%;
        }
        .Office-Images-Left-Top,
        .Office-Images-Left-Bottom {
          height: calc(100% / 2 - 5px);
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .Office-Images-Left-Top-IMG1 {
          width: 60.3%;
          height: 100%;
        }
        .Office-Images-Left-Top-IMG2 {
          width: 38.3%;
          height: 100%;
        }
        .Office-Images-Left-Bottom-IMG3 {
          width: 48.5%;
          height: 100%;
        }
        .Office-Images-Left-Bottom-IMG4 {
          width: 50.32%;
          height: 100%;
        }
        .Office-Content {
          height: auto;
          margin: 50px 0;
          padding-top: 30px;
          background-image: url("/assets/images/BG-career.png");
          background-repeat: no-repeat;
        }
        .content {
          margin-top: 70px;
          display: flex;
          justify-content: space-between;
        }
        .content-left {
          width: 528px;
          height: 348px;
        }
        .content-right {
          width: 528px;
          height: 348px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .title {
          font-weight: 600;
          font-size: 26px;
          line-height: 39px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .content-text {
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
          color: #52575c;
        }
        .list-btn {
          display: flex;
          flex-wrap: wrap;
        }
        .box-loadmore {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 10px;
          margin-bottom: 10px;
        }
        .btnmore {
          width: 160px;
          height: 36px;
          box-sizing: border-box;
          background: #ffffff;
          box-shadow: 0px 2px 21px 3px rgba(0, 0, 0, 0.04);
          border-radius: 63px;
          border: none;
          transition: 0.5s;
        }
        .btnmore-active {
          background: #0bbee7;
        }
        .btnmore-active:hover {
          background: #03a3c8;
        }
        .btnmore span {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .btnmore-active span {
          color: #ffffff;
        }
        .text-awards {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: 0.18em;
          color: #0bbee7;
        }
        .header1 {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
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
        .header-right {
          cursor: pointer;
        }
        .header-title {
          font-weight: 600;
          font-size: 24px;
          line-height: 135.4%;
          color: #000000;
        }
        .award-list {
          display: flex;
        }
        .award-item {
          background: #ffffff;
          box-shadow: 0px 2px 21px 3px rgba(0, 0, 0, 0.04);
          width: 290px;
          height: 336px;
          margin-right: 20px;
        }
        @media screen and (max-width: 768px) {
          .header {
            height: 233px;
            width: 100%;

            background-repeat: no-repeat;
            background-size: cover;
          }
          .content {
            display: block;
          }
          .content-left {
            width: 100%;
            height: auto;
          }
          .village-react-top {
            padding: 0 16px;
            width: 100%;
          }
          .box-image {
            width: 56px;
            height: 85px;
            margin-right: 8px;
          }
          .box-image-marginTop {
            margin-top: 16px;
            width: 56px;
            height: 85px;
            margin-right: 8px;
          }
          .container {
            margin: 0;
          }
          .Office-Images {
            width: 100%;
            height: auto;
          }
          .Office-Images-Left {
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .Office-Images-Left-Bottom {
            margin-top: 5px;
          }
          .Office-Images-Right {
            display: none;
          }
          .content-right {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default VanHoa;