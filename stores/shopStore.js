import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ShopStore {
  shops = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchStore = async () => {
    try {
      const response = await instance.get("/");
      this.shops = response.data;
    } catch (error) {
      console.log(error);
    }
  };
}
const shopStore = new ShopStore();
shopStore.fetchStore();
export default shopStore;
