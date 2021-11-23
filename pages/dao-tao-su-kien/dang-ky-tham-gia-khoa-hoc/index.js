import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import Menu from "../../../src/components/menu";
import Footer from "../../../src/components/footer";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import * as Yup from "yup";
import { Field, useFormik, FormikProvider } from "formik";
import PopupThanks from "../../../src/components/common/popupthanks";
import { useState } from "react";
import { post_register_course } from "../../../src/services/api";
import { Day, Month, phoneRegExp, Year } from "../../../src/config";
const language = ["Tiếng Anh", "Tiếng Nhật", "Ngôn ngữ khác"];
const sex = ["Nam", "Nữ", "Khác"];
const programming_language = [
  "Javascript",
  "ReactJS",
  "ReactNative",
  "NodeJS",
  "HTML, CSS",
  "PHP",
  "Ruby",
  "Python",
  "iOS",
  "Java",
  "Khác",
];
const useStyles = makeStyles({
  input: {
    color: "black",
  },
});

const Form_Tham_Gia_Khoa_Hoc = () => {
  const classes = useStyles();
  const [isShow, setShow] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthday: "",
      phone: "",
      where_learn: "",
      experience: "",
      language: "",
      certificate: "",
      program_language: "",
      file: "",
      day: "",
      month: "",
      year: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Sai định dạng Email")
        .required("Không được bỏ trống"),
      day: Yup.string().required("Day không được bỏ trống"),
      month: Yup.string().required("Tháng không được bỏ trống"),
      year: Yup.string().required("Năm không được bỏ trống"),
      name: Yup.string().required("Không được bỏ trống"),
      phone: Yup.string()
        .matches(phoneRegExp, "Số điện thoại không đúng định dạng")
        .required("Không được bỏ trống"),
      where_learn: Yup.string().required("Không được bỏ trống"),
      file: Yup.mixed().required("Không được bỏ trống"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      const formData = new FormData();
      values.birthday = `${values.day}/${values.month}/${values.year}`;
      if (values.program_language != "") {
        values.program_language = values.program_language?.toString();
      }
      if (values.language != "") {
        values.language = values.language?.toString();
      }

      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.append("title", "Đăng ký tham gia khóa học");
      post_register_course(formData)
        .then((res) => {
          handleReset();
          setShow(true);
        })
        .then((err) => console.log(err));
    },
  });
  const { setFieldValue, handleSubmit } = formik;
  const handleReset = () => {
    setFieldValue("name", "");
    setFieldValue("email", "");
    setFieldValue("birthday", "");
    setFieldValue("month", "");
    setFieldValue("year", "");
    setFieldValue("day", "");
    setFieldValue("sex", "");
    setFieldValue("phone", "");
    setFieldValue("file", "");
    setFieldValue("where_learn", "");
    setFieldValue("experience", "");
    setFieldValue("certificate", "");
    setFieldValue("program_language", "");
  };
  return (
    <>
      <Head>
        <title>Form đăng ký tham gia khóa học</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isShow && (
        <PopupThanks
          show={isShow}
          onHide={() => setShow(false)}
          content1="Cảm ơn bạn đã quan tâm tới khóa học ReactJS & React Native bên mình nhé!"
          content2="Hy vọng chúng mình sớm được gặp nhau để cùng phát triển nè!!!"
        />
      )}
      <Menu />
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <div className="container">
            <div className="box-form">
              <h2 className="text-center title-page">
                React Plus chào bạn thân mến
              </h2>
              <div className="mr-30"></div>
              <p className="content-title">
                Cảm ơn bạn đã quan tâm tới khóa học ReactJS & React Native bên
                mình nhé!
                <br /> Bạn vui lòng điền các thông tin dưới đây để ReactPlus
                hiểu hơn về bạn và có chương trình đào tạo phù hợp cho bạn nhé.
                Hy vọng chúng mình sớm được gặp nhau để cùng phát triển nè!!!
              </p>
              <div className="mr-30"></div>
              <div className="flex">
                <div className="width-50">
                  <TextField
                    label="Họ và Tên *"
                    name="name"
                    type="text"
                    variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    fullWidth
                    id="standard-error-helper-text"
                    error={formik.errors.name ? true : false}
                    helperText={formik.errors.name}
                  />
                </div>
                <div className="mr-30-mobile"></div>
                <div className="width-50">
                  <TextField
                    label="Email *"
                    name="email"
                    type="email"
                    variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    fullWidth
                    id="standard-error-helper-text"
                    error={formik.errors.email ? true : false}
                    helperText={formik.errors.email}
                  />
                </div>
              </div>
              <div className="mr-30"></div>
              <div className="birtday">
                <div className="item">
                  <label className="label-text">Ngày sinh</label>
                </div>
                <div className="item">
                  <select
                    className="form-select form-select-custom"
                    name="day"
                    onChange={formik.handleChange}
                    value={formik.values.day}
                  >
                    <option value="Ngày" selected>
                      Ngày
                    </option>
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
                    name="month"
                    onChange={formik.handleChange}
                    value={formik.values.month}
                  >
                    <option value="Tháng" selected>
                      Tháng
                    </option>
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
                    name="year"
                    onChange={formik.handleChange}
                    value={formik.values.year}
                  >
                    <option value="Năm" selected>
                      Năm
                    </option>
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
              </div>{" "}
              <p className="text-error">
                {formik.errors.day || formik.errors.month || formik.errors.year}
              </p>
              <div className="mr-30"></div>
              <div className="flex">
                <div className="width-50">
                  <TextField
                    label="Số điện thoại  *"
                    name="phone"
                    type="text"
                    variant="standard"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    fullWidth
                    id="standard-error-helper-text"
                    error={formik.errors.phone ? true : false}
                    helperText={formik.errors.phone}
                  />
                </div>
                <div className="mr-30"></div>
                <div className="width-50">
                  <div className="flex flexGT">
                    <span className="txtGT">Giới tính</span>
                    {sex.map((val, index) => {
                      return (
                        <div className="flex flexGT" key={index}>
                          <Field
                            type="radio"
                            style={{ width: "24px", height: "24px" }}
                            name="sex"
                            value={val}
                          />
                          <label className="label">{val}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mr-30"></div>
              <TextField
                label="Bạn đã học công nghệ thông tin ở đâu  * "
                type="text"
                variant="standard"
                fullWidth
                name="where_learn"
                onChange={formik.handleChange}
                value={formik.values.where_learn}
                id="standard-error-helper-text"
                error={formik.errors.where_learn ? true : false}
                helperText={formik.errors.where_learn}
              />
              <div className="mr-30"></div>
              <TextField
                label="Kinh nghiệm làm việc của bạn "
                type="text"
                variant="standard"
                fullWidth
                name="experience"
                onChange={formik.handleChange}
                value={formik.values.experience}
              />
              <div className="mr-30"></div>
              <div className="flex NN">
                <span className="txtGT">Ngoại ngữ hiện có</span>
                {language.map((val, index) => {
                  return (
                    <div className="flex" key={index}>
                      <Field
                        type="checkbox"
                        name="language"
                        value={val}
                        style={{ width: "24px", height: "24px" }}
                      />

                      <label htmlFor="html" className="label">
                        {val}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="mr-30"></div>
              <TextField
                label="Hãy liệt kê những bằng cấp, chứng chỉ bạn có"
                type="text"
                variant="standard"
                fullWidth
                name="certificate"
                onChange={formik.handleChange}
                value={formik.values.certificate}
              />
              <div className="mr-30"></div>
              <div className="flex1">
                <div className="width-50">
                  <p>Ngôn ngữ lập trình đã từng học hoặc làm việc</p>
                </div>
                <div className="width-50">
                  <div className="row">
                    {programming_language.map((val, index) => {
                      return (
                        <div key={index} className="row-item">
                          <Field
                            type="checkbox"
                            name="program_language"
                            value={val}
                            style={{ width: "24px", height: "24px" }}
                          />

                          <label htmlFor="html" className="label">
                            {val}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mr-30"></div>
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
                      accept="application/pdf, image/*"
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className="mr-30"></div>
              <div className="flex">
                <div className="birtday-left">
                  <ReCAPTCHA
                    sitekey="6LeO3lIdAAAAAKwOss9ull09gDJg3Riud3WmSpNP"
                    onChange={onChange}
                  />
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
          </div>
        </form>
      </FormikProvider>
      <footer>
        <Footer />
      </footer>
      <style jsx>{`
        * {
          color: "#25282b";
        }
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .flex1 {
          display: flex;
        }
        .row {
          display: flex;
          align-items: center;
        }
        .row-item {
          width: 50%;
          display: flex;
          align-items: center;
          margin: 6px 0;
        }
        .content-title {
          font-size: 14px;
          width: 860px;
          line-height: 20px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #52575c;
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
        .width-50 {
          width: 49%;
          height: auto;
        }
        .item {
          position: relative;
        }
        .label {
          color: #000000;
          font-size: 14px;
          line-height: 24px;
          margin-left: 10px;
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
        input.radio {
          width: 24px !important;
          height: 24px !important;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
        }

        .radio:checked {
          background: #0bbee7;
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
        .input_file {
          position: absolute;
          top: 3px;
          opacity: 0;

          left: 0;
          z-index: 7;
        }

        .NN_right {
          display: none;
        }
        .text-error {
          color: #d32f2f;
          font-size: 13px;
        }
        @media screen and (max-width: 768px) {
          .content-title {
            width: 100%;
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
          }
          .btn-outline {
            margin-top: 18px;
            min-width: 105px;
          }
          .btn {
            width: 50%;
            display: flex;

            flex-direction: column;
            align-items: center;
          }
          .btn-cancel,
          .btn-submit {
            padding: 10px 0;
          }
          .box-form {
            width: 100%;
          }
          .title-page {
            font-size: 20px;
            width: 100%;
            margin: 10px auto;
          }
          .flex {
            flex-direction: column;
          }
          .mr-30-mobile {
            margin-top: 30px;
          }
          .width-50 {
            width: 100%;
          }
          .item {
            width: 50%;
            height: 100%;
            margin: 10px 0;
          }
          .birtday {
            flex-wrap: wrap;
            width: 100%;
          }
          .form-select {
            margin-left: 10px !important;
          }
          .icont_select {
            position: absolute !important;
            top: 16px !important;
            right: 35px !important;
            z-index: 20 !important;
          }
          .label-text {
            font-size: 16px;
          }
          .flexGT {
            flex-direction: row;
          }
          .flex1 {
            flex-direction: column;
          }
          .box-PostCV {
            width: 100%;
          }
          .NN {
            flex-direction: row;
          }
          .NN .txtGT {
            display: block;
            width: 50%;
          }
          .NN_right {
            display: block;
            width: 50%;
          }
          .NN_right .flex {
            width: 100%;
            flex-direction: row;
          }
          .NN > .flex {
            display: none;
          }
          .btn-outline {
            margin-top: 9px;
          }
          .birtday-right {
            display: flex;
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Form_Tham_Gia_Khoa_Hoc;
