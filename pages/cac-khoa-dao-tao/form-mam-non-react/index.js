import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import Menu from "../../../src/components/menu";
import Footer from "../../../src/components/footer";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";

const useStyles = makeStyles({
  input: {
    color: "#25282B",
  },
});

const Form = () => {
  const classes = useStyles();
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      year_of_birth: "",
      current_job: "",
      where_about_event: "",
      question: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Head>
        <title>Điền form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <form onSubmit={formik.handleSubmit}>
        <div className="box-form">
          <p className="text-center title-blue">Đăng ký tham gia sự kiện</p>
          <h2 className="text-center title-page">Khóa đào tạo mầm non React</h2>
          <div className="mr-30"></div>
          <div className="flex">
            <div className="width-50">
              <TextField
                label="Họ và Tên *"
                name="fullname"
                type="text"
                variant="standard"
                className={classes.input}
                onChange={formik.handleChange}
                value={formik.values.fullname}
                fullWidth
              />
            </div>
            <div className="width-50">
              <TextField
                label="Email *"
                name="email"
                type="email"
                variant="standard"
                className={classes.input}
                onChange={formik.handleChange}
                value={formik.values.email}
                fullWidth
              />
            </div>
          </div>
          <div className="mr-30"></div>
          <div className="birtday">
            <label className="label-text">Năm sinh</label>
            <input
              type="text"
              className="form-control txtform fromdate"
              placeholder="Năm"
              name="year_of_birth"
            />
          </div>
          <TextField
            label="Công việc hiện tại của bạn * "
            type="text"
            variant="standard"
            fullWidth
            name="current_job"
            onChange={formik.handleChange}
            value={formik.values.current_job}
          />
          <div className="mr-30"></div>
          <TextField
            label="Bạn biết tới sự kiện này từ đâu"
            type="text"
            variant="standard"
            fullWidth
            name="where_about_event"
            onChange={formik.handleChange}
            value={formik.values.where_about_event}
          />
          <div className="mr-30"></div>
          <textarea
            placeholder="Bạn có câu hỏi gì muốn gửi tới diễn giả"
            className="txtform"
            name="question"
            onChange={formik.handleChange}
            value={formik.values.question}
            rows="4"
            cols="50"
          ></textarea>

          <div className="flex">
            <div className="birtday-left">
              <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
            </div>
            <div className="birtday-right">
              <button className="btn-cancel" type="button">
                <span className="btn-text">Hủy</span>
              </button>
              <button className="btn-submit" type="submit">
                <span className="btn-text">Gửi</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .width-50 {
          width: 49%;
          height: auto;
        }
        .title-blue {
          color: #0bbee7;
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .box-form {
          width: 794px;
          height: auto;
          margin: 60px auto;
        }
        .mr-30 {
          margin-top: 30px;
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
        .fromdate,
        .form-select {
          margin-left: 60px;
          width: 190px;
          background: #f4f6fa;
          border-radius: 38px;
          padding: 7px 18px;
        }
        .birtday {
          display: flex;
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

export default Form;
