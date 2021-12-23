import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import Menu from "../../../src/components/menu";
import Footer from "../../../src/components/footer";
import { TextField } from "@mui/material";
import { Day, KEY_CAPTCHA, Month, phoneRegExp, Year } from "../../../src/config";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import PopupThanks from "../../../src/components/common/popupthanks";
import { post_register_candidates } from "../../../src/services/api";
const UngVienTiemNang = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [isShow, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthday: "",
      day: "",
      month: "",
      year: "",
      phone: "",
      file: "",
      content: "",
      link: "",
      title: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Sai định dạng Email")
        .required("Không được bỏ trống"),
      name: Yup.string().required("Không được bỏ trống"),
      phone: Yup.string()
        .matches(phoneRegExp, "Số điện thoại không đúng định dạng")
        .required("Không được bỏ trống"),

      file: Yup.mixed().required("Không được bỏ trống"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      const formData = new FormData();
      values.birthday = `${values.day}/${values.month}/${values.year}`;
      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.append("title", "ứng viên đăng ký tiềm năng");
      post_register_candidates(formData)
        .then((res) => {
          setShow(true);
          handleReset();
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },
  });

  const { setFieldValue } = formik;

  const handleReset = () => {
    setFieldValue("name", "");
    setFieldValue("email", "");
    setFieldValue("birthday", "");
    setFieldValue("month", "");
    setFieldValue("year", "");
    setFieldValue("day", "");
    setFieldValue("phone", "");
    setFieldValue("file", "");
    setFieldValue("link", "");
    setFieldValue("content", "");
    setFieldValue("title", "");
  };

  return (
    <>
      <Head>
        <title>Điền form ứng viên đăng ký tiềm năng</title>
        <link rel="icon" href="/assets/icon/icon_tab.png" />
      </Head>
      {isShow && (
        <PopupThanks
          show={isShow}
          onHide={() => setShow(false)}
          content1="React Plus sẽ liên hệ với bạn khi có vị trí phù hợp"
        />
      )}
      <Menu />
      <div className="main">
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
          <div className="box-form">
            <h2 className="text-center title-page">
              Đăng ký ứng viên tiềm năng
            </h2>
            <div className="mr-20"></div>
            <TextField
              label="Tên đầy đủ *"
              type="text"
              variant="standard"
              fullWidth
              name="name"
              id="standard-error-helper-text"
              error={formik.errors.email && formik.touched.email ? true : false}
              onChange={formik.handleChange}
              value={formik.values.name}
              helperText={formik.errors.name}
            />
            <div className="birtday">
              <div className="item">
                <label className="label-text">Ngày sinh</label>
              </div>
              <div className="item">
                <select
                  className="form-select form-select-custom"
                  defaultValue="Ngày"
                  name="day"
                  onChange={formik.handleChange}
                  value={formik.values.day}
                >
                  <option selected>Ngày</option>
                  {Day.map((value) => (
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

              <div className="item">
                <select
                  className="form-select form-select-custom"
                  defaultValue="Tháng"
                  name="month"
                  onChange={formik.handleChange}
                  value={formik.values.month}
                >
                  <option selected>Tháng</option>
                  {Month.map((value) => (
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
              <div className="item">
                <select
                  className="form-select form-select-custom"
                  defaultValue="Năm"
                  name="year"
                  onChange={formik.handleChange}
                  value={formik.values.year}
                >
                  <option selected>Năm</option>
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
            </div>
            <div className="birtday">
              <div className="from-email">
                <TextField
                  label="Email *"
                  type="email"
                  name="email"
                  variant="standard"
                  id="standard-error-helper-text"
                  error={formik.errors.email ? true : false}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  fullWidth
                  helperText={formik.errors.email}
                />
              </div>
              <div className="mr-20"></div>
              <div className="mr-20"></div>
              <div className="from-email">
                <TextField
                  label="Số điện thoại *"
                  id="standard-error-helper-text"
                  type="text"
                  name="phone"
                  variant="standard"
                  error={formik.errors.phone ? true : false}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  fullWidth
                  helperText={formik.errors.phone}
                />
              </div>
            </div>

            <div className="mr-60" />

            <div className="box-PostCV">
              <div className="PostCV-Left">
                <h6
                  className={
                    formik.errors.file ? "CV-text text-error" : "CV-test"
                  }
                >
                  CV
                </h6>
                <h6
                  className={
                    formik.errors.file
                      ? "CV-text-comment text-error"
                      : "CV-text-comment"
                  }
                >
                  {formik.values.file?.name
                    ? formik.values.file?.name
                    : formik.errors.file
                    ? formik.errors.file
                    : "Format được hỗ trợ: PNG, JPG, PDF"}
                </h6>
              </div>
              <div className="PostCV-Right">
                <button type="file" className="btn-outline">
                  <span className="btn-text">Tải lên</span>
                  <input
                    type="file"
                    name="file"
                    className="input_file"
                    id="file"
                    accept=".pdf, image/png, image/jpg"
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="mr-20" />
            <TextField
              label="Online Portfolio links"
              type="text"
              name="link"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.link}
            />
            <div className="mr-20" />
            <div className="mr-20" />
            <TextField
              label="Vị trí muốn ứng tuyển"
              name="title"
              type="text"
              variant="standard"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <div className="mr-20" />
            <textarea
              placeholder="Một vài lời nhắn dành cho chúng tôi (Không bắt buộc)"
              className="txtform"
              rows="4"
              cols="50"
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content}
            ></textarea>
            <div className="birtday">
              <div className="birtday-left">
                <ReCAPTCHA sitekey= {KEY_CAPTCHA} onChange={onChange} />
              </div>
              <div className="birtday-right">
                <button
                  className="btn btn-cancel"
                  type="reset"
                  onClick={handleReset}
                >
                  <span className="btn-text">Hủy</span>
                </button>
                <button className="btn btn-submit" type="submit">
                  <span className="btn-text">Gửi</span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <footer>
          <Footer />
        </footer>
      </div>
      <style jsx>{`
        .box-form {
          width: 794px;
          height: auto;
          margin: 60px auto;
        }
        .label-text {
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
          padding: 7px 5px;
        }
        .txtform:focus {
          border: none;
        }
        .item {
          position: relative;
        }
        .input_file {
          position: absolute;
          top: 3px;
          opacity: 0;

          left: 0;
          z-index: 7;
        }
        .fromdate {
          width: 190px;
          background: #f4f6fa;
          border-radius: 38px;
          padding: 7px 18px;
        }
        .birtday {
          margin-top: 50px;
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
          cursor: pointer;
          padding: 6px 30px;
          background-color: #f4f6fa;
          position: relative;
          overflow: hidden;
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
          opacity: 1;
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
        .btn-cancel:focus {
          border: 1px solid #0bbee7;
        }
        .btn-cancel,
        .btn-submit {
          padding: 7px 83px;
        }
        .mr-20 {
          margin-top: 20px;
        }
        .mr-60 {
          margin-top: 60px;
        }
        .mr-20-block {
          margin-top: 0px;
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
        .form-select-custom {
          width: 190px;
          display: block;
          -webkit-appearance: none;
          padding-left: 18px;
          border: none;
          background: #f4f6fa !important;
          height: 38px;
          border-radius: 38px;
        }
        .text-error {
          color: #d32f2f;
        }
        option {
          background: #f4f6fa;

          width: 190px;
        }

        @media screen and (max-width: 768px) {
          .title-page {
            font-size: 20px;
            width: 100%;
            margin: 10px auto;
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
          .btn + .btn {
            margin-right: 10px;
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

          footer {
            background: "#ffffff";
          }
          .box-form {
            width: 100%;
            height: auto;
            padding: 0 16px;
          }
          .birtday {
            flex-wrap: wrap;
            margin-top: 10px;
          }
          .from-email {
            width: 100%;
            margin: 10px 0;
          }
          .mr-20 {
            margin-top: 25px;
          }
          .item {
            width: 50%;
            height: 100%;
            margin: 10px 0;
          }
          .btn-submit {
            margin-left: 0;
          }
          .label-text {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default UngVienTiemNang;
