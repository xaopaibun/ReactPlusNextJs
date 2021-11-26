import Head from "next/head";
import Menu from "../../src/components/menu";
import Link from "next/link";
import Footer from "../../src/components/footer";
import { useRouter } from "next/router";
import {
  get_news_detail,
  get_post_concernings,
  URL,
} from "../../src/services/api";
import { useEffect, useState } from "react";
const NewsBlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [news_detail, setNews_Detail] = useState();
  const [postConcernings, setPostConcernings] = useState();
  useEffect(async () => {
    if (slug) {
      const res = await get_news_detail(slug);
      setNews_Detail(res.data);
    }
  }, [slug]);

  useEffect(async () => {
    const res_ = await get_post_concernings();
    setPostConcernings(res_.data);
  }, []);

  return (
    <>
      <Head>
        <title>{slug}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="main">
        <div className="container">
          <div className="header-detail">
            <div className="box-icont">
              <a
                className="icont"
                target="_blank"
                href={`https://www.facebook.com/sharer.php?u=http://103.237.145.33:5000/tin-tuc/${slug}`}
              >
                <img src="/assets/icon/fb-black.png" />
              </a>
              <button className="icont">
                <img src="/assets/icon/in-black.png" />
              </button>
              <button className="icont">
                <img src="/assets/icon/dinh-kem.png" />
              </button>
            </div>
            <div className="box-content">
              <h1 className="title-news-detail">{news_detail?.title}</h1>
              <div style={{ position: "relative" }}>
                <img src="/assets/icon/ellip.png" width="44px" height="44px" />
                <img
                  src="/assets/icon/logo-react-plus2.png"
                  width="36px"
                  height="36px"
                  style={{
                    position: "absolute",
                    zIndex: 100,
                    top: "4px",
                    left: "4px",
                  }}
                />
              </div>

              <p className="title2-news-detail">
                React Plus Corp <br />
                {news_detail?.start_date_string}
              </p>
            </div>
          </div>
        </div>
        {news_detail?.first_image.url && (
          <div className="image-page">
            <img
              src={`${URL}${news_detail?.first_image.url}`}
              width="100%"
              height="100%"
              alt="Error Image"
            />
          </div>
        )}

        <div className="container container-content">
          <div
            className="content-1"
            dangerouslySetInnerHTML={{
              __html: news_detail?.introduction,
            }}
          ></div>
          <img
            src="/assets/icon/Group2101.png"
            width="63.3px"
            height="13.1px"
            className="icont-image"
          />
          <div className="marginTop" />
          <h4 className="text-title-content"> Nội dung</h4>
          <div
            className="text-content"
            dangerouslySetInnerHTML={{
              __html: news_detail?.content,
            }}
          />

          <img
            src="/assets/icon/Group2101.png"
            width="63.3px"
            height="13.1px"
            className="icont-image"
          />
        </div>

        <div className="event-is-happening">
          <div className="container">
            <h3 className="title0">Tin liên quan</h3>
            <div className="list-posts">
              {postConcernings?.map((val) => {
                return (
                  <div className="post-item" key={val.id}>
                    <img
                      src={`${URL}${val.cover_image.url}`}
                      className="post-item_image"
                    />
                    <h5 className="content-review-date">
                      {val.start_date} - {val.to_date}
                    </h5>
                    <Link href={`/tin-tuc/${val.url_seo}`}>
                      <a className="post-title">{val.title}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="marginTop" />
        <Footer />
      </div>
      <style jsx>{`
        .header-detail {
          width: 904px;
          display: flex;
          margin: 50px auto;
        }
        .box-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .box-icont {
          width: 70px;
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
          background-color: white;
          margin: 6px 0;
          cursor: pointer;
        }
        .post-item {
          width: 32%;
        }
        .title-news-detail {
          font-weight: 600;
          font-size: 28px;
          line-height: 42px;
          color: #25282b;
          text-align: center;
          margin: 20px 0;
        }
        .title2-news-detail {
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: #a0a4a8;
          margin: 20px 0;
        }
        .image-page {
          width: 904px;
          height: 360px;
          margin: auto;
          overflow: hidden;
        }
        .marginTop {
          margin-top: 70px;
        }
        .container-content {
          width: 600px;
          margin: 0 auto;
        }
        .content-1 {
          margin-top: 40px;
          font-style: italic;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .text-title-content {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .text-content {
          font-size: 13px;
          line-height: 19px;
          letter-spacing: -0.02em;
          color: #25282b;
          margin: 20px 0;
        }
        .icont-image {
          display: block;
          margin: 0 auto;
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
        .event-is-happening {
          width: 100%;
          background: #f4f6fa;
          margin-top: 72px;
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
        .post-item_image {
          width: 100%;
          height: 193px;
        }
        @media screen and (max-width: 768px) {
          .post-item_image {
            width: 289px;
            height: 193px;
          }
          .list-posts::-webkit-scrollbar {
            display: none;
          }
          .list-posts {
            overflow-x: scroll;
          }
          .post-item {
            margin-right: 10px;
            width: 100%;
          }
          .header-detail {
            width: 100%;
            margin: 30px auto;
          }
          .box-icont {
            position: fixed;
            bottom: 10px;
            right: -10px;
            z-index: 100;
          }
          .box-icont .icont {
            background: #ffffff;
            border: 1px solid #ebebeb;
            box-sizing: border-box;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
          }
          .image-page {
            width: 100%;
            height: auto;
          }
          .title-news-detail {
            font-size: 20px;
            line-height: 28px;
            text-align: center;
            margin: 10px 0;
          }

          .container-content {
            width: 100%;
          }
          .event-is-happening .container {
            margin: 0;
          }
          .event-is-happening {
            height: auto;
            padding: 20px 0 20px 0;
          }
          .marginTop {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default NewsBlogDetail;
