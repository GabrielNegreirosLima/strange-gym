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

export function fetchTrainingsById(id: number) {
  return api.get(`api/trainings/${id}`);
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
