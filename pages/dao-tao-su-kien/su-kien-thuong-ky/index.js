import Footer from "../../../src/components/footer";
import Head from "next/head";
import Menu from "../../../src/components/menu";
import { ListExperts } from "../../../src/config";
import { useRouter } from "next/router";
import {
  get_detal_page_tranning,
  get_timeline_event,
  URL,
} from "../../../src/services/api";
import SlideItem from "../../../src/components/common/slideitem/SlideItem";

const RegularEvent = ({ data }) => {
  const router = useRouter();
  const handleRegistration = () =>
    router.push("/dao-tao-su-kien/form-tham-gia-su-kien");
  return (
    <>
      <Head>
        <title>Các sự kiện thường kỳ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="image-page">
        <img
          src="../assets/images/Khoa-Dao-Tao-React-Plus.png"
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="container">
        <div className="mr-30">
          <SlideItem TimeLineEvent={data.data_timeline_event} />
        </div>
      </div>

      <div className="container center-content">
        <div className="box-icont">
          <a
            className="icont"
            target="_blank"
            href={`https://www.facebook.com/sharer.php?u=http://103.237.145.33:5000/cac-khoa-dao-tao/su-kien-thuong-ky`}
          >
            <img src="/assets/icon/fb-black.png" />
          </a>
          <div className="icont">
            <img src="/assets/icon/in-black.png" />
          </div>
          <div className="icont">
            <img src="/assets/icon/dinh-kem.png" />
          </div>
        </div>
        <div className="box-content">
          <div className="address">
            <span className="address-text">
              <img src="../assets/icon/dinhvi-blue.png" className="img-icont" />
              {data.data_detal_page_tranning?.address}
            </span>
            <span className="address-text">
              <img src="../assets/icon/time.png" className="img-icont" />
              {data.data_detal_page_tranning?.start_date_string} -{" "}
              {data.data_detal_page_tranning?.to_date_string}
            </span>
          </div>
          <h2 className="title-page">{data.data_detal_page_tranning?.title}</h2>
          <img
            className="img_content"
            width="100%"
            src={`${URL}${data.data_detal_page_tranning?.cover_image.url}`}
          />
          <h3 className="title">Nội dung sự kiện</h3>
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: data.data_detal_page_tranning.content,
            }}
          ></div>
          <h3 className="title">Diễn giả</h3>
          <div className="box-team-of-experts">
            {data?.data_detal_page_tranning?.members.map((val) => (
              <div className="item-experts" key={val.id}>
                <div className="item__img">
                  <img
                    width="110px"
                    height="110px"
                    style={{ borderRadius: "50%" }}
                    src={`${URL}${val.image.url}`}
                    alt={val.name}
                  />
                </div>
                <div className="item__content">
                  <h3 className="name-experts">{val.name}</h3>
                  <div
                    className="content-experts"
                    dangerouslySetInnerHTML={{
                      __html: val.note,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="btnJoin" onClick={handleRegistration}>
            <span>Đăng ký tham gia</span>
          </button>
        </div>
        <div className="box-icon"></div>
      </div>

      <div className="event-is-happening">
        <div className="container">
          <h3 className="title0">Các sự kiện đã diễn ra</h3>
          <div className="list-posts">
            <div className="post-item">
              <img
                src="../assets/images/img39.png"
                height={"193px"}
                width={"340px"}
              />
              <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
              <a href="" className="post-title">
                Khoá đào tạo mầm non React{" "}
              </a>
            </div>

            <div className="post-item">
              <img
                src="../assets/images/img40.png"
                height={"193px"}
                width={"340px"}
              />
              <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
              <a href="" className="post-title">
                Talkshow: Ứng dụng React trong ABC giúp cho BCD{" "}
              </a>
            </div>

            <div className="post-item">
              <img
                src="../assets/images/img41.png"
                height={"193px"}
                width={"340px"}
              />
              <h5 className="content-review-date">01/10/2021 - 28/11/2021</h5>
              <a href="" className="post-title">
                Khoá đào tạo mầm non React{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "39px" }} />
      <Footer />
      <style jsx>{`
        .image-page {
          height: 430px;
          width: 100%;
        }
        .event-item {
          height: 100%;
          width: 33%;
        }
        .box-circle {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 999;
        }
        .circle {
          margin-top: 2px;
          width: 20px;
          height: 20px;
          background: #d2d1d1;
          border: 2px solid #ffffff;
          box-sizing: border-box;
          border-radius: 50%;
          margin: 3px auto;
        }
        .circle-active {
          background: #0bbee7;
        }
        .text-active {
          color: #0bbee7 !important;
          font-weight: 600;
        }
        .list-events {
          overflow-x: scroll;
          margin-top: -50px;
          padding-top: 70px;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 268px;
          background: #ffffff;
          box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.05);
        }
        .event-item-title {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .event-item-content {
          font-size: 13px;
          line-height: 18px;
          text-align: center;
          width: 225px;
          margin: auto;
          letter-spacing: -0.02em;
          color: #52575c;
          white-space: pre-wrap;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        }
        .center-content {
          display: flex;
          margin: 50px auto;
        }
        .box-icont {
          width: 32px;
        }
        .box-content {
          width: 741px;
          margin: 0 auto;
        }
        .title-page {
          font-weight: 600;
          font-size: 28px;
          line-height: 42px;
          color: #25282b;
          margin: 20px 0;
        }
        .icont {
          width: 32px;
          height: 32px;
          border: 1px solid #ebebeb;
          box-sizing: border-box;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4px 0;
          cursor: pointer;
        }
        .title {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
          padding-left: 10px;
          margin: 32px 0 10px 0;
          border-left: 4px solid #0bbee7;
        }
        .title0 {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
          padding-left: 10px;
          margin: 10px 0;
        }
        .text {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #25282b;
        }
        .img-icont {
          margin-right: 10px;
        }
        .address-text {
          font-size: 13px;
          line-height: 19px;
          color: #25282b;
          margin-right: 30px;
        }
        .box-team-of-experts {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 30px 0;
        }
        .title_teaching_staff {
          font-weight: 600;
          font-size: 28px;
          line-height: 42px;
          letter-spacing: -0.02em;
          text-align: center;
          font-size: 32px;
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
        .post-item {
          width: 30%;
        }
        .content-experts {
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .btnJoin {
          width: 252px;
          height: 46px;
          box-sizing: border-box;
          border-radius: 40px;
          background: #0bbee7;
          border: none;
          display: block;
          margin: 0 auto;
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
        .event-is-happening {
          width: 100%;
          background: #f4f6fa;
          margin: 20px 0;
          height: 424px;
          padding: 42px;
          box-sizing: border-box;
        }
        .list-posts {
          display: flex;
          justify-content: space-between;
        }

        .content-review-date {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #a0a4a8;
          margin-top: 10px;
        }
        .content-review-title {
          font-weight: 600;
          font-size: 32px;
          line-height: 48px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .post-title {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #25282b;
          text-decoration: none;
        }
        .post-title:hover {
          color: #0bbee7;
        }
        .img_content {
          width: 100%;
          height: 294px;
        }
        .mr-30 {
          padding: 30px 0;
          background: #ffffff;
          box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.05);
        }
        @media screen and (max-width: 768px) {
          .box-icont {
            position: fixed;
            bottom: 10px;
            right: -106px;
            z-index: 100;
          }
          .box-icont .icont {
            background: #ffffff;
            border: 1px solid #ebebeb;
            box-sizing: border-box;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
          }
          .box-team-of-experts {
            overflow-x: scroll;
          }
          .list-posts {
            overflow-x: scroll;
          }
          .list-posts-item {
            margin-right: 20px;
          }
          .title-page {
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
          }
          .address-text {
            color: #25282b;
            display: block;
            margin: 10px 0;
            width: 100%;
          }
          .image-page {
            width: 100%;
            width: 100%;
            height: auto;
          }
          .box-content .img_content {
            width: 100%;
            height: 136px !important;
          }
          
          .item-experts {
            width: 50%;
          }
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps() {
  const res = await get_timeline_event();
  const data_timeline_event = res.data;
  const res_detail = await get_detal_page_tranning();
  const data_detal_page_tranning = res_detail.data;
  return {
    props: {
      data: { data_timeline_event, data_detal_page_tranning },
    },
  };
}

export default RegularEvent;
