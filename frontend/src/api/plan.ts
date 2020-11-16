import api from ".";
import { signUp } from "./auth";

interface CreatePlan {
  frequency: string;
  billing_frequency: string;
  price: number;
}

export function fetchPlans() {
  return api.get("api/plans");
}

export function createPlan({
  frequency,
  billing_frequency,
  price,
}: CreatePlan) {
  return api.post("api/plans", {
    frequency,
    billing_frequency,
    price,
  });
}
