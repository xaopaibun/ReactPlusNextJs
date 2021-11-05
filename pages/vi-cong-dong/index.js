import Head from "next/head";
import Menu from "../../src/components/menu";
import Footer from "../../src/components/footer";
import { VolunteerStory } from "../../src/config";
import { get_volunteer } from "../../src/services/api";

const ViCongDong = ({data}) => {
  return (
    <div>
      <Head>
        <title>Vì cộng đồng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="frame-page">
        <div className="container-top">
          <h2 className="text-title">Chung tay vì cộng đồng</h2>
        </div>

        <div className="position">
          <div className="container">
            <div className="parameter">
              <div className="parameter-item">
                <h5 className="text-number">
                {Intl.NumberFormat().format(parseInt(data.money))}<span className="text-unit"> VND</span>
                </h5>
                <p className="text-content">Đã được chia sẻ tới cộng đồng</p>
              </div>
              <div className="border" />
              <div className="border-reponsive" />
              <div className="parameter-item">
                <h5 className="text-number">
                  {data.number_members}<span className="text-unit"> Người</span>
                </h5>
                <p className="text-content">Đã được hỗ trợ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mr-138" />
      <div className="container">
        <p className="text-content-page">
          Chúng tôi cho rằng, không nên đợi đến lúc giàu thì mới làm thiện
          nguyện. Bất cứ lúc nào, chúng ta cũng có thể giúp đỡ được ai đó, theo
          một cách nào đó. Do vậy, mỗi ngày, chúng tôi đều gom góp một phần lợi
          nhuận từ các dự án để gửi tới các quỹ thiện nguyện, các gói hỗ trợ để
          đóng góp phần nào đó cho những người đang cần giúp đỡ. Tỷ trọng đóng
          góp này sẽ tăng dần lên tương ứng với sự phát triển của React Plus,
          chúng tôi mong và tin rằng nó sẽ tăng lên nhanh chóng và bền vững.
          <br /> <br />
          Với mỗi quỹ thiện nguyện hay trường hợp đóng góp, chúng tôi đều xác
          minh thông tin và lên kế hoạch thực hiện rõ ràng, để những đóng góp
          chung từ cả công ty sẽ phát huy tối đa khả năng của nó trong việc hỗ
          trợ cộng đồng. Nếu bạn là một thành viên của React, bạn cũng sẽ tham
          gia đóng góp cho hoạt động này mỗi ngày, bằng việc làm tốt công việc
          của mình.
        </p>
      </div>
      <div className="box-bg">
        <div className="container">
          <h2 className="text-title">
            Câu chuyện thiện nguyện{" "}
            <img
              src="./assets/icon/trai-tim.png"
              height={"20px"}
              width={"27px"}
              style={{ marginTop: "-25px" }}
            />
          </h2>

          <div className="list-posts">
            {VolunteerStory &&
              VolunteerStory.map((value) => {
                return (
                  <div className="post-item">
                    <img
                      src={`./assets/images/${value.image}`}
                      height={"193px"}
                      width={"340px"}
                    />
                    <h5 className="content-review-date">{value.date}</h5>
                    <a href="" className="post-title">
                      {value.text}
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .container-top {
          width: 979.65px;
          height: 100%;
          display: flex;
          margin: 0 auto;
          justify-content: center;
          background-image: url("/assets/images/ViCongDongFrame.png");
        }
        .frame-page {
          padding-top: 30px;
          height: 325px;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            #f4f6fa 0%,
            rgba(244, 246, 250, 0) 83.85%
          );
        }
        .text-title {
          font-weight: 600;
          margin-top: 60px;
          font-size: 28px;
          line-height: 28px;
          color: #25282b;
          text-align: center;
        }
        .position {
          width: 100%;
          position: absolute;
        }
        .parameter {
          background: #ffffff;
          box-shadow: 0px 2px 21px 3px rgba(0, 0, 0, 0.03);
          width: 883px;

          height: 138px;
          margin: 0 auto;
          margin-top: -50px;
          display: flex;
          align-items: center;
        }
        .parameter-item {
          width: 440px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .text-number {
          font-weight: 600;
          font-size: 34px;
          line-height: 51px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #0bbee7;
        }
        .text-unit {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #000000;
          opacity: 0.6;
        }
        .text-content-page {
          max-width: 813px;
          margin: 30px auto;
          font-size: 13px;
          line-height: 19px;
          color: #25282b;
        }
        .border {
          width: 1px;
          height: 96px;
          background: #eaeaea;
          transform: matrix(-1, 0, 0, 1, 0, 0);
        }
        .border-reponsive {
          display: none;
        }
        .list-posts {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 50px;
        }
        .content-review-date {
          margin-top: 10px;
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #a0a4a8;
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
        .mr-138 {
          margin-top: 138px;
        }
        .post-item {
          width: 30%;
          margin: 20px 0;
        }
        @media screen and (max-width: 768px) {
          .frame-page {
            padding-top: 30px;
            height: 190px;
            width: 100%;
            position: relative;

            overflow: unset;

            background: linear-gradient(
              0deg,
              #f4f6fa 0%,
              rgba(244, 246, 250, 0) 83.85%
            );
          }
          .container-top {
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .text-title {
            font-size: 20px;
            line-height: 28px;
            margin-top: 0px;
          }
          .parameter {
            flex-direction: column;
            width: 100%;
            height: auto;
          }
          .border {
            display: none;
          }
          .parameter-item {
            padding-top: 10px;
            width: 100%;
          }
          .list-posts {
            flex-wrap: nowrap;
            overflow-x: scroll;
          }
          .post-item {
            margin-right: 12px;
            width: auto;
          }
          .border-reponsive {
            display: block;
            width: 96px;
            height: 1px;
            background-color: #eaeaea;
            padding: 0 27px;
          }
          .position {
            position: absolute;
          }
          .text-content {
            font-size: 13px;
          }
          .mr-138 {
            margin-top: 200px;
          }
          .box-bg {
            padding-top: 20px;
            background-color: #f4f6fa;
          }
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await get_volunteer();
  const data = res.data;
  return {
    props: {
      data: data,
    },
  };
}

export default ViCongDong;
