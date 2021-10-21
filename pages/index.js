import Head from "next/head";
import Menu from "../src/components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/footer";
import { ListNews, TrainingEvents } from "../src/config";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home React Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <div>
        <div className="banner">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="./assets/images/banner.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./assets/images/banner.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./assets/images/banner.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <div
              className="btnSlider left"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <img src="./assets/images/back_left.png" alt="" />
            </div>
            <div
              className="btnSlider right"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <img src="./assets/images/back_right.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box-content">
          <div className="container">
            <h2 className="content__review">
              Công ty chuyên về React đầu tiên tại Việt Nam
            </h2>
            <p className="content__text">
              React Plus cung cấp các chuyên gia hàng đầu về React cho thị
              trường quốc tế. Chúng tôi tập trung toàn bộ vào công nghệ React -
              React Native và mang tới dịch vụ chất lượng cao nhất cho khách
              hàng ở 4 mảng: Phát triển web, ứng dụng di động, phòng lap và hợp
              đồng.
            </p>
            <div className="box-item">
              <div className="item">
                <img
                  src="./assets/images/img0.png"
                  alt=""
                  className="item__img"
                />
                <p className="item__content">
                  Nơi làm việc của đông đảo chuyên gia và kỹ sư yêu thích React
                </p>
                <p></p>
              </div>
              <div className="item">
                <img
                  src="./assets/images/img01.png"
                  alt=""
                  className="item__img"
                />
                <p className="item__content">
                  Quy mô 130 nhân sự và 100% dự án làm về React
                </p>
                <p></p>
              </div>
              <div className="item">
                <img
                  src="./assets/images/img00.png"
                  alt=""
                  className="item__img"
                />
                <p className="item__content">
                  Nơi tổ chức miễn phí các khoá đào tạo, sự kiện về React với
                  chuyên gia trong nước và quốc tế
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="box-community">
          <div className="container">
            <div className="community-top">
              <h5 className="text_blue">CỘNG ĐỒNG</h5>
              <h3 className="community__title">
                Đào tạo &amp; Sự kiện về React
              </h3>
              <div className="community__content">
                Với mong muốn xây dựng cộng đồng kỹ sư làm về React cùng nhau
                phát triển tại Việt Nam, chúng tôi tổ chức các đợt đào tạo và sự
                kiện hàng tháng để giúp các kỹ sư trên toàn quốc cùng nhau học
                hỏi, cập nhật những thay đổi mới nhất về React. Ngoài ra, mỗi
                năm một lần, chúng tôi sẽ tổ chức một sự kiện lớn với sự tham
                gia của các chuyên gia React hàng đầu Việt Nam và thế giới.
              </div>
            </div>
            <div className="community-bottom">
              {TrainingEvents &&
                TrainingEvents.map((val) => (
                  <div className="community__item" key={val._id}>
                    <div className="community__item__image">
                      <img src={"./assets/images/" + val.image} alt="" />
                    </div>
                    <div className="community__item__content">
                      <p className="community__date">{val.date}</p>
                      <h4 className="item__title">{val.title}</h4>
                      <p className="item__content">{val.content}</p>
                      <button className="btnmore">
                        <span>Tìm hiểu thêm</span>
                        <img
                          className="btnmore__icon"
                          src="./assets/icon/muiten.png"
                        />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box_education">
            <img
              width="32px"
              height="32px"
              src="./assets/icon/muitentrai.png"
              alt=""
            />

            <div className="education">
              <div className="education__item">
                <p className="education__item__time">
                  01.10.2021 - 28.11.2021{" "}
                </p>
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
                <h3 className="education__item__title">Talkshow</h3>
                <p className="education__item__content">
                  Tương lai của React trên thị trường Việt Nam và quốc tế
                </p>
              </div>

              <div className="education__item">
                <p className="education__item__time text-active">
                  01.10.2021 - 28.11.2021{" "}
                </p>
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
                <h3 className="education__item__title">
                  Khoá đào tạo Mầm non React
                </h3>
                <p className="education__item__content">
                  Khoá đào tạo hoàn toàn miễn phí giúp các bạn sinh viên IT bước
                  đầu làm quen với React - React Native
                </p>
              </div>
              <div className="education__item">
                <p className="education__item__time">
                  01.10.2021 - 28.11.2021{" "}
                </p>
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
                <h3 className="education__item__title">Talkshow</h3>
                <p className="education__item__content">
                  Tương lai của React trên thị trường Việt Nam và quốc tế
                </p>
              </div>
            </div>
            <img
              width="32px"
              height="32px"
              src="./assets/icon/muitenphai.png"
              alt=""
            />
          </div>
        </div>
        <div className="box_document">
          <div className="BG" />
          <div className="document">
            <div className="container">
              <div className="flex">
                <div className="document__img">
                  <img src="./assets/images/img2.png" alt="" />
                </div>
                <div className="document__text">
                  <p className="text_blue text-left">MIỄN PHÍ</p>
                  <p className="document__title">
                    Tài liệu về khoá đào tạo React miễn phí
                  </p>
                  <div className="document__text">
                    Trong suốt 5 năm làm việc chuyên sâu về React, đào tạo cho
                    hàng trăm nhân sự cho các dự án quốc tế, đội ngũ chuyên gia
                    của chúng tôi đã biên soạn bộ tài liệu đầy đủ và đơn giản
                    nhất giúp bạn làm quen với React - React Native và có thể
                    ứng dụng ngay trong các dự án của mình.
                  </div>
                  <div className="document__text">
                    Đây là một phần nội dung trong “Khoá đào tạo mầm non React"
                    của chúng tôi. Tài liệu phù hợp với:
                  </div>
                  <ul className="document__list">
                    <li>Các bạn sinh viên lần đầu tiên làm quen với React</li>
                    <li>
                      {" "}
                      Fresher - Người mới đi làm và mong muốn làm việc về React
                    </li>
                    <li>
                      {" "}
                      Middle - Lập trình viên đã có kinh nghiệm, muốn trải
                      nghiệm một lĩnh vực mới để thay đổi công việc
                    </li>
                  </ul>
                  <button className="btnmorefull">
                    <span>Tải về miễn phí</span>
                    <img
                      className="btnmore__icon"
                      src="./assets/icon/muitenwhite.png"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="title__news">Tin tức &amp; Blog</p>
        <div className="container">
          <div className="list_news">
            {ListNews &&
              ListNews.map((val) => (
                <div className="news__item" key={val._id}>
                  <img
                    src={`./assets/images/${val.image}`}
                    className="news__item__img"
                  />
                  <a href="#">{val.title}</a>
                  <p className="community__date">{val.date}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="box-inputemail">
          <div className="container">
            <div className="inputemail">
              <div className="input__content">
                <p className="input__content__title">
                  Nhận ngay các thông tin mới nhất về Reactjs &amp; React Native
                  nhé.
                </p>
                <input type="email" placeholder="Nhập địa chỉ email của bạn" />
                <button className="btnsubmit" type="submit">
                  Nhận
                </button>
              </div>
            </div>
          </div>
          <img className="reactlogo" src="./assets/images/React.png" alt="" />
        </div>
        <Footer />
      </div>
      <style jsx>{`
        /* start slider */
        .banner {
          height: 430px;
          width: 100%;
          position: relative;
        }

        .banner__slider {
          width: 100%;
          height: 100%;
        }
        .btnSlider {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0px 1px 6px rgba(49, 53, 59, 0.3);
        }
        .btnSlider.left {
          position: absolute;
          top: calc(430px / 2);
          left: 164px;
          z-index: 99;
        }
        .btnSlider.right {
          position: absolute;
          top: calc(430px / 2);
          right: 164px;
          z-index: 99;
        }
        /* end slider */

        /* start css box content */
        .box-content {
          height: 420px;
          padding: 50px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }
        .content__review {
          text-align: center;
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .content__text {
          text-align: center;
          width: 520px;
          color: #52575c;
          letter-spacing: -0.02em;
          font-size: 14px;
          margin: 0 auto;
          line-height: 21px;
        }

        .box-item {
          display: flex;
          height: 238px;
          width: 100%;
          justify-content: space-between;
        }
        .box-item .item {
          height: 238px;
          width: 238px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .box-item .item .item__content {
          margin-top: 10px;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        /* end css box content */

        /* start css box-community */
        .box-community {
          width: 100%;
          margin: 20px 0;
          background: linear-gradient(
            180deg,
            #f4f6fa 0%,
            rgba(244, 246, 250, 0) 83.85%
          );
        }
        .community-top {
          padding-top: 25px;
        }

        .text_blue {
          color: #0bbee7;
          font-weight: 600;
          font-size: 14px;
          text-align: center;
          line-height: 21px;
          letter-spacing: 0.18em;
        }

        .community__title {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #25282b;
          text-align: center;
        }
        .community__content {
          width: 685px;
          margin: auto;
          font-weight: 500;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #52575c;
        }
        .community-bottom {
          display: flex;
          margin-top: 15px;
          justify-content: space-between;
        }
        .community__item {
          padding: 18px;
          width: 504px;
          height: 521px;
          background: #ffffff;
          box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.05);
        }
        .community__item__image {
          width: 465px;
          height: 278px;
        }
        .community__item__image img {
          width: 100%;
          height: 100%;
        }
        .community__date {
          margin: 10px 0;
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #a0a4a8;
        }
        .item__title {
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .community__item__content .item__content {
          font-size: 13px;
          width: 381px;
          height: 60px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .btnmore {
          width: 152px;
          height: 36px;
          border: 1px solid #0bbee7;
          box-sizing: border-box;
          border-radius: 44px;
          background-color: #ffffff;
          transition: 0.5s;
        }
        .btnmore:hover .btnmore__icon {
          transform: translateX(5px);
          transition: 0.4s;
        }

        .btnmore:hover {
          border: 1px solid #03a3c8;
        }
        .btnmorefull {
          width: 152px;
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
        .btnmore span {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #0bbee7;
          margin-right: 5px;
        }

        .btnmore:hover span {
          color: #03a3c8;
        }

        /* end css box-community */

        /*  start box education */
        .box_education {
          height: 200px;
          display: flex;
          align-items: center;
        }
        .education {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .education__item {
          width: 33%;
        }
        .education__item__title,
        .education__item__time,
        .education__item__content {
          text-align: center;
        }
        .education__item__time {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #a0a4a8;
          margin-top: 0;
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
          background: #0bbee7;
        }
        .text-active {
          color: #0bbee7 !important;
          font-weight: 600;
        }
        .education__item__title {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .education__item__content {
          font-weight: 500;
          width: 250px;
          margin: 0 auto;
          font-size: 13px;
          line-height: 18px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #52575c;
        }

        /* end box education*/

        /* start box_document */
        .box_document {
          width: 100%;
          height: 610px;
          position: relative;
        }
        .BG {
          height: 416px;
          width: 100%;
          background-image: url("/assets/icon/BGHome.png");
        }
        .document {
          position: absolute;
          top: 92px;
          left: 0;
          z-index: 9;
          width: 100%;
        }
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .document__img {
          width: 539px;
          height: 460px;
        }
        .document__img img {
          width: 100%;
          height: 100%;
        }
        .document__text {
          width: 434px;
        }
        .document__title {
          font-weight: 600;
          width: 382px;
          font-size: 24px;
          line-height: 36px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .document__text {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          margin-top: 10px;
          color: #52575c;
        }

        .document__list {
          line-height: 28px;
          padding: 20px;
        }

        /* end box_document */

        /* start css news */
        .title__news {
          text-align: center;
          font-weight: 600;
          font-size: 24px;
          line-height: 36px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .list_news {
          display: flex;
          justify-content: space-between;
        }

        .news__item {
          height: auto;
          width: 252px;
        }

        .news__item__img {
          height: 142px;
          width: 252px;
        }
        .news__item a {
          margin-top: 10px;
          display: block;
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
          text-decoration: none;
          color: #25282b;
          transition: 0.5s;
        }
        .news__item a:hover {
          color: #0bbee7;
          text-decoration: none;
        }
        /* end css news */

        .box-inputemail {
          margin-top: 50px;
          position: relative;
          height: 211px;
          width: 100%;
        }
        .inputemail {
          width: 100%;
          height: 100%;
          background-image: url("/assets/images/BGinput.png");
        }
        .box-inputemail .reactlogo {
          position: absolute;
          top: -37px;
          left: 0;
          z-index: 99;
        }
        .input__content {
          width: 461px;
          margin: 0 auto;
          position: relative;
          padding: 30px 0;
        }
        .input__content__title {
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          text-align: center;
          color: #ffffff;
        }
        .inputemail input {
          background: #ffffff;
          border-radius: 43px;
          color: #a0a4a8;
          font-size: 14px;
          width: 407px;
          height: 44px;
          line-height: 32px;
          padding-left: 15px;
          padding-right: 50px;
          border: none;
        }
        .inputemail input:focus {
          outline: none;
        }
        .btnsubmit {
          position: absolute;
          bottom: 30px;
          border: none;
          right: 0;
          z-index: 999;
          width: 104px;
          height: 44px;
          background: #00daff;
          border-radius: 40px;
          font-weight: 600;
          font-size: 14px;
          line-height: 32px;
          text-align: center;
          color: #ffffff;
        }
        .btnsubmit:focus {
          outline: none;
        }
        .btnsubmit:hover {
          transition: 0.5s;
          background-color: #03a3c8;
        }
        .footer {
          height: 150px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #f0f0f0;
        }
        .footer_itemlogo {
          width: 24%;
        }
        .footer_item {
          width: 16%;
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
          line-height: 20px;
          letter-spacing: -0.02em;
          color: #000000;
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

          color: #000000;
        }
        .footer_item .connect {
          display: flex;
        }
        .copy-right {
          font-size: 11px;
          line-height: 16px;
          /* identical to box height */

          letter-spacing: -0.02em;
          margin: 15px 0;
          color: #000000;
        }
      `}</style>
    </div>
  );
}
