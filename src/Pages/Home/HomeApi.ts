import axios from "axios";

export default class HomeApi {
  public GetPublicMessage(): any {
    return axios
      .get(`/api/home`)
      .then((response: any) => response.data);
  }
}
