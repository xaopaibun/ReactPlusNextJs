import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import Menu from "../../../src/components/menu";
import Footer from "../../../src/components/footer";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import PopupThanks from "../../../src/components/common/popupthanks";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { post_register_event } from "../../../src/services/api";
import { Year } from "../../../src/config";
import { get_detal_page_tranning } from "../../../src/services/api";
const useStyles = makeStyles({
  input: {
    color: "#25282B",
  },
});

const Form = () => {
  const classes = useStyles();
  const [isShow, setShow] = useState(false);
  const [title, setTitle] = useState("");
  useEffect(async () => {
    const res = await get_detal_page_tranning();
    const data = await res.data;
    setTitle(data.title);
  }, []);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      year: "",
      job: "",
      title: "",
      source: "",
      question: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Sai định dạng Email")
        .required("Không được bỏ trống"),
      year: Yup.string().required("Không được bỏ trống"),
      job: Yup.string().required("Không được bỏ trống"),
      name: Yup.string().required("Không được bỏ trống"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      post_register_event({ ...values, title: title })
        .then((res) => {
          setShow(true);
          handleReset();
        })
        .catch((err) => console.log(err));
    },
  });
  const handleReset = () => {
    setFieldValue("name", "");
    setFieldValue("email", "");

    setFieldValue("year", "");
    setFieldValue("job", "");
    setFieldValue("source", "");
    setFieldValue("question", "");
  };
  return (
    <>
      <Head>
        <title>Điền form tham gia sự kiện</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isShow && (
        <PopupThanks
          show={isShow}
          onHide={() => setShow(false)}
          content1="Cảm ơn bạn đã đăng ký tham gia sự kiện! React Plus sẽ gửi thông tin xác nhận tới email của bạn sớm! "
        />
      )}
      <Menu />
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="box-form">
            <p className="text-center title-blue">Đăng ký tham gia sự kiện</p>
            <h2 className="text-center title-page">{title}</h2>
            <div className="mr-30"></div>
            <div className="flex">
              <div className="width-50">
                <TextField
                  label="Họ và Tên *"
                  name="name"
                  type="text"
                  variant="standard"
                  className={classes.input}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  id="standard-error-helper-text"
                  error={
                    formik.errors.name && formik.touched.name ? true : false
                  }
                  helperText={formik.errors.name}
                  fullWidth
                />
              </div>
              <div className="mr-30-block"></div>
              <div className="width-50">
                <TextField
                  label="Email *"
                  name="email"
                  onChange={formik.handleChange}
                  variant="standard"
                  className={classes.input}
                  value={formik.values.email}
                  fullWidth
                  id="standard-error-helper-text"
                  error={
                    formik.errors.email && formik.touched.email ? true : false
                  }
                  helperText={formik.errors.email}
                />
              </div>
            </div>
            <div className="mr-30"></div>
            <div className="birtday">
              <label className="label-text">Năm sinh</label>
              {/* <input
                type="text"
                className="form-control txtform fromdate"
                placeholder="Năm"
                name="year"
                onChange={formik.handleChange}
                value={formik.values.year}
              /> */}
              <div className="item">
                <select
                  class="form-select form-select-custom"
                  defaultValue="Năm"
                  name="year"
                  onChange={formik.handleChange}
                  value={formik.values.year}
                >
                  <option selected>Năm </option>
                  {Year.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
                <img
                  className="icont_select"
                  width={"8px"}
                  height={"6.65px"}
                  src="/assets/icon/select.png"
                />
              </div>
              {formik.errors.year && formik.touched.year ? (
                <p style={{ color: "#d32f2f", fontSize: "12px" }}>
                  {formik.errors.year}
                </p>
              ) : null}
            </div>
            <div className="mr-30"></div>
            <TextField
              label="Công việc hiện tại của bạn * "
              type="text"
              variant="standard"
              fullWidth
              name="job"
              onChange={formik.handleChange}
              value={formik.values.job}
              id="standard-error-helper-text"
              error={formik.errors.job && formik.touched.job ? true : false}
              helperText={formik.errors.job}
            />
            <div className="mr-30"></div>
            <TextField
              label="Bạn biết tới sự kiện này từ đâu"
              type="text"
              variant="standard"
              fullWidth
              name="source"
              onChange={formik.handleChange}
              value={formik.values.source}
              id="standard-error-helper-text"
              error={
                formik.errors.source && formik.touched.source ? true : false
              }
              helperText={formik.errors.source}
            />
            <div className="mr-30"></div>
            <textarea
              placeholder="Bạn có câu hỏi gì muốn gửi tới diễn giả"
              className="txtform"
              name="question"
              onChange={formik.handleChange}
              value={formik.values.question}
              id="standard-error-helper-text"
              error={
                formik.errors.question && formik.touched.question ? true : false
              }
              helperText={formik.errors.question}
              rows="4"
              cols="50"
            ></textarea>

            <div className="flex">
              <div className="birtday-left">
                <ReCAPTCHA sitekey="6LeO3lIdAAAAAMc2acHqnxHYr41NB9cQK9HESnMG" onChange={onChange} />
              </div>
              <div className="birtday-right">
                <button
                  className="btn-cancel"
                  type="button"
                  onClick={handleReset}
                >
                  <span className="btn-text">Hủy</span>
                </button>
                <button className="btn-submit" type="submit">
                  <span className="btn-text">Gửi</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
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
        .mr-30-block {
          display: none;
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
          margin-top: 50px;
        }
        .label-text {
          font-size: 14px;
          line-height: 24px;
          margin-right: 20px;
          display: flex;
          align-items: center;
          color: #25282b;
        }
        .title-page {
          font-weight: 600;
          font-size: 30px;
          line-height: 48px;
          color: #25282b;
        }
        .item {
          position: relative;
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
          padding: 7px 1px;
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
          margin: 8px 0;
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
        @media screen and (max-width: 768px) {
          .flex {
            flex-direction: column;
          }
          .box-PostCV {
            width: 100%;
            padding: 12px 16px;
            height: 93px;
          }
          .birtday-right {
            display: flex;
            width: 100%;
            margin-top: 30px;
            justify-content: space-between;
          }
          .btn-outline {
            margin-top: 18px;
            min-width: 105px;
          }

          .btn {
            width: 45%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .btn-cancel,
          .btn-submit {
            padding: 10px 0;
          }
          .item {
            width: 50%;
            height: 100%;
            margin: 10px 0;
          }
          .title-page {
            font-size: 20px;
            line-height: 28px;
            width: 100%;
            margin: 5px auto;
          }
          .box-form {
            width: 100%;
          }
          .width-50 {
            width: 100%;
            margin: 6px 0;
          }
          .mr-30-block {
            display: block;
          }
          .birtday-right {
            margin-top: 18px;
          }
          .btn-submit {
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Form;
