import axios from "axios";

export default class FakeQnAClient {
  async list() {
    return axios.get("/dummy/qna.json").then((res) => {
      return res.data.items;
    });
  }

  async detail() {
    return axios.get("/dummy/qnaDetail.json").then((res) => {
      return res.data;
    });
  }
}
