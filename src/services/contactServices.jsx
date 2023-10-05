import axios from "axios";
import { useEffect } from "react";
export function createContactService(name, number) {
  return axios.post("http://localhost:3000/contacts", { name, number });
}
export function getAllContactsService() {
  return axios.get("http://localhost:3000/contacts", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });
}
