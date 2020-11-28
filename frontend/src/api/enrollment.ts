import api from ".";

export function fetchEnrollments() {
  return api.get("api/enrollments");
}

interface CreateEnrollment {
  studentId: string;
  plansId: string;
}

export function createEnrollment({ studentId, plansId }: CreateEnrollment) {
  return api.post("api/enrollments", {
    studentId,
    plansId,
  });
}
