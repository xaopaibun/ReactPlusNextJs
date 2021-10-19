import Footer from "../../src/components/footer";
import Head from "next/head";
import Menu from "../../src/components/menu";
import { ListCourse, ListCourseFeatures } from "../../src/config";
import { TeachingStaff } from "../../src/components/common";
import JoinNow from "../../src/components/common/thamgiangay";

const EventTraining = () => {
  return (
    <>
      <Head>
        <title>Đào tạo && Sự kiện React Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="image-page">
        <img
          src="./assets/images/Khoa-Dao-Tao-React-Plus.png"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="Logo-ReactPlus">
        <div className="container">
          <h2 className="title_page">Lợi ích đặc biệt từ khoá học</h2>
          <div className="box__company__scale">
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="43px"
                  width="43px"
                  src="./assets/images/LogoReact1.png"
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
                  src="./assets/images/Team.png"
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
                  src="./assets/images/engineer.png"
                  alt=""
                />
              </div>
              <p className="content">
                Nơi làm việc của đông đảo chuyên <br />
                gia và kỹ sư yêu thích React
              </p>
            </div>
          </div>
        </div>
        <div className="content-course">
          <div className="container">
            <h2 className="title_page">Nội dung chính khóa học</h2>
            <div className="list-course">
              {ListCourse &&
                ListCourse.map((value) => (
                  <div className="course-item" key={value._id}>
                    <div className="course-item-image">
                      <img
                        src="./assets/images/avatar1.png"
                        class="course-img"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="course-item-text">
                      <p className="course-text">
                        Kiến thức về công nghệ React - xu hướng phát triển trong
                        tương lai với cơ hội việc làm và mức lương hấp dẫn. Cập
                        nhật những nội dung mới nhất từ cộng đồng React thế
                        giới.
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            <h2 className="title_page">Đặc điểm khóa học</h2>
            <div className="list-course-features">
              {ListCourseFeatures &&
                ListCourseFeatures.map((value) => (
                  <div className="list-course-features-item" key={value._id}>
                    <img
                      src="./assets/images/avatar1.png"
                      class="course-img"
                      width={80}
                      height={80}
                    />
                    <p className="course-title">{value.title}</p>
                    <p className="course-features-text">
                      Kiến thức về công nghệ React - xu hướng phát triển trong
                      tương lai với cơ hội việc làm và mức lương hấp dẫn. Cập
                      nhật những nội dung mới nhất từ cộng đồng React thế giới.
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <TeachingStaff />
      <JoinNow />
      <Footer />
      <style jsx>{`
        .image-page {
          height: 430px;
          width: 100%;
        }
        .Logo-ReactPlus {
          height: 1121.15px;
          margin-top: 50px;
          width: 100%;
          background-image: url("/assets/images/React1.png");
          position: relative;
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
          line-height: 42px;
          letter-spacing: -0.02em;
          text-align: center;
        }
        .title_teaching_staff {
          font-size: 32px;
        }
        .content-course {
          width: 100%;
          background-image: url("/assets/images/BG-career.png");
          height: 686px;
          position: absolute;
          top: 300px;
          padding: 30px 0;
          left: 0;
          z-index: 9;
        }
        .list-course {
          display: flex;
          flex-wrap: wrap;
        }
        .course-item {
          width: 420px;
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
      `}</style>
    </>
  );
};

export default EventTraining;
