import api from ".";

interface CreatePhysicalFitnessTest {
  weight: Number;
  height: Number;
  blood_pressure: string;
  body_fat_percentage: Number;
  body_mass_percentage: Number;
  result: boolean;
  doctorId: Number;
  studentId: Number;
}

export function createPhysicalFitnessTest({
  weight,
  height,
  blood_pressure,
  body_fat_percentage,
  body_mass_percentage,
  result,
  doctorId,
  studentId,
}: CreatePhysicalFitnessTest) {
  return api.post("api/physicalFitnessTests", {
    weight,
    height,
    blood_pressure,
    body_fat_percentage,
    body_mass_percentage,
    result,
    doctorId,
    studentId,
  });
}
