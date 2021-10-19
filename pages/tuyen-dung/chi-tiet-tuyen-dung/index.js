
import Head from "next/head";
import Menu from "../../../src/components/menu";
import Footer from "../../../src/components/footer";
import { useRouter } from "next/router";
const CareerDetal = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const router = useRouter();
  const handleSubmit = () => router.push("/tuyen-dung/thong-tin-chi-tiet-form");
  return (
    <>
      <Head>
        <title>Chi Tiết Tuyển dụng React Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header">
        <Menu />
        <div className="header-center">
          <h3 className="title-career">React Plus Career</h3>
          <div className="contact">
            <div className="contact-phone">
              <div className="contact-phone-icon">
                <img src="../assets/icon/phone1.png" width={20} height={20} />
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
                <img src="../assets/icon/mail1.png" width={20} height={20} />
              </div>
              <div className="contact-phone-hotline">
                <p className="hotline">Email</p>
                <p className="phone-number">huett@reactplus.com</p>
              </div>
            </div>
          </div>
          <button className="btnRegister" onClick={handleSubmit}>Đăng ký ứng viên tiềm năng</button>
        </div>
      </div>

      <div className="container">
        <div className="box-back">
          <div className="btn-back">
            <img
              src="../assets/icon/arrow-sm-right4.png"
              width={24}
              height={24}
            />
          </div>
          <p className="btn-back-text"> Quay lại</p>
        </div>

        <div className="content-detail">
          <div className="content-detail-left">
            <h1 className="title-detail">Chuyên viên chăm sóc khách hàng</h1>
            <h3 className="list-title">Nội dung công việc</h3>
            <ul>
              <li className="list-item">
                Lên kế hoạch truyền thông phù hợp yêu cầu xây dựng văn hóa doanh
                nghiệp và định hướng chiến lược về hình ảnh doanh nghiệp với
                cộng đồng bên ngoài.  
              </li>
              <li className="list-item">
                Quản lý hình ảnh và thông tin Doanh nghiệp.  
              </li>
              <li className="list-item">
                Phụ trách các kênh truyền thông của công ty: website, Fanpage,
                bảng tin nội bộ  
              </li>
              <li className="list-item">
                Phụ trách biên tập các ấn phẩm nội bộ, các tài liệu, hướng dẫn
                truyền thông nhằm gia tăng tinh thần gắn kết của nhân viên công
                ty, nâng cao kiến thức về nhận diện, phát triển thương hiệu cho
                CBNV.
              </li>
              <li className="list-item">
                Lên ý tưởng xây dựng, tổ chức các event nội bộ, các hoạt động
                tập thể nhằm tạo sự gắn kết trong cán bộ nhân viên.  
              </li>
              <li className="list-item">
                Thu thập và duy trì cơ sở dữ liệu bài viết, hình ảnh, âm thanh,
                ấn phẩm liên quan phục vụ công tác lưu trữ lịch sử.  
              </li>
              <li className="list-item">
                Thực hiện các công việc khác do TP Nhân sự giao.{" "}
              </li>
            </ul>

            <h3 className="list-title">Yêu cầu với ứng viên</h3>
            <ul>
              <li className="list-item">
                Tốt nghiệp Đại học chuyên ngành báo chí, truyền thông, quan hệ
                công chúng hoặc các chuyên ngành có liên quan.  {" "}
              </li>
              <li className="list-item">
                Có ít nhất 1 năm kinh nghiệm làm truyền thông – Pr, tổ chức sự
                kiện, (1-2 năm làm truyền thông nội bộ).  
              </li>
              <li className="list-item">
                Khả năng viết tốt, có thể sử dụng các phần mềm thiết kế dàn
                trang, các phần mềm xử lý Video, phần mềm xử lý ảnh đơn giản.  
              </li>
              <li className="list-item">
                Có khả năng kết nối, cổ động mọi người, chủ động trong việc điều
                phối, triển khai công việc (có khả năng thuyết trình, làm MC là
                một lợi thế).  {" "}
              </li>
              <li className="list-item">
                Hình thức thân thiện, dễ mến, yêu thích các hoạt động xã hội,
                hoạt động tập thể.  
              </li>
              <li className="list-item">
                Năng động, sáng tạo, nhiều ý tưởng tổ chức các chương trình sự
                kiện.  {" "}
              </li>
            </ul>

            <h3 className="list-title">Chế độ đãi ngộ</h3>
            <ul>
              <li className="list-item">Mức lương: ~ 15 Triệu VND/tháng   </li>
              <li className="list-item">
                Thưởng tháng 13. Thưởng cuối năm. Review lương 2 lần /năm.  {" "}
              </li>
              <li className="list-item">
                Nhận quà hoặc tiền mặt vào ngày lễ tết.  {" "}
              </li>
              <li className="list-item">
                Đóng BHXH theo quy định luật LĐVN.  {" "}
              </li>
              <li className="list-item">Khám sk định kỳ 1 năm/lần.   </li>
              <li className="list-item">Lộ trình thăng tiến rõ ràng.   </li>
              <li className="list-item">
                Được làm việc với công ty khách hàng là tập đoàn lớn bên Nhật.  {" "}
              </li>
              <li className="list-item">
                Được đào tạo về ngôn ngữ, kỹ năng mềm.  {" "}
              </li>
              <li className="list-item">
                Tham gia các hoạt động tea break hàng ngày, event sôi động, open
                talk hàng tháng, teambuilding, du lịch hàng năm.{" "}
              </li>
            </ul>

            <h3 className="list-title">Thời gian và địa điểm làm việc</h3>
            <ul>
              <li className="list-item">
                Thời gian: 9h – 16h , từ thứ 2 đến thứ 6 hàng tuần.  
              </li>
              <li className="list-item">
                Địa điểm: Tầng 7, Golden Filed Building, số 24 Nguyễn Cơ Thạch,
                Nam Từ Liêm, Hà Nội.
              </li>
            </ul>
            <button className="btnJoin" onClick={handleSubmit}>
              <span>Ứng tuyển vị trí này</span>
            </button>
          </div>

          <div className="content-detail-right">
            <button className="btnJoin" onClick={handleSubmit}>
              <span>Ứng tuyển vị trí này</span>
            </button>
            <h3 className="list-title">Job liên quan</h3>
            <div className="job-item">
              <div className="border-blue " />
              <div className="job-item-content">
                <h4 className="job-item-text">
                  Thực tập sinh lập trình React Native
                </h4>
                <h4 className="job-item-address"> Hà Nội </h4>
              </div>
            </div>

            <div className="job-item">
              <div className="border-blue " />
              <div className="job-item-content">
                <h4 className="job-item-text">Lập trình viên React</h4>
                <h4 className="job-item-address"> Hà Nội </h4>
              </div>
            </div>

            <div className="job-item">
              <div className="border-blue " />
              <div className="job-item-content">
                <h4 className="job-item-text">Lập trình React Native</h4>
                <h4 className="job-item-address"> Hà Nội </h4>
              </div>
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
        }
        .content-detail-left {
          border-top: 1px solid #ebebeb;
          margin: 20px 0;
          padding: 30px 0;
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
        }
        .job-item-address {
          font-size: 13px;
          line-height: 19px;
          color: #8c97ac;
        }
      `}</style>
    </>
  );
};

export default CareerDetal;
