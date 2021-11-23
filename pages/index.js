import Head from "next/head";
import Link from "next/link";
import Menu from "../src/components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../src/components/footer";
import { Carousel } from "react-bootstrap";
import SlideItem from "../src/components/common/slideitem/SlideItem";
import Popup from "../src/components/common/popuphome";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PopupDownloadDocuments from "../src/components/common/popupdownloaddocuments";
import {
  get_banners,
  get_posts,
  get_timeline_event,
  get_training_event,
  send_mail,
  URL,
} from "../src/services/api";
import { useRouter } from "next/router";
export default function Home({ data }) {
  const router = useRouter();
  const [isShow, setShow] = useState(false);
  const [isShow2, setShow2] = useState(false);
  const NaviDetailTraining = () => router.push("/cac-khoa-dao-tao");
  const NaviDetailEvent = () =>
    router.push("/cac-khoa-dao-tao/su-kien-thuong-ky");
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Sai định dạng Email")
        .required("Không được để rỗng"),
    }),
    onSubmit: async (values) => {
      await send_mail(values.email).then((res) => {
        // setFieldValue(values.email, "");
        setShow(true);
        values.email = "";
        console.log(values.email);
      });
    },
  });
  const handleDownLoadDocuments = () => setShow2(true);
  return (
    <>
      <Head>
        <title>Home Page React Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      {isShow2 && (
        <PopupDownloadDocuments show={isShow2} onHide={() => setShow2(false)} />
      )}
      <div className="box-box">
        <div className="banner">
          <Carousel
            prevIcon={
              <div className="btnSlider left">
                <img src="./assets/images/back_left.png" alt="" />
              </div>
            }
            nextIcon={
              <div className="btnSlider right">
                <img src="./assets/images/back_right.png" alt="" />
              </div>
            }
          >
            {data[0].map((val) => (
              <Carousel.Item interval={3500} key={val.id}>
                <img
                  className="d-block w-100 img-slide"
                  src={`${URL}${val.image.url}`}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
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
                <div className="item__img">
                  <img src="./assets/images/img0.png" alt="" />
                </div>
                <p className="item__content">
                  Nơi làm việc của đông đảo chuyên gia và kỹ sư yêu thích React
                </p>
              </div>
              <div className="item">
                <div className="item__img">
                  <img src="./assets/images/img01.png" alt="" />
                </div>
                <p className="item__content">
                  Quy mô 130 nhân sự và 100% dự án làm về React
                </p>
              </div>
              <div className="item">
                <div className="item__img">
                  <img src="./assets/images/img00.png" alt="" />
                </div>
                <p className="item__content">
                  Nơi tổ chức miễn phí các khoá đào tạo, sự kiện về React với
                  chuyên gia trong nước và quốc tế
                </p>
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
              <div className="community__item">
                <div className="community__item__image">
                  <img src={URL + data[1].training?.image.url} alt="" />
                </div>
                <div className="community__item__content">
                  <p className="community__date">
                    {data[1].training?.start_date} {data[1].training?.to_date}
                  </p>
                  <h4 className="item__title">{data[1].training?.title}</h4>
                  <div
                    className="item__content"
                    dangerouslySetInnerHTML={{
                      __html: data[1].training?.content,
                    }}
                  />
                  <button
                    className="btnmore"
                    onClick={() => NaviDetailTraining()}
                  >
                    <span>Tìm hiểu thêm</span>
                    <img
                      className="btnmore__icon"
                      src="./assets/icon/muiten.png"
                    />
                  </button>
                </div>
              </div>

              <div className="community__item">
                <div className="community__item__image">
                  <img src={URL + data[1].event?.cover_image.url} alt="" />
                </div>
                <div className="community__item__content">
                  <p className="community__date">
                    {data[1].event?.start_date} {data[1].event?.to_date}
                  </p>
                  <h4 className="item__title">{data[1].event?.title}</h4>
                  <div
                    className="item__content"
                    dangerouslySetInnerHTML={{
                      __html: data[1].event?.content,
                    }}
                  />
                  <button
                    className="btnmore"
                    onClick={() => NaviDetailEvent()}
                  >
                    <span>Tìm hiểu thêm</span>
                    <img
                      className="btnmore__icon"
                      src="./assets/icon/muiten.png"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mr-62" />
          <SlideItem TimeLineEvent={data[2]} />
          <div className="mr-47" />
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
                  <p className="document__title text-left">
                    Tài liệu về khoá đào tạo React Plus Developer
                  </p>
                  <div className="document__text">
                    Trong nhiều năm làm việc chuyên sâu về ReactJs, đào tạo các
                    nhân sự cho các dự án quy mô quốc tế, React Plus đã xây dựng
                    một khoá học hoàn chỉnh giúp các developer trẻ hoặc sinh
                    viên mới ra trường có cơ hội tiếp cận và có thể bước đầu làm
                    việc với ReactJs & React Native. Đây là tài liệu giới thiệu
                    tổng quan về khoá học.
                  </div>
                  <div className="document__text">
                    Khoá học này phù hợp với:
                  </div>
                  <ul className="document__list">
                    <li>Các bạn sinh viên lần đầu làm quen với ReactJS</li>
                    <li>Người mới đi làm có mong muốn làm việc với ReactJS</li>
                    <li>
                      Lập trình viên đã có kinh nghiệm, muốn trải nghiệm một
                      lĩnh vực mới để thay đổi công việc
                    </li>
                  </ul>
                  <button
                    className="btnmorefull"
                    onClick={handleDownLoadDocuments}
                  >
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
            {data[3].map((val) => (
              <div className="news__item" key={val.id}>
                <img
                  src={`${URL}${val.cover_image.url}`}
                  className="news__item__img"
                />
                <Link href={`/tin-tuc/${val.url_seo}`}>
                  <a className="post-title">{val.title}</a>
                </Link>
                <p className="community__date">
                  {val.start_date} - {val.to_date}
                </p>
              </div>
            ))}
          </div>
        </div>
        {isShow && <Popup show={isShow} onHide={() => setShow(false)} />}
        <div className="box-inputemail">
          <div className="container">
            <form onSubmit={formik.handleSubmit}>
              <div className="inputemail">
                <div className="input__content">
                  <p className="input__content__title">
                    Nhận ngay các thông tin mới nhất về Reactjs &amp; React
                    Native nhé.
                  </p>
                  <input
                    type="email"
                    placeholder="Nhập địa chỉ email của bạn"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <button className="btnsubmit" type="submit">
                    Nhận
                  </button>
                </div>
                {formik.errors.email && formik.touched.email && (
                  <div className="box-error">
                    <img
                      src="./assets/icon/icont-error.png"
                      width="16px"
                      height="16px"
                    />
                    <span className="text-error">{formik.errors.email}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
      <style jsx>{`
        /* start slider */
        .mr-30{
          margin-top: 50px;
        }
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
          top: calc(430px / 2 - 32px);
          left: 164px;
          z-index: 99;
        }
        .btnSlider.right {
          position: absolute;
          top: calc(430px / 2 - 32px);
          right: 164px;
          z-index: 99;
        }
        .img-slide{
          width: 100%;
          height: 430px;
          object-fit: cover;
        }
        /* end slider */

        /* start css box content */
        .box-content {
          height: auto;
          padding: 89px 0 19px 0;
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
          margin-bottom: 0;
        }
        .content__text {
          text-align: center;
          color: #52575c;
          letter-spacing: -0.02em;
          line-height: 21px;
          width: 671px;
          font-size: 14px;
          margin: 19px auto 25px auto;
        }

        .box-item {
          display: flex;
          height: auto;
          width: 100%;
        
          padding: 0 20px ;
          justify-content: space-around;
        }
        .box-item .item {
          height: auto;
          width: 238px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .box-item .item .item__img{
            width:100%;
            height: 160px;
            
            display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .box-item .item .item__content {
          height: 62px;
          margin-top: 10px;
          font-size: 14px;
          line-height: 21px;
          white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            display: -webkit-box;
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
          padding-top: 45px;
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
          margin-top: 32px;
          justify-content: space-between;
        }
        .community__item {
          padding: 18px;
          width: 515px;
          height: 521px;
          background: #ffffff;
          box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.05);
        }
        .community__item__image {
          width: 100%;
          height: 278px;
        }
        .community__item__image img {
          width: 100%;
          height: 100%;
        }
        .community__date {
          margin-top: 21px;
          margin-bottom: 10px;
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #a0a4a8;
        }
        .item__title {
          font-weight: 600;
          font-size: 18px;
          height: 42px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .community__item__content .item__content {
          font-size: 13px;
          height: 70px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #25282b;
          white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            display: -webkit-box;
          margin-top: 12px;
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
          width: 465px;
         
        }
        .document__title {
          font-weight: 600;
          width: 382px;
          font-size: 24px;
          line-height: 36px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .document__text {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
         
          color: #52575c;
        }

        .document__list {
          line-height: 28px;
          padding: 26px;
        }
        .text-left{
          text-align: left !important;
          width: 100% !important;
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
          margin: 34px 0;
        }
        .list_news {
          display: flex;
          overflow-x: auto;
          justify-content: space-between;
        }
        .list_news::-webkit-scrollbar { 
 
  display: none; 
}

        .news__item {
          height: auto;
          width: 252px;
        }

        .news__item__img {
          height: 142px;
          width: 240px;
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
          white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
        }
        .news__item a:hover {
          color: #0bbee7;
          text-decoration: none;
        }
        .news__item p{
          margin: 12px 0 0 0;
        }
        /* end css news */

        .box-inputemail {
          margin: 100px 0 90px 0;
          position: relative;
          height: 211px;
          width: 100%;
        }
        .inputemail {
          width: 100%;
          height: 100%;
          padding-bottom: 20px;
          background-image: url("/assets/images/Frame45527.png");
          background-size: cover;
        }
        .mr-62{
          margin-top: 62px;
        }
        .mr-47{
          margin-top: 47px;
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
        .box-error{
          background: #25282B;
          margin-top: -20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-sizing: border-box;
          border-radius: 33px;
          width: 187px;
          margin: 0 auto;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .text-error{
          margin-left: 5px;
          font-weight: 500;
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #FFFFFF;
        }

        @media screen and (max-width: 768px) {
          .box-box {
            width: 100%;
           margin-bottom: 30px;
            overflow: hidden;
          }
          .document__title{
           
            font-size: 20px;
            width: 267px !important;
            margin: 20px auto 13px auto !important;
            text-align: center !important;
          }
        
          .community__title {
   
            font-size: 22px;
          }
          .box-content {
            padding: 0;
            height: auto;
          }
          .img-slide{
          width: 100%;
          height: 113px;
        }
          .content__review {
            font-weight: 600;
            width: 267px;
            line-height: 30px;
            height: auto;
            margin: 0 auto;
            font-size: 20px;
          }
          .content__text {
            width: 100%;
          }
          .box-item {
            display: block;
            width: 100%;
            height: auto;
          }
          .box-item .item {
            width: 100%;
            height: 100%;
          }
          .item__content {
            width: 238px;
          }
          .community__item__content .item__content{
            width: 100% !important;
            height: 90px;
          }
          .community__content {
            width: auto;
          }
          .community-bottom {
            display: block;
          }
          .box_document {
            width: 100%;
            height: 950px;
          }
          .document__text{
            width:  100%;
          }
          .btnmorefull {
 
            display: block;
            margin: auto;
          }
          .news__item{
            margin:0 10px;
          }
          .text_blue{
            display:  none;
          }
          .community__item {
            width: 100%;
            height: auto;
    margin: 15px 0;
           
          }
          .banner{
            height: 113px;
            margin: 10px 0 ;
          }
          .btnSlider{display: none}
          .community__item__image {
            width: 100%;
            height: auto;
          }
          .flex {
            display: block;
          }
          .document__img {
      width: 100%;
      height: auto;

        }
        .document__title {
font-size: 20px;
        }
        .box-inputemail .container{
          padding : 0;
        }
        .inputemail{
          background-image: url(/assets/images/BG1783.png);
        }
        .box-inputemail .reactlogo{
          display: none;
        }
        .input__content{
          width:auto;
          padding: 30px 20px;
        }
        .input__content__title{
          padding : 0;
        }
        .inputemail input{
          width: calc(100% - 60px);
        }
        .btnsubmit{
          margin-right: 20px;
        }
        .item__title{
          font-size: 14px;
        }
        .box-inputemail {
            margin: 56px 0 15px 0;
        }  
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const [_get_banners, _get_training_event, _get_timeline_event, _get_posts] =
    await Promise.all([
      get_banners(),
      get_training_event(),
      get_timeline_event(),
      get_posts(),
    ]);
  const data = await Promise.all([
    _get_banners.data,
    _get_training_event.data,
    _get_timeline_event.data,
    _get_posts.data,
  ]);

  return {
    props: {
      data: data,
    },
  };
}
