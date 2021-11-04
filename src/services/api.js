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

export const send_mail = (email) => instance.post(`/email_notifications?email=${email}`);

// GioiThieu Cong ty
export const get_members = () => instance.get("/members");

// GioiThieu React
export const get_questions = () => instance.get("/questions");

// Van Hoa
export const get_images_villages = () => instance.get("/images/villages");

export const get_health_festivals = () => instance.get("/health_festivals");