import { Modal } from "react-bootstrap";
import { useRouter } from "next/router";
const PopupThanks = (props) => {
  const router = useRouter();
  const handleBackHome = () => router.push("/");
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="body">
          <div className="pop-popup">
            <button className="btn-close-modal" onClick={props.onHide}>
              <img
                src="../../assets/icon/X.png"
                width="20px"
                height="20px"
                alt=""
              />
            </button>
            <div className="pop-popup-header">
              <img
                src="../../assets/images/phaohoa0.png"
                width={"104.21px"}
                height={"82.72px"}
                alt=""
              />
              <img
                src="../../assets/images/phaohoa1.png"
                width={"85px"}
                height={"85px"}
                alt=""
              />
              <img
                src="../../assets/images/phaohoa2.png"
                width={"104.21px"}
                height={"82.72px"}
                alt=""
              />
            </div>
            <div className="pop-popup-content">
              <h1 className="text-thanks">Cảm ơn bạn đã đăng ký</h1>
              <p className="text-thanks2">
                {props.content1} <br /> {props?.content2}
              </p>
            </div>
            <div className="pop-popup-btn">
              <button className="btnmore" onClick={handleBackHome}>
                <span>Về trang chủ</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <style jsx>{`
        .pop-popup-header {
          display: flex;
          justify-content: space-around;
          margin: 15px;
        }
        .box-popup {
          width: 100%;

          background: rgba(0, 0, 0, 0.6);

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .pop-popup {
          width: 506px;
          height: auto;
          background: #ffffff;
          position: relative;
          border-radius: 8px;
          padding: 41px;
          box-sizing: border-box;
        }

        .btn-close-modal {
          width: 40px;
          height: 40px;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: -20px;
          right: -20px;
          border-radius: 50%;
          z-index: 9;
          background: #ffffff;
          border: 1px solid #d7d7d7;
          box-sizing: border-box;
        }
        .pop-popup-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin: 10px 0;
        }

        .text-thanks {
          font-weight: 600;
          font-size: 24px;
          line-height: 136.02%;
          text-align: center;
          color: #27272e;
        }
        .text-thanks2 {
          font-size: 16px;
          line-height: 162.02%;
          text-align: center;
          color: #27272e;
        }
        .mr-20 {
          height: 20px;
        }
        .btnmore {
          width: 272px;
          padding: auto 20px;
          margin: 10px auto;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #0bbee7;
          box-sizing: border-box;
          border-radius: 44px;
          background-color: #0bbee7;
          transition: 0.5s;
          min-width: 152px;
        }
        .btnmorelong {
          min-width: 423px;
        }
        .btnmore:hover {
          background: #03a3c8;
        }
        .btnmore span {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-right: 5px;
        }

        .btnmore:hover span {
          color: #ffffff;
        }
        .modal-content {
          border-radius: 8px;
        }
        @media screen and (max-width: 768px) {
          .pop-popup {
            width: 100%;
            padding: 16px;
            height: 355px;
          }
          .btn-close-modal {
            bottom: -50px;
            top: unset;
            right: calc(100% / 2 - 20px);
          }
          .btnmorelong {
            min-width: unset;
            width: 100%;
          }
          .text-thanks {
            font-size: 16px;
          }
          .text-thanks2 {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default PopupThanks;
