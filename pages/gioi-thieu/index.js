import Footer from "../../src/components/footer";
import Head from "next/head";
import Menu from "../../src/components/menu";
import { ListExperts, ListItem } from "../../src/config";
const GioiThieu = () => {
  return (
    <>
      <Head>
        <title>Giới thiệu React Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div>
        <div className="container">
          <div className="box_introduce">
            <div className="introduce__left">
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
              <img src="./assets/images/GioiThieu.png" alt="" />
            </div>
          </div>
          <div className="box__company__scale">
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="40px"
                  width="40px"
                  src="./assets/images/member.png"
                  alt=""
                />
              </div>
              <p className="content">
                Quy mô 130 nhân sự. <br />
                Năm tới sẽ gấp đôi.
              </p>
            </div>
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="40px"
                  width="40px"
                  src="./assets/images/Japan.png"
                  alt=""
                />
              </div>
              <p className="content">
                Nhiều khách hàng lớn tại Nhật Bản.
                <br />
                Dự án làm không xuể.
              </p>
            </div>
            <div className="company__scale__item">
              <div className="item__img">
                <img
                  height="40px"
                  width="40px"
                  src="./assets/images/edit-curves.png"
                  alt=""
                />
              </div>
              <p className="content">
                Tốc độ phát triển 120%.
                <br />
                Đang chuẩn bị lên sàn.
              </p>
            </div>
          </div>
        </div>
        <div className="box_Pr_introduce">
          <div className="container">
            <div className="row_introduce">
              {ListItem &&
                ListItem.map((val) => (
                  <div className="item" key={val._id}>
                    <div className="item__img">
                      <img
                        width="100%"
                        height="100%"
                        src={"./assets/images/" + val.image}
                        alt=""
                      />
                    </div>
                    <div className="item__content">
                      <h2 className="item__content__title">{val.title}</h2>
                      <p className="item__content__content">{val.content}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="organizational-structure-title">
            Cơ cấu tổ chức &amp; các công ty thành viên
          </h2>
          <div className="box-organizational-structure"></div>
          <h2 className="organizational-structure-title">Đội ngũ chuyên gia</h2>
          <div className="box-team-of-experts">
            {ListExperts &&
              ListExperts.map((val) => (
                <div className="item-experts" key={val._id}>
                  <div className="item__img">
                    <img
                      width="110px"
                      height="110px"
                      style={{ borderRadius: "50%" }}
                      src={"./assets/images/" + val.avatar}
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
            <div className="box-find-us">
              <div className="find-us-left">
                <h1 className="find-us-title">Tìm chúng tôi</h1>
                <div style={{ display: "flex" }}>
                  <img
                    width="24px"
                    height="24px"
                    src="./assets/images/icont-map.png"
                  />
                  <p className="find-us-address">
                    Tầng 7, Golden Field Building, <br />
                    24 Nguyễn Cơ Thạch, Nam Từ Liêm, Hà Nội
                  </p>
                </div>
              </div>
              <div className="find-us-right">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1861.9714712447185!2d105.76455745792299!3d21.03496889649878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1634295837745!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        .box_introduce {
          margin: 15px 0;
          height: auto;
          width: 100%;
          display: flex;
          margin: 60px 0;
          justify-content: space-between;
        }
        .menu__item:nth-child(1) {
          border-bottom: none;
        }
        .menu__item:nth-child(2) {
          border-bottom: 3px solid #00daff;
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
        .organizational-structure-title {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .box-organizational-structure {
          height: 446px;
          margin: 30px 0;
          background-color: #c4c4c4;
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
        .box_Pr_introduce {
          margin: 30px 0;
          padding: 81px 0;
          justify-content: space-between;
          background: linear-gradient(
            180deg,
            #f4f6fa 0%,
            rgba(244, 246, 250, 0) 83.85%
          );
        }
        .row_introduce {
          display: flex;
          justify-content: space-between;
        }
        .item {
          width: 341px;
          height: 370px;
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        }
        .item__img {
          width: 100%;
          height: 171px;
        }
        .item__content {
          width: 100%;
          height: calc(370px - 171px);
          padding: 20px 0;
        }
        .item__content__title {
          border-left: 4px solid #0bbee7;
          font-weight: 600;
          font-size: 22px;
          line-height: 33px;
          letter-spacing: -0.02em;
          color: #25282b;
          padding: 0 20px;
        }
        .item__content__content {
          padding: 20px;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
          color: #52575c;
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
        .box-find-us {
          height: 340px;
          width: 100%;
          margin: 60px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .find-us-left {
          width: 280px;
        }
        .find-us-title {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .find-us-address {
          margin-left: 10px;
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .find-us-right {
          width: 677px;
          height: 340px;
        }

        footer {
          background: #f4f6fa;
          padding: 30px 0;
        }
      `}</style>
    </>
  );
};

export default GioiThieu;
