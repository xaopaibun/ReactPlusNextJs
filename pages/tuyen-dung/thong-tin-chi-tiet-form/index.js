import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import Menu from "../../../src/components/menu";
import Footer from "../../../src/components/footer";

const CareerForm = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <Head>
        <title>Điền form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <div className="box-form">
        <h2 className="text-center title-page">
          Chuyên viên chăm sóc khách hàng
        </h2>

        <input
          type="text"
          className="form-control txtform"
          placeholder="Tên đầy đủ"
        />
        <div className="birtday">
          <label className="label-text">Ngày sinh</label>
          <input
            type="text"
            className="form-control txtform fromdate"
            placeholder="Ngày"
          />{" "}
          <input
            type="text"
            className="form-control txtform fromdate"
            placeholder="Tháng"
          />
          <input
            type="text"
            className="form-control txtform fromdate"
            placeholder="Năm"
          />
        </div>
        <div className="birtday">
          <input
            type="text"
            className="form-control txtform from-email"
            placeholder="Email"
          />
          <input
            type="text"
            className="form-control txtform from-phone"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="box-PostCV">
          <div className="PostCV-Left">
            <h6 className="CV-text">CV</h6>
            <h6 className="CV-text-comment">
              Format được hỗ trợ: PNG, JPG, PDF
            </h6>
          </div>
          <div className="PostCV-Right">
            <button className="btn-outline">
              <span className="btn-text">Tải lên</span>
            </button>
          </div>
        </div>
        <input
          type="text"
          className="form-control txtform"
          placeholder="Online Portfolio links"
        />
        <textarea
          placeholder="Một vài lời nhắn dành cho chúng tôi (Không bắt buộc)"
          className="txtform"
          rows="4"
          cols="50"
        ></textarea>
        <div className="birtday">
          <div className="birtday-left">
            <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
          </div>
          <div className="birtday-right">
            <button className="btn-cancel">
              <span className="btn-text">Hủy</span>
            </button>
            <button className="btn-submit">
              <span className="btn-text">Gửi</span>
            </button>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        .box-form {
          width: 794px;
          height: auto;
          margin: 60px auto;
        }
        .label-text {
          margin-left: 15px;
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #25282b;
        }
        .title-page {
          font-weight: 600;
          font-size: 32px;
          line-height: 28px;
          color: #25282b;
        }
        .txtform {
          border: none;
          margin: 25px 0;
          width: 100%;
          border-bottom: 1px solid #e6e6e6;
          font-size: 14px;
          line-height: 24px;
          align-items: center;
          color: #25282b;
          padding: 7px 18px;
        }
        .txtform:focus {
          border: none;
        }
        .fromdate {
          width: 190px;
          background: #f4f6fa;
          border-radius: 38px;
          padding: 7px 18px;
        }
        .birtday {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .from-email,
        .from-phone {
          width: 385px;
        }
        .box-PostCV {
          width: 794px;
          height: 72px;
          padding: 12px 26px;
          background: #f4f6fa;
          display: flex;
          justify-content: space-between;
        }

        .PostCV-Right {
        }
        .CV-text {
          font-size: 14px;
          line-height: 24px;
          align-items: center;
          margin: 0;
          color: #25282b;
        }
        .CV-text-comment {
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #a0a4a8;
        }
        .btn-outline {
          border: 1px solid #0bbee7;
          box-sizing: border-box;
          border-radius: 38px;
          padding: 6px 30px;
          background-color: #f4f6fa;
        }
        .btn-text {
          font-weight: 600;
          font-size: 13px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #0bbee7;
        }
        input::placeholder {
          color: #25282b;
          opacity: 1; /* Firefox */
        }
        footer {
          padding: 30px 0;
          background-color: #f4f6fa;
        }
        .btn-cancel {
          border: 1px solid #0bbee7;
          box-sizing: border-box;
          border-radius: 38px;
          background: white;
        }
        .btn-cancel,
        .btn-submit {
          padding: 7px 83px;
        }
        .btn-submit {
          background: #0bbee7;
          border: none;
          border-radius: 38px;
          margin-left: 20px;
        }
        .btn-cancel .btn-text {
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #0bbee7;
        }
        .btn-submit .btn-text {
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #ffffff;
        }
      `}</style>
    </>
  );
};

export default CareerForm;
