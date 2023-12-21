import { getCities } from "components/Api/defaultApi";
import { useEffect, useState } from "react";

export function useCitiesApi() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities().then(({ data: cities }) => {
      localStorage.setItem(
        "cities",
        JSON.stringify(
          cities.map(({ text, id }) => ({
            id,
            text,
            relation: "cities",
          }))
        )
      );
    });

    const getCitiesFromLocalStorage = JSON.parse(
      localStorage.getItem("cities")
    );

    getCitiesFromLocalStorage
      ? setCities(getCitiesFromLocalStorage)
      : setCities([]);
  }, []);

  return [cities, setCities];
}
