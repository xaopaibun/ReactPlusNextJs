import Footer from "../../src/components/footer";
import Head from "next/head";
import Link from "next/link";
import Menu from "../../src/components/menu";
import { useRouter } from "next/router";
import { get_news_blog, URL } from "../../src/services/api";

const News = ({ data_news_blog }) => {
  const router = useRouter();
  const handleViewAllNews = () => router.push("/tin-tuc/danh-sach-tin-tuc");
  const handleViewAllBlog = () => router.push("/tin-tuc/danh-sach-blog");
  return (
    <>
      <Head>
        <title>Tin tức & blog</title>
        <link rel="icon" href="/assets/icon/icon_tab.png" />
      </Head>
      <Menu />
      <div className="main">
        <div className="banner">
          <img
            src="/assets/images/Bannertintuc.jpg"
            height={"100%"}
            width={"100%"}
          />
          <div className="content-review">
            <div className="center">
              <h5 className="content-review-date">
                {data_news_blog?.news[0]?.start_date} -{" "}
                {data_news_blog?.news[0]?.to_date}
              </h5>
              <h2 className="content-review-title">
                {data_news_blog?.news[0]?.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <div className="header-left">
              <div className="borderblue"></div>
              <h2 className="header-title">Tin tức</h2>
            </div>
            <div className="header-right" onClick={handleViewAllNews}>
              <span className="text-xemthem">Xem thêm</span>
              <img
                src="./assets/icon/arrow-sm-right-blue.png"
                height={"24px"}
                width={"24px"}
              />
            </div>
          </div>
          <div className="list-posts">
            {data_news_blog.news?.map((val) => {
              return (
                <div className="list-posts-item" key={val.id}>
                  <img
                    src={`${URL}${val.cover_image.url}`}
                    className="img_post"
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

          <div className="header">
            <div className="header-left">
              <div className="borderblue"></div>
              <h2 className="header-title">Blog</h2>
            </div>
            <div className="header-right" onClick={handleViewAllBlog}>
              <span className="text-xemthem">Xem thêm</span>
              <img
                src="./assets/icon/arrow-sm-right-blue.png"
                height={"24px"}
                width={"24px"}
              />
            </div>
          </div>
          <div className="list-posts">
            {data_news_blog.blogs?.map((val) => {
              return (
                <div className="list-posts-item" key={val.id}>
                  <img
                    src={`${URL}${val.cover_image.url}`}
                    className="img_post"
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
        <div className="margin" />
        <footer>
          <Footer />
        </footer>
      </div>
      <style jsx>{`
        footer {
          padding-top: 38px;
          padding-bottom: 10px;
          background: #f4f6fa;
        }
        .container {
          margin-top: 30px;
        }
        .banner {
          height: 430px;
          width: 100%;
          position: relative;
        }
        .content-review {
          position: absolute;
          width: 100%;
          bottom: 0px;
          left: 0;
          z-index: 10;
        }
        .header {
          display: flex;
          justify-content: space-between;
          margin: 70px 0 30px 0;
        }
        .center {
          width: 997px;
          height: auto;
          margin: 0 auto;
        }
        .content-review-date {
          font-size: 13px;
          line-height: 19px;
          margin-top: 15px;
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
        .list-posts {
          display: flex;
          justify-content: space-between;
        }
        .borderblue {
          width: 5px;
          height: 32px;
          background: #0bbee7;
          margin-right: 20px;
        }
        .text-xemthem {
          font-size: 14px;
          line-height: 135.4%;
          display: flex;
          align-items: center;
          color: #0bbee7;
          margin-right: 10px;
        }
        .header-left,
        .header-right {
          display: flex;
          align-items: center;
        }
        .header-right {
          cursor: pointer;
        }
        .header-title {
          font-weight: 600;
          font-size: 24px;

          margin-bottom: 0;
          line-height: 135.4%;
          color: #000000;
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
        .margin {
          height: 80px;
        }
        .img_post {
          height: 193px;
          width: 100%;
        }
        .list-posts-item {
          width: 31.6%;
        }
        .content-review {
          display: none;
        }
        @media screen and (max-width: 768px) {
          .banner img {
            height: 150px !important;
          }
          .list-posts {
            overflow-x: scroll;
          }
          .list-posts::-webkit-scrollbar {
            display: none;
          }
          .header-title {
            font-size: 18px;
          }
          .list-posts-item {
            margin-right: 20px;
            width: 252px;
          }
          .center {
            width: auto;
          }

          .banner {
            height: auto;
          }
          .content-review {
            position: unset;
            padding: 0px 14px 7px 19px;
            background: linear-gradient(
              360deg,
              #f4f6fa 0%,
              rgba(244, 246, 250, 0) 83.85%
            );
          }
          .content-review-title {
            font-size: 20px;
            line-height: 28px;
            color: #25282b;
          }
          .img_post {
            width: 253px;
            height: 144px;
          }
          footer {
            padding-top: 2px;
          }
          .margin {
            height: 44px;
          }
          .header {
            margin-top: 40px;
          }
          .content-review {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps() {
  const res = await get_news_blog();
  const data_news_blog = res.data;

  return {
    props: {
      data_news_blog: data_news_blog,
    },
  };
}

export default News;
