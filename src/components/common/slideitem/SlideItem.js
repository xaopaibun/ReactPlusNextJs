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
  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType },
  //   } = rest;

  //   console.log(rest)
  //   // onMove means if dragging or swiping in progress.
  //   return (
  //     <button className="btnSlider right" onClick={() => onClick()}>
  //       <img src="/assets/images/back_right.png" alt="a" />
  //     </button>
  //   );
  // };

   const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={() => onClick()}
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 8px rgba(49, 53, 59, 0.2)",
          top: "20px",
          right: "3px",
          zIndex: 100,
          minWidth: "32px",
          minHeight: "32px",
          overflow: "hidden",
        }}
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
      >
        <img
          src="/assets/icon/back_right.svg"
          style={{ position: "absolute", top: 10, left: 12, zIndex: 100 }}
          alt="a"
        />
      </button>
    );
  }

   const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={() => onClick()}
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 1px 8px rgba(49, 53, 59, 0.2)",
          top: "20px",
          left: "3px",
          zIndex: 100,
          minWidth: "32px",
          minHeight: "32px",
          overflow: "hidden",
        }}
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
      >
        <img
          src="/assets/icon/back_left.svg"
          style={{ position: "absolute", top: 10, left: 12, zIndex: 100 }}
          alt="a"
        />
      </button>
    );
  }

  return (
    <>
      <div style={{ position: "relative"}}>
        <div className="box-circle">
          <div className="border-solid"></div>
        </div>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {TimeLineEvent.map((val) => (
            <div className="education__item" key={val.id}>
              <p className="education__item__time">
                {" "}
                {val?.start_date} - {val?.to_date}
              </p>
              <div className="position-relative">
                {/* <img
                src="../assets/icon/BorderSolid.png"
                width="100%"
                height="1px"
              /> */}

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
            .border-solid {
              width: 84%;
              margin: 0 auto;
              position: absolute;
              top: 36px;
              left: 7%;
              height: 1px;
              border: 1px dashed #e2e2e2;
            }
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
            }
            .circle {
              margin-top: 2px;
              width: 20px;
              height: 20px;
              background: #d2d1d1;
              border: 2px solid #ffffff;
              box-sizing: border-box;
              border-radius: 50%;
              margin: -8px auto;
            }
            .education__item__title {
              font-weight: 600;
              font-size: 13px;
              line-height: 19px;
              text-align: center;
              width: 250px;

              margin: 40px auto 12px auto;

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
            .react-multiple-carousel__arrow:hover {
              background: red;
            }
            .react-multiple-carousel__arrow:hover {
              background-color: unset;
            }
            .react-multiple-carousel__arrow1 {
              position: absolute;
              outline: 0;
              -webkit-transition: all 0.5s;
              transition: all 0.5s;

              right: 10px;
              border-radius: 35px;
              z-index: 1000;
              border: 0;
              background: rgba(0, 0, 0, 0.5) !important;
              min-width: 32px !important;
              background: #ffffff !important;
              box-shadow: 0px 1px 8px rgb(49 53 59 / 20%) !important;
              min-height: 32px !important;
              opacity: 1;
              margin-top: -77px !important;
              margin-right: -40px !important;
              cursor: pointer;
            }
            .react-multiple-carousel__arrow--right::before {
              content: "\e825";
              display: none !important;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default SlideItem;
