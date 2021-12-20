import Head from "next/head";
import Link from "next/link";
import Menu from "../../src/components/menu";
import Footer from "../../src/components/footer";
import { useRouter } from "next/router";
import { get_job_concerning, get_text_job } from "../../src/services/api";
import { useEffect, useState } from "react";
const CareerDetal = () => {
  const [data, setdata] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  const handleSubmit = (slug) =>
    router.push(`/tuyen-dung/form-tuyen-dung/${slug}`);
  const handleTiemNang = () =>
    router.push("/tuyen-dung/dang-ky-ung-vien-tiem-nang");
  useEffect(async () => {
    if (slug) {
      const [_get_text_job, _get_job_concerning] = await Promise.all([
        get_text_job(slug),
        get_job_concerning(),
      ]);
      const data_job = await Promise.all([
        _get_text_job.data,
        _get_job_concerning.data,
      ]);
      console.log(data_job);
      setdata(data_job);
    }
  }, [slug]);
  return (
    <>
      <Head>
        <title>Chi Tiết Tuyển dụng React Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header">
        <Menu isColor={true} slug={slug} />
        <div className="header-center">
          <h3 className="title-career">React Plus Career</h3>
          <div className="contact">
            <div className="contact-phone">
              <div className="contact-phone-icon">
                <img src="/assets/icon/phone1.png" width={20} height={20} />
              </div>
              <div className="contact-phone-hotline">
                <p className="hotline">Hotline</p>
                <a className="phone-number" tel={"0349177306"}>
                  034 9177 306
                </a>
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
                <img src="/assets/icon/mail1.png" width={20} height={20} />
              </div>
              <div className="contact-phone-hotline">
                <p className="hotline">Email</p>
                <a className="phone-number" href="mailto:huett@reactplus.com">
                  huett@reactplus.com
                </a>
              </div>
            </div>
          </div>
          <button className="btnRegister" onClick={handleTiemNang}>
            Đăng ký ứng viên tiềm năng
          </button>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <div className="box-back">
            <div
              className="btn-back"
              onClick={() => router.push("/tuyen-dung")}
            >
              <img
                src="/assets/icon/arrow-sm-right4.png"
                width={24}
                height={24}
              />
            </div>
            <p className="btn-back-text"> Quay lại</p>
          </div>

          <div className="content-detail">
            <div className="content-detail-left">
              <div className="applied-position-item-top">
                <span className="tinh">
                  <img
                    src="/assets/icon/dinhvi.png"
                    style={{ marginRight: "8px", objectFit: "unset" }}
                    width={11}
                    height={15}
                  />{" "}
                  {data[0]?.address}
                </span>
                {data[0]?.type_recruitment === "full_time" ? (
                  <div className="full-time">Full-time</div>
                ) : (
                  <div className="part-time">Part-time</div>
                )}
              </div>

              <h1 className="title-detail">{data[0]?.title}</h1>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: data[0]?.content,
                }}
              />
              <button className="btnJoin" onClick={() => handleSubmit(slug)}>
                <span>Ứng tuyển vị trí này</span>
              </button>
            </div>

            <div className="content-detail-right">
              <button className="btnJoin" onClick={() => handleSubmit(slug)}>
                <span>Ứng tuyển vị trí này</span>
              </button>
              <h3 className="list-title">Job liên quan</h3>
              {data[1]?.map((val) => {
                return (
                  <div className="job-item" key={val.id}>
                    <div className="border-blue " />
                    <div className="job-item-content">
                      <Link href={`/tuyen-dung/chi-tiet-form/${val.url_seo}`}>
                        <a className="job-item-text">{val.title}</a>
                      </Link>

                      <h4 className="job-item-address"> {val.address} </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>{`
        .header {
          height: 410px;
          width: 100%;
          position: sticky;
          top: -334px;
          z-index: 19999;
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
        .contact .contact-phone:nth-child(1) {
          width: 200px;
        }
        .contact .contact-phone:nth-child(2) {
          width: 230px;
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
          margin-top: 50px;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .contact-phone-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-image: url("/assets/icon/Ellipse204.png");
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hotline {
          font-size: 14px;
          line-height: 21px;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .phone-number {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          letter-spacing: -0.02em;
          margin: 0;
          color: #ffffff;
          text-decoration: none;
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
        .content {
          margin: 30px 0;
        }
        .btnRegister:hover {
          transition: 0.3s;
          background: rgba(255, 255, 255, 0.1);
        }
        .box-back {
          display: flex;
        }
        .container {
          margin-top: 50px;
        }
        .btn-back {
          background-color: #f4f6fa;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          cursor: pointer;
        }
        .btn-back-text {
          font-weight: 600;
          font-size: 12px;
          margin-left: 10px;
          line-height: 24px;
          color: #25282b;
        }
        .content-detail {
          width: 100%;
          height: auto;
          display: flex;
          margin-top: 10px;
          margin-bottom: 50px;
        }
        .content-detail-left {
          border-top: 1px solid #ebebeb;

          padding: 33px 0;
          border-bottom: 1px solid #ebebeb;
          width: 75%;
        }
        .content-detail-right {
          margin-left: 50px;
          width: 25%;
        }
        ul {
          list-style-image: url("/assets/images/point-blue.png");
        }
        .list-title {
          margin: 20px 0;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .list-item {
          font-size: 13px;
          line-height: 30px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .title-detail {
          font-weight: 600;
          font-size: 28px;
          line-height: 28px;
          color: #25282b;
        }
        .btnJoin {
          width: 252px;
          height: 46px;
          box-sizing: border-box;
          border-radius: 40px;
          background: #0bbee7;
          border: none;
          transition: 0.5s;
        }
        .btnJoin span {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .btnJoin:hover {
          background: #03a3c8;
        }
        .border-blue {
          margin-top: 2px;
          width: 3px;
          height: 18px;
          background: #0bbee7;
        }
        .job-item {
          display: flex;
          margin: 10px 0;
        }
        .job-item-content {
          margin-left: 10px;
        }
        .job-item-text {
          font-weight: 600;
          font-size: 13px;
          line-height: 20px;
          color: #25282b;
          text-decoration: none;
        }
        .job-item-address {
          font-size: 13px;
          line-height: 19px;
          color: #8c97ac;
        }
        .applied-position-item-top {
          width: 300px;
          margin-bottom: 28px;
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
        @media screen and (max-width: 768px) {
          .header {
            height: 375px;
            top: -315px;
          }
          .header-center {
            width: 100%;
          }
          .title-career {
            font-size: 22px;
          }
          .phone-number {
            font-size: 14px;
          }
          .applied-position-item-top {
            width: 100%;
          }
          .title-detail {
            font-size: 20px;
            line-height: 28px;
          }
          .content-detail {
            display: block;
          }
          .content-detail-left,
          .content-detail-right {
            width: 100%;
          }
          .content-detail-right {
            margin-left: 0;
          }
          .btnJoin {
            display: block;
            margin: 0 auto;
          }
          .content-detail-right .btnJoin {
            display: none;
          }
          .contact {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

// export async function getServerSideProps(slug) {
//   const [_get_text_job, _get_job_concerning] = await Promise.all([
//     get_text_job(slug),
//     get_job_concerning(),
//   ]);
//   const data = await Promise.all([
//     _get_text_job.data,
//     _get_job_concerning.data,
//   ]);

//   return {
//     props: {
//       data: data,
//     },
//   };
// }

export default CareerDetal;
