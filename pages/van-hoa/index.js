import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../src/components/footer";
import Head from "next/head";
import Menu from "../../src/components/menu";
import { Award } from "../../src/config";
import JoinNow from "../../src/components/common/thamgiangay";
import { useEffect, useState } from "react";
import {
  get_health_festivals,
  get_images_villages,
  URL,
} from "../../src/services/api";
import { useScroll } from "../../src/hooks/useScroll";
const VanHoa = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  const [isActive, setActive] = useState(0);
  const [isPosition, setPosition] = useState(false);
  const [isActiveSummer, setActiveSummer] = useState(0);
  const _dataScroll = useScroll();
  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={() => onClick()}
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 8px rgba(49, 53, 59, 0.2)",
          top: "calc(100% / 2 - 18px)",
          right: "3px",
          zIndex: 100,
          minWidth: "32px",
          minHeight: "32px",
          overflow: "hidden",
        }}
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
      >
        <img
          src="/assets/images/back_right.png"
          style={{ position: "absolute", top: 10, left: 12, zIndex: 100 }}
          alt="a"
        />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={() => onClick()}
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 8px rgba(49, 53, 59, 0.2)",
          top: "calc(100% / 2 - 18px)",
          left: "3px",
          zIndex: 100,
          minWidth: "32px",
          minHeight: "32px",
          overflow: "hidden",
        }}
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
      >
        <img
          src="/assets/images/back_left.png"
          style={{ position: "absolute", top: 10, left: 12, zIndex: 100 }}
          alt="a"
        />
      </button>
    );
  };
  return (
    <>
      <Head>
        <title>Văn Hóa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={"header"}>
        <Menu isColor={true} />
        <div className={"header-text"}>
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
            {data[0].map((val, index) => (
              <div
                className={
                  index % 2 === 0 ? "box-image" : "box-image-marginTop"
                }
                key={index}
              >
                <img
                  src={`${URL}${val.image.url}`}
                  style={{ objectFit: "cover" }}
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
                    src="/assets/images/img20.png"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div className="Office-Images-Left-Top-IMG2">
                  <img
                    src="/assets/images/img21.png"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
              </div>
              <div className="Office-Images-Left-Bottom">
                <div className="Office-Images-Left-Bottom-IMG3">
                  <img
                    src="/assets/images/img22.png"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
                <div className="Office-Images-Left-Bottom-IMG4">
                  <img
                    src="/assets/images/img23.png"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
            <div className="Office-Images-Right">
              <img
                src="/assets/images/img24.png"
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
                src={`${URL}${data[1].health[isActive].image.url}`}
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
                {data[1].health.map((val, index) => {
                  return (
                    <div className="box-loadmore" key={val.id}>
                      <button
                        onClick={() => setActive(index)}
                        className={
                          isActive === index
                            ? "btnmore btnmore-active"
                            : "btnmore"
                        }
                      >
                        <span>{val.title}</span>
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
                {data[1].festival.map((val, index) => {
                  return (
                    <div className="box-loadmore" key={val.id}>
                      <button
                        onClick={() => setActiveSummer(index)}
                        className={
                          isActiveSummer === index
                            ? "btnmore btnmore-active"
                            : "btnmore"
                        }
                      >
                        <span>{val.title}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="content-left">
              <img
                src={`${URL}${data[1].festival[isActiveSummer].image.url}`}
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
        </div>
        <div className="award-list">
          <Carousel
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {Award.map((value) => (
              <div className="award-item" key={value._id}>
                <div className="award-item-img">
                  <img
                    src={"/assets/images/" + value.image}
                    height={"auto"}
                    width={"auto"}
                  />
                </div>
                <div className="award-item-content">
                  <h2 className="award-item-content-big">{value.title}</h2>
                  <h4 className="award-item-content-smail">{value.content}</h4>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mr-70" />
      <JoinNow />
      <div className="mr-110" />
      <Footer />

      <style jsx>{`
        .react-multiple-carousel__arrow:hover {
          background-color: unset;
        }
        .react-multiple-carousel__arrow1 {
          position: absolute;
          outline: 0;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;

          right: 10px;
          border-radius: 35px;
          z-index: 1000;
          border: 0;
          background: rgba(0, 0, 0, 0.5) !important;
          min-width: 32px !important;
          background: #ffffff !important;
          box-shadow: 0px 1px 8px rgb(49 53 59 / 20%) !important;
          min-height: 32px !important;
          opacity: 1;
          margin-top: -77px !important;
          margin-right: -40px !important;
          cursor: pointer;
        }
        .react-multiple-carousel__arrow--right::before {
          content: "\e825";
          display: none !important;
        }
        .drop-down {
          top: 108px;
        }
        .none {
          display: none;
        }
        .header {
          height: 410px;
          width: 100%;
          position: sticky;
          top: -334px;
          z-index: 19999;
          background-image: url("/assets/images/ReactPlusAnhBia.png");
        }
        .header-positon {
          background-image: unset;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 100000000;
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
          height: 120px;
        }
        .village-react-top {
          width: 100%;
          height: auto;
          margin: 74px auto 81px auto;
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
          width: 820px;
          margin: 0 auto;
          margin-top: 19px;
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
        }
        .box-image-marginTop {
          margin-top: 40px;
          width: 165px;
          height: 250px;
        }
        .box-image + .box-image-marginTop {
          margin-left: 24px;
        }
        .box-image-marginTop + .box-image {
          margin-left: 24px;
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
          width: unset;
          margin: 40px auto 97px auto;
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
          margin: 80px 0;
          padding-top: 75px;
          background: linear-gradient(
            180deg,
            #f4f6fa 0%,
            rgba(244, 246, 250, 0) 83.85%
          );
        }
        .content {
          display: flex;
          justify-content: space-between;
        }
        .content:nth-child(2) {
          margin-top: 129px;
          display: flex;
          justify-content: space-between;
        }
        .content-left {
          width: 528px;
          height: 348px;
        }
        .content-right {
          width: 470px;
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
          padding: 8px 16px;
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
          margin-bottom: 12px;
          line-height: 135.4%;
          color: #000000;
        }
        .award-list {
          padding: 20px 8px;
          width: 100%;
        }
        .award-item {
          background: #ffffff;
          box-shadow: 0px 2px 21px 3px rgba(0, 0, 0, 0.04);
          min-width: 290px;
          height: 336px;
          margin: 20px;
        }
        .award-item-img {
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .award-item-content {
          padding: 16px;
          height: 50%;
        }
        .award-item-content-big {
          font-weight: 600;
          font-size: 16px;
          height: 48px;
          line-height: 24px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .award-item-content-smail {
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #000000;
          width: 100%;
          white-space: pre-wrap;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        }
        .mr-70 {
          margin-top: 70px;
        }
        .mr-110 {
          margin-top: 110px;
        }

        @media screen and (max-width: 768px) {
          .header {
            height: 233px;
            width: 100%;
            top: -173px;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .content {
            flex-direction: column;
            margin-top: 0px;
          }
          .content-left {
            width: 100%;
            height: auto;
          }
          .village-react-top {
            padding: 0 16px;
            width: 100%;
            margin: 23px auto 34px auto;
          }
          .box-image {
            width: calc(100% / 6);
            height: 85px;
          }

          .box-image-marginTop {
            margin-top: 16px;
            width: 56px;
            height: 85px;
          }
          .box-image-marginTop:nth-child(3) {
            margin-right: 0;
          }
          .introduce-text {
            font-size: 22px;
          }
          .container:nth-child(2) {
            margin: 0;
            padding: 0;
          }
          .Office-TitleContent {
            font-size: 22px;

            font-size: 22px;
            line-height: 33px;
            margin-bottom: 20px;
            width: 70%;
            margin: 8px auto 16px auto;
          }
          .Office-Images {
            width: 100%;
            height: auto;
            margin: 24px auto 40px auto;
          }
          .Office-Images-Left {
            width: 100%;
            height: 100%;
            margin-right: 0;
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
            order: 1;
            width: 100%;
            height: 100%;
            margin: 10px 0;
          }
          .content-left {
            order: 2;
            width: 100%;
            margin: 15px 0;
          }
          .village-react-text {
            font-size: 14px;
            width: 100%;
          }
          .list-images {
            justify-content: space-between;
          }
          .title,
          .header-title,
          .village-title {
            font-size: 22px;
          }
          .header1 {
            margin: 0;
          }

          .text-awards {
            margin-top: 42px;
          }
          .content:nth-child(2) {
            margin-top: 37px;
          }
          .mr-110 {
            margin-top: 0px;
          }

          .mr-70 {
            margin-top: 0px;
          }
          .award-list {
            padding: 0;
          }
          .Office-Content {
            height: auto;
            margin: 8px 0;
            padding-top: 12px;
          }
          .box-image + .box-image-marginTop {
            margin-left: 0;
          }
          .box-image-marginTop + .box-image {
            margin-left: 0;
          }
          .box-image-marginTop {
            width: 14%;
          }
          .box-image {
            width: 15%;
          }
          .distance {
            height: 70px;
          }
          /* .award-list {
            flex-direction: column;
          }
          .award-item {
            width: 100%;
            margin: 20px 0;
          } */
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps() {
  const [_get_images_villages, _get_health_festivals] = await Promise.all([
    get_images_villages(),
    get_health_festivals(),
  ]);
  const data = await Promise.all([
    _get_images_villages.data,
    _get_health_festivals.data,
  ]);

  return {
    props: {
      data: data,
    },
  };
}

export default VanHoa;
