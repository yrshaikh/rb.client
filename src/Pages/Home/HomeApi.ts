import axios from "axios";

export default class HomeApi {
  public GetPublicMessage(): any {
    return axios
      .get(`/api/home/public`)
      .then((response: any) => response.data.message);
  }
  public GetPrivateMessage(accessToken: string): any {
    return axios
      .get(`/api/home/private`, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      })
      .then((response: any) => response.data.message);
  }
}
