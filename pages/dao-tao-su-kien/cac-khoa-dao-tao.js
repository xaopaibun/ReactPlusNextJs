import Footer from "../../src/components/footer";
import Head from "next/head";
import Menu from "../../src/components/menu";

import { TeachingStaff } from "../../src/components/common";

import { get_training_page, URL } from "../../src/services/api";
import JoinNowCourse from "../../src/components/common/dangkythamgia";

const EventTraining = ({ data_training_page }) => {
  return (
    <>
      <Head>
        <title>Đào tạo && Sự kiện React Plus</title>
        <meta
          property="og:image"
          content="http://103.237.145.33:3000/uploads/image/image/19/ReactPlus-Cty.jpg"
        />
      </Head>
      <Menu />
      <div className="main">
        <div className="image-page">
          <img
            src="/assets/images/Khoa-Dao-Tao-React-Plus.png"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="Logo-ReactPlus">
          <div className="container">
            <h2 className="title_page">Lợi ích đặc biệt từ khoá học</h2>
            <div className="box__company__scale">
              {data_training_page?.benefit?.map((val) => (
                <div className="company__scale__item" key={val.id}>
                  <div className="item__img">
                    <img
                      height="43px"
                      width="43px"
                      src={`${URL}${val.image.url}`}
                      alt=""
                    />
                  </div>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: val.content,
                    }}
                  />
                </div>
              ))}
              {/* <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="43px"
                  width="43px"
                  src="/assets/images/LogoReact1.png"
                  alt=""
                />
              </div>
              <p className="content">
                Nơi làm việc của đông đảo chuyên
                <br />
                gia và kỹ sư yêu thích React
              </p>
            </div>
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="43px"
                  width="43px"
                  src="/assets/images/Team.png"
                  alt=""
                />
              </div>
              <p className="content">
                Nơi làm việc của đông đảo chuyên <br />
                gia và kỹ sư yêu thích React
              </p>
            </div>
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="40px"
                  width="40px"
                  src="/assets/images/engineer.png"
                  alt=""
                />
              </div>
              <p className="content">
                Nơi làm việc của đông đảo chuyên <br />
                gia và kỹ sư yêu thích React
              </p>
            </div> */}
            </div>
          </div>
          <div className="content-course">
            <div className="container">
              <h2 className="title_page">Nội dung chính khóa học</h2>
              <div className="list-course">
                {data_training_page?.feature?.map((value, index) => (
                  <div className="course-item" key={value.id}>
                    <div className="course-item-image">
                      <h1 className="number-text">{index + 1}</h1>
                    </div>
                    <div className="course-item-text">
                      <div
                        className="course-text"
                        dangerouslySetInnerHTML={{
                          __html: value.content,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mr-72" />
              <h2 className="title_page">Đặc điểm khóa học</h2>
              <div className="list-course-features">
                {data_training_page?.feature?.map((value) => (
                  <div className="list-course-features-item" key={value.id}>
                    <img
                      src={`${URL}${value.image.url}`}
                      className="course-img"
                      width={80}
                      height={80}
                    />
                    <p className="course-title">{value.title}</p>
                    <div
                      className="course-features-text"
                      dangerouslySetInnerHTML={{
                        __html: value.content,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mr-72" />
        <TeachingStaff data={data_training_page?.trainner} />
        <JoinNowCourse />
        <div className="mr-100" />
        <Footer />
      </div>
      <style jsx>{`
        .image-page {
          height: 430px;
          width: 100%;
        }
        .Logo-ReactPlus {
          height: auto;
          margin-top: 50px;
          width: 100%;
          background: center;
          background-image: url("/assets/images/Group2078.png");
        }
        .box__company__scale {
          margin: 20px 0;
          display: flex;
          justify-content: space-around;
        }
        .company__scale__item {
          width: 238px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .company__scale__item .content {
          margin-top: 10px;
          text-align: center;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          white-space: pre-wrap;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          color: #25282b;
        }
        .company__scale__item .item__img {
          height: 74px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 74px;
          background: #ffffff;
          box-shadow: 0px 2px 21px 3px rgba(0, 0, 0, 0.04);
        }
        .title_page,
        .title_teaching_staff {
          font-weight: 600;
          font-size: 28px;
          margin: 40px 0;
          line-height: 42px;
          letter-spacing: -0.02em;
          text-align: center;
        }
        .title_teaching_staff {
          font-size: 32px;
        }
        .content-course {
          width: 100%;
          background-image: linear-gradient(
            180deg,
            #f4f6fa 0%,
            rgba(244, 246, 250, 0) 83.85%
          );
          height: auto;
        }
        .list-course {
          display: flex;
          flex-wrap: wrap;
        }
        .number-text {
          color: #0bbee7;
          width: 30px;
          font-size: 3.5rem;
        }
        .course-item {
          width: 44.3%;
          height: 80px;
          margin: 20px 30px;
          display: flex;
          align-items: center;
        }
        .course-item-text {
          margin-left: 20px;
        }
        .course-text,
        .course-features-text {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .list-course-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .course-features-text {
          text-align: center;
        }
        .list-course-features-item {
          width: 252px;
          display: flex;
          height: auto;
          flex-direction: column;
          align-items: center;
        }
        .course-title {
          margin-top: 20px;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .box-team-of-experts {
          display: flex;
          flex-wrap: wrap;
          margin: 30px 0;
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
        .mr-100 {
          margin-top: 110px;
        }
        .content-course {
          padding-top: 71px;
        }
        .mr-72 {
          margin-top: 72px;
        }
        @media screen and (max-width: 768px) {
          .mr-72 {
            margin-top: 27px;
          }
          .content-course {
            padding-top: 27px;
          }

          .image-page {
            height: auto;
            width: 100%;
          }
          .box__company__scale {
            flex-direction: column;
          }
          .content-course {
            position: unset;
          }
          .company__scale__item {
            margin: 0 auto;
          }
          .list-course-features-item {
            margin: 0 auto;
          }
          .list-course-feature {
            flex-direction: column;
          }
          .title_page {
            font-size: 20px;
            margin: 10px 0;
          }
          .course-item {
            width: 100%;
          }
          .Logo-ReactPlus {
            background-image: none;
          }
          .mr-100 {
            margin-top: 10px;
          }
         
        }
      `}</style>
    </>
  );
};
export async function getServerSideProps() {
  const res = await get_training_page();
  const data_training_page = res.data;
  return {
    props: {
      data_training_page,
    },
  };
}

export default EventTraining;
