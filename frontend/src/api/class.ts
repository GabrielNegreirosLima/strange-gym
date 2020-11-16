import api from ".";
import { signUp } from "./auth";

interface CreateClass {
  modalityId: string;
  scheduleId: string;
  capacity: number;
}

export function fetchClasses() {
  return api.get("api/classes");
}

export function createClass({ modalityId, scheduleId, capacity }: CreateClass) {
  return api.post("api/classes", {
    modalityId,
    scheduleId,
    capacity,
  });
}
