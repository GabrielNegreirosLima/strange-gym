export interface Student {
  id: string | number;
  name: string;
  cpf: string;
  rg: string;
  birth_date: string;
  cred_card_number: string;
  cred_card_issuer: string;
  cred_card_name: string;
  cred_card_cvv: string;
}

export interface Plan {
  id: string | number;
  frequency: "2" | "3" | "4" | "5" | "6" | "7";
  billing_frequency: "monthly" | "semiannual" | "yearly";
  price: number;
}
export interface Modality {
  id: string | number;
  name: string;
}
export interface Schedule {
  id: string | number;
  day_of_week: string;
  time_initial: string;
  time_end: string;
}
export interface Enrollment {
  id: string | number;
  plan: Plan;
  student: Student;
}
export interface Training {
  id: string | number;
  description: string;
  teacherId: string | number;
  enrollmentId: string | number;
}
