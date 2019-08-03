import axios from "axios";

export default class HomeApi {
  public GetPublicMessage(): any {
    return axios
      .get(`https://localhost:5001/api/home`)
      .then((response: any) => response.data);
  }
}
