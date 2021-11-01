import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const SlideItem = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <img
        width="32px"
        height="32px"
        src="../../assets/icon/muitenphai.png"
        alt=""
      />
    );
  };
  return (
    <>
      <Carousel responsive={responsive}>
        <div className="education__item">
          <p className="education__item__time">01.10.2021 - 28.11.2021 </p>
          <div className="position-relative">
            <img
              src="../assets/icon/BorderSolid.png"
              width="100%"
              height="1px"
            />
            <div className="box-circle">
              <div className="circle"></div>
            </div>
          </div>
          <h3 className="education__item__title">Talkshow</h3>
          <p className="education__item__content">
            Tương lai của React trên thị trường Việt Nam và quốc tế
          </p>
        </div>

        <div className="education__item">
          <p className="education__item__time">01.10.2021 - 28.11.2021 </p>
          <div className="position-relative">
            <img
              src="../assets/icon/BorderSolid.png"
              width="100%"
              height="1px"
            />
            <div className="box-circle">
              <div className="circle"></div>
            </div>
          </div>
          <h3 className="education__item__title">Talkshow</h3>
          <p className="education__item__content">
            Tương lai của React trên thị trường Việt Nam và quốc tế
          </p>
        </div>

        <div className="education__item">
          <p className="education__item__time">01.10.2021 - 28.11.2021 </p>
          <div className="position-relative">
            <img
              src="../assets/icon/BorderSolid.png"
              width="100%"
              height="1px"
            />
            <div className="box-circle">
              <div className="circle"></div>
            </div>
          </div>
          <h3 className="education__item__title">Talkshow</h3>
          <p className="education__item__content">
            Tương lai của React trên thị trường Việt Nam và quốc tế
          </p>
        </div>

        <div className="education__item">
          <p className="education__item__time text-active">
            01.10.2021 - 28.11.2021{" "}
          </p>
          <div className="position-relative">
            <img
              src="../assets/icon/BorderSolid.png"
              width="100%"
              height="1px"
            />
            <div className="box-circle">
              <div className="circle circle-active"></div>
            </div>
          </div>
          <h3 className="education__item__title">Khoá đào tạo Mầm non React</h3>
          <p className="education__item__content">
            Khoá đào tạo hoàn toàn miễn phí giúp các bạn sinh viên IT bước đầu
            làm quen với React - React Native
          </p>
        </div>
        <div className="education__item">
          <p className="education__item__time">01.10.2021 - 28.11.2021 </p>
          <div className="position-relative">
            <img
              src="../../assets/icon/BorderSolid.png"
              width="100%"
              height="1px"
            />
            <div className="box-circle">
              <div className="circle"></div>
            </div>
          </div>
          <h3 className="education__item__title">Talkshow</h3>
          <p className="education__item__content">
            Tương lai của React trên thị trường Việt Nam và quốc tế
          </p>
        </div>
      </Carousel>
      <style jsx>
        {`
          .education__item {
            width: auto;
          }
          .education__item__title,
          .education__item__time,
          .education__item__content {
            text-align: center;
          }
          .education__item__time {
            font-weight: 600;
            font-size: 13px;
            line-height: 19px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #a0a4a8;
            margin-top: 0;
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
          .education__item__title {
            font-weight: 600;
            font-size: 13px;
            line-height: 19px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #25282b;
          }
          .education__item__content {
            font-weight: 500;
            width: 250px;
            margin: 0 auto;
            font-size: 13px;
            line-height: 18px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #52575c;
          }
        `}
      </style>
    </>
  );
};

export default SlideItem;
