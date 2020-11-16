import api from ".";

interface CreateModality {
  name: string;
}

export function fetchModalities() {
  return api.get("api/modalities");
}
export function createModality({ name }: CreateModality) {
  return api.post("api/modalities", {
    name,
  });
}
