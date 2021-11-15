import axios from "axios";

export const URL = `http://103.237.145.33:3000`;

const instance = axios.create({
  baseURL: `${URL}/api/v1`,
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Home
export const get_banners = () => instance.get("/images/banners");

export const get_training_event = () =>
  instance.get("/static_pages/main_training_event");

export const get_timeline_event = () =>
  instance.get("/static_pages/timeline_event");

export const get_posts = () => instance.get("/posts");

export const send_mail = (email) =>
  instance.post(`/email_notifications?email=${email}`);

//popup download

export const post_document_users = (user) =>
  instance.post(`/document_users`, user);

// GioiThieu Cong ty
export const get_members = () => instance.get("/members");

// GioiThieu React
export const get_questions = () => instance.get("/questions");

// Van Hoa
export const get_images_villages = () => instance.get("/images/villages");

export const get_health_festivals = () => instance.get("/health_festivals");

//vi-cong-dong
export const get_volunteer = () => instance.get("/static_pages/volunteer");
export const get_charity_stories = () => instance.get("/posts/charity_stories");

//tuyen-dung
export const get_recruitments = () => instance.get("/recruitments");

//tin-tuc
export const get_news_blog = () => instance.get("/static_pages/news_blogs");
export const get_news_detail = (slug) => instance.get(`/articles/${slug}`);
export const get_post_concernings = () =>
  instance.get(`/posts/post_concernings`);

// dang ky khoa hoc
export const post_register_course = (students) =>
  instance.post("/students", students);

// dang ky su kien
export const post_register_event = (user) =>
  instance.post("/participants", user);

 // dang ky tuyen dung job
export const post_register_candidates = (user) =>
instance.post("/candidates", user);