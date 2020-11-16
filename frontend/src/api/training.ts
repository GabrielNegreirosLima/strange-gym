import api from ".";
import { signUp } from "./auth";

interface CreateTraining {
  description: string;
  teacherId: string | number;
  enrollmentId: string | number;
}

export function fetchTrainings() {
  return api.get("api/trainings");
}

export function createTraining({
  description,
  teacherId,
  enrollmentId,
}: CreateTraining) {
  return api.post("api/trainings", {
    description,
    teacherId,
    enrollmentId,
  });
}
