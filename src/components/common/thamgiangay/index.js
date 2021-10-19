const JoinNow = () => {
  return (
    <div className="container">
      <div className="inputemail">
        <div className="input__content">
          <p className="input__content__title">
            Tham gia với chúng tôi, <br />
            đội ngũ React Plus
          </p>
          <div className="box-loadmore">
            <button className="btnmorefull">
              <span>Tham gia ngay</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
      .box-loadmore {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .btnmorefull {
          width: 239px;
          height: 43px;
          box-sizing: border-box;
          border-radius: 44px;
          background: #0bbee7;
          border: none;
          transition: 0.5s;
        }
        .btnmorefull:hover {
          background: #03a3c8;
        }
        .btnmorefull span {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
       
        .inputemail {
          width: 100%;
          margin: 30px 0;
          height: 211px;
          background-image: url("/assets/images/BGinput.png");
        }
        .input__content__title {
          padding: 25px 0;
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          text-align: center;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default JoinNow;