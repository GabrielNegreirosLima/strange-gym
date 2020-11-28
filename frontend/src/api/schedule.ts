import api from ".";
import { signUp } from "./auth";

interface CreateSchedule {
  day_of_week: string;
  time_initial: string;
  time_end: number;
}

export function fetchSchedules() {
  return api.get("api/schedules");
}

export function createSchedule({
  day_of_week,
  time_initial,
  time_end,
}: CreateSchedule) {
  return api.post("api/schedules", {
    day_of_week,
    time_initial,
    time_end,
  });
}
