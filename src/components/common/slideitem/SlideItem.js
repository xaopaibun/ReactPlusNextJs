import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const SlideItem = ({ TimeLineEvent }) => {
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
      <button className="btnSlider right">
        <img src="./assets/images/back_right.png" alt="a" />
      </button>
    );
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        arrows={false}
        customRightArrow={<CustomRightArrow />}
      >
        {TimeLineEvent.map((val) => (
          <div className="education__item" key={val.id}>
            <p className="education__item__time">
              {" "}
              {val?.start_date} - {val?.to_date}
            </p>
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
            <h3 className="education__item__title">{val.title}</h3>
            <div
              className="education__item__content"
              dangerouslySetInnerHTML={{ __html: val.introduction }}
            />
          </div>
        ))}
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
            width: 250px;
            margin: 5px auto;
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
            letter-spacing: -0.02em;

            white-space: pre-wrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            display: -webkit-box;
          }
          .btnSlider {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0px 1px 6px rgba(49, 53, 59, 0.3);
          }
          .btnSlider.left {
            position: absolute;
            top: calc(430px / 2 - 32px);
            left: 164px;
            z-index: 99;
          }
          .btnSlider.right {
            position: absolute;
            top: calc(430px / 2 - 32px);
            right: 164px;
            z-index: 99;
          }
        `}
      </style>
    </>
  );
};

export default SlideItem;
