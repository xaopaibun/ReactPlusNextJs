import Menu from "../../src/components/menu";
import Head from "next/head";
import { ListAppliedPosition } from "../../src/config";
import Footer from "../../src/components/footer";
const Career = () => {
  return (
    <>
      <Head>
        <title>Tuyển dụng React Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">
        <Menu />
        <div className="header-center">
          <h3 className="title-career">React Plus Career</h3>
          <div className="contact">
            <div className="contact-phone">
              <div className="contact-phone-icon">
                <img src="./assets/icon/phone1.png" width={20} height={20} />
              </div>
              <div className="contact-phone-hotline">
                <p className="hotline">Hotline</p>
                <p className="phone-number">034 9177 306</p>
              </div>
            </div>
            <div
              style={{
                width: "1px",
                height: "100%",
                backgroundColor: "#FFFFFF",
                opacity: 0.5,
              }}
            ></div>
            <div className="contact-phone">
              <div className="contact-phone-icon">
                <img src="./assets/icon/mail1.png" width={20} height={20} />
              </div>
              <div className="contact-phone-hotline">
                <p className="hotline">Email</p>
                <p className="phone-number">huett@reactplus.com</p>
              </div>
            </div>
          </div>
          <button className="btnRegister">Đăng ký ứng viên tiềm năng</button>
        </div>
      </div>
      <div className="box-nominee">
        <div className="container">
          <h5 className="title">CAREER</h5>
          <h2 className="title2">Các vị trí đang tuyển</h2>
          <div className="list-applied-position">
            {ListAppliedPosition &&
              ListAppliedPosition.map((val) => (
                <div className="applied-position-item" key={val._id}>
                  <div className="applied-position-item-top">
                    <span className="tinh">
                      <img
                        src="./assets/icon/dinhvi.png"
                        width={11}
                        height={15}
                      />
                      Hà Nội
                    </span>
                    {val.loai === "full-time" ? (
                      <div className="full-time">Full-time</div>
                    ) : (
                      <div className="part-time">Part-time</div>
                    )}
                  </div>
                  <div className="applied-position-item-center">
                    {val.title}
                  </div>
                  <div className="applied-position-item-bottom">
                    <button className="btnmore">
                      <span>Xem chi tiết </span>
                      <img
                        className="btnmore__icon"
                        src="./assets/icon/muiten.png"
                      />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="box-loadmore">
            <button className="btnmorefull">
              <span>Tải thêm ...</span>
            </button>
          </div>
        </div>
      </div>
      <div className="box-nominee2">
        <div className="container">
          {/* <h5 className="title">CAREER</h5>
          <h2 className="title2">7 bước thành chuyên gia</h2> */}
          <img
            src="./assets/images/Group2111.png"
            alt=""
            width={"100%"}
            style={{ marginTop: "30px" }}
          />
          <div className="marginTopBottom">
            <h5 className="title">CAREER</h5>
            <h2 className="title2">3 bước vào đội ngũ</h2>
            <div className="join-the-team">
              <div className="join-the-team-item">
                <img src="./assets/images/img07.png" alt="" />
                <h4 className="join-the-team-content">
                  Ứng viên gửi hồ sơ ứng tuyển
                </h4>
              </div>
              <div className="join-the-team-item">
                <img src="./assets/images/img08.png" alt="" />
                <h4 className="join-the-team-content">
                  Phỏng vấn cùng HR và Project Manager
                </h4>
              </div>
              <div className="join-the-team-item">
                <img src="./assets/images/img09.png" alt="" />
                <h4 className="join-the-team-content">
                  Thoả thuận hợp đồng và hoàn thiện hồ sơ
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inputemail">
          <div className="input__content">
            <p className="input__content__title">
              Tham gia với chúng tôi, <br />
              đội ngũ React Plus
            </p>
            <div className="box-loadmore">
              <button className="btnmorefull">
                <span>Tham gia ngay</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .header {
          height: 410px;
          width: 100%;
          background-image: url("/assets/images/ReactPlusCareer.png");
        }
        .contact {
          color: #ffffff;
          display: flex;
          width: 100%;
          height: 46px;
          justify-content: space-around;
          align-items: center;
        }
        .contact-phone {
          display: flex;
          align-items: center;
        }
        .header-center {
          height: 275px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          width: 522px;
        }
        .title-career {
          font-weight: 600;
          text-align: center;
          margin-top: 70px;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .contact-phone-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hotline {
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
        }
        .phone-number {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .btnRegister {
          border: 1px solid #ffffff;
          box-sizing: border-box;
          border-radius: 40px;
          font-weight: 600;
          font-size: 14px;
          line-height: 32px;
          background-color: transparent;
          padding: 3px 23px;
          text-align: center;
          color: #ffffff;
        }
        .box-nominee {
          background-image: url("/assets/images/BG-career.png");
          height: auto;
          width: 100%;
          margin-bottom: 75px;
        }
        .title {
          font-weight: 600;
          font-size: 14px;
          text-align: center;
          padding-top: 50px;
          line-height: 21px;
          letter-spacing: 0.18em;
          color: #0bbee7;
        }
        .title2 {
          text-align: center;
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .list-applied-position {
          margin: 30px 0;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
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
        .applied-position-item {
          padding: 36px;
          background: #ffffff;
          box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          width: 349px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 255px;
          margin-bottom: 31px;
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
        .applied-position-item-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .applied-position-item-center {
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          color: #25282b;
        }
        .tinh {
          font-size: 14px;
          line-height: 21px;
          color: #8c97ac;
        }
        .part-time {
          background: rgba(245, 166, 35, 0.148721);
          border-radius: 5px;
          width: 76px;
          height: 30px;
          font-size: 13px;
          line-height: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #f5a623;
        }
        .full-time {
          background: rgba(15, 188, 73, 0.1);
          border-radius: 5px;
          width: 76px;
          height: 30px;
          font-size: 13px;
          line-height: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #0fbc49;
        }
        .btnmore:hover span {
          color: #03a3c8;
        }
        .btnmore:hover {
          border: 1px solid #03a3c8;
        }
        .box-loadmore {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .btnmorefull {
          width: 239px;
          height: 43px;
          box-sizing: border-box;
          border-radius: 44px;
          background: #0bbee7;
          border: none;
          transition: 0.5s;
        }
        .btnmorefull:hover {
          background: #03a3c8;
        }
        .btnmorefull span {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .box-nominee2 {
          height: auto;
          margin: 60px 0;
          width: 100%;
          background-image: url("/assets/images/BG-career.png");
        }
        .join-the-team {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .join-the-team-item {
          display: flex;
          width: 283px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .join-the-team-content {
          margin-top: 20px;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .marginTopBottom {
          margin-top: 30px;
        }
        .inputemail {
          width: 100%;
          margin: 30px 0;
          height: 211px;
          background-image: url("/assets/images/BGinput.png");
        }
        .input__content__title {
          padding: 25px 0;
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          text-align: center;
          color: #ffffff;
        }
      `}</style>
    </>
  );
};

export default Career;
