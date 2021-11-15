import { ListExperts } from "../../../config";

export const TeachingStaff = () => {
  return (
    <>
      <div className="container">
        <h2 className="title_teaching_staff">Đội ngũ giảng viên</h2>
        <div className="box-team-of-experts">
          {ListExperts &&
            ListExperts.map((val) => (
              <div className="item-experts" key={val._id}>
                <div className="item__img">
                  <img
                    width="110px"
                    height="110px"
                    style={{ borderRadius: "50%" }}
                    src={"./assets/images/" + val.avatar}
                    alt={val.fullname}
                  />
                </div>
                <div className="item__content">
                  <h3 className="name-experts">{val.fullname}</h3>
                  <div className="content-experts"
                   dangerouslySetInnerHTML={{
                      __html:val.content }}
                  >
                   
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        .box-team-of-experts {
          display: flex;
          flex-wrap: wrap;
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
        .content-experts {
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
        }
        .content-experts p{
          margin: 0 !important;
        }
      `}</style>
    </>
  );
};
