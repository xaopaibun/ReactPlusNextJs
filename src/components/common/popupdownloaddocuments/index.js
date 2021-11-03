import { TextField } from "@mui/material";
import { Modal } from "react-bootstrap";
const PopupDownloadDocuments = (props) => {
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
              <div className="icont-popup">
                <img
                  src="../../assets/icon/tailieu.png"
                  width={"85px"}
                  height={"85px"}
                  alt=""
                />
                <img
                  src="../../assets/icon/download.png"
                  width={"24px"}
                  height={"24px"}
                  className="img-position"
                  alt=""
                />
              </div>
            </div>
            <div className="pop-popup-content">
              <h1 className="text-thanks">Tải tài liệu miễn phí</h1>
              <p className="text-thanks2">
                Vui lòng để lại email và số điện thoại để chúng tôi có thể gửi
                tài liệu cho bạn
              </p>
            </div>
            <div>
              <TextField
                label="Tên đầy đủ *"
                type="text"
                variant="standard"
                fullWidth
                name="current_job"
              />
              <div className="mr-20" />
              <TextField
                label="Email *"
                type="text"
                variant="standard"
                fullWidth
                name="current_job"
              />
              <div className="mr-20" />
              <TextField
                label="Số điện thoại *"
                type="text"
                variant="standard"
                fullWidth
                name="current_job"
              />
              <div className="mr-20" />
              <button className="btn btn-submit" type="submit">
                <span className="btn-text">Xác nhận</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <style jsx>{`
        .btn {
          width: 239px;
          height: 43px;
          display: block;

          margin: 20px auto;
          border-radius: 43px;
        }
        .btn-disabled {
          background: #a0a4a8;
        }
        .btn-submit {
          background: #0bbee7;
        }
        .btn-text {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .icont-popup {
          position: relative;
        }
        .img-position {
          position: absolute;
          right: 5px;
          bottom: 10px;
          z-index: 2;
        }
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
        
        @media screen and (max-width: 768px) {
          .pop-popup {
            width: 100%;
          }
          .btn-close-modal {
            bottom: -50px;
            top: unset;
            right: calc(100% / 2 - 20px);
          }
          .text-thanks{
            font-size: 16px;
          }
          .text-thanks2{
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};
export default PopupDownloadDocuments;
