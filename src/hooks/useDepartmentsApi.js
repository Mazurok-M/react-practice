// import { getDepartments } from "components/Api/defaultApi";
// import { useEffect, useState } from "react";

// export function useDepartmentsApi() {
//   const [departments, setDepartments] = useState([]);

//   useEffect(() => {
//     getDepartments().then(({ data: department }) => {
//       localStorage.setItem(
//         "departments",
//         JSON.stringify(
//           department.map(({ name, id }) => ({
//             id,
//             text: name,
//             relation: "departments",
//           }))
//         )
//       );
//     });

//     const getDepartmentsFromLocalStorage = JSON.parse(
//       localStorage.getItem("departments")
//     );

//     getDepartmentsFromLocalStorage
//       ? setDepartments(getDepartmentsFromLocalStorage)
//       : setDepartments([]);
//   }, []);

//   return [departments, setDepartments];
// }
