import { ENDPOINTS, getFullUrl } from "./endpoints";

export const fetchCategories = async () => {
  try {
    const response = await fetch(getFullUrl(ENDPOINTS.categories));
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
