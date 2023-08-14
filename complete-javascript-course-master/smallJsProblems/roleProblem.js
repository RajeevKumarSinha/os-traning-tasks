"use strict";

const companyTestMy = {
  id: 1,
  name: "John Doe",
  role: "CEO",
  subordinates: [
    {
      id: 2,
      name: "Alice Johnson",
      role: "Manager",
      subordinates: [
        {
          id: 3,
          name: "Bob Smith",
          role: "Team Lead",
          subordinates: [
            {
              id: 4,
              name: "Charlie Brown",
              role: "Developer",
              subordinates: [],
            },
            {
              id: 5,
              name: "David Lee",
              role: "Developer",
              subordinates: [
                {
                  id: 4,
                  name: "Charlie Brown",
                  role: "Developer",
                  subordinates: [],
                },
                {
                  id: 4,
                  name: "Charlie Brown",
                  role: "Developer",
                  subordinates: [],
                },
              ],
            },
          ],
        },
        {
          id: 6,
          name: "Eve Taylor",
          role: "Team Lead",
          subordinates: [],
        },
      ],
    },
    {
      id: 6,
      name: "Eve Taylor",
      role: "Manager",
      subordinates: [],
    },
    {
      id: 6,
      name: "Eve Taylor",
      role: "Team Lead",
      subordinates: [],
    },
  ],
};

const company = {
  id: 1,
  name: "John Doe",
  role: "CEO",
  subordinates: [
    {
      id: 2,
      name: "Alice Johnson",
      role: "Manager",
      subordinates: [
        {
          id: 3,
          name: "Bob Smith",
          role: "Team Lead",
          subordinates: [
            {
              id: 4,
              name: "Charlie Brown",
              role: "Developer",
              subordinates: [],
            },
            {
              id: 5,
              name: "David Lee",
              role: "Developer",
              subordinates: [],
            },
          ],
        },
        {
          id: 6,
          name: "Eve Taylor",
          role: "Team Lead",
          subordinates: [],
        },
      ],
    },
  ],
};

const testCompany = {
  id: 10,
  name: "Jane Smith",
  role: "CEO",
  subordinates: [
    {
      id: 11,
      name: "Frank Johnson",
      role: "Manager",
      subordinates: [
        {
          id: 12,
          name: "Grace Adams",
          role: "Team Lead",
          subordinates: [],
        },
      ],
    },
  ],
};

// solution

function countEmployeesByRole(obj) {
  const roles = {};
  // if (obj.hasOwnProperty("role")) {
  //   if (roles.hasOwnProperty(obj.role)) {
  //     roles[obj.role] += 1;
  //   } else {
  //     roles[obj.role] = 1;
  //   }
  // }
  // if (obj.subordinates.length > 0) {
  //   roleFromArr(obj.subordinates);
  // } else {
  //   return;
  // }
  arrObj(obj);
  function arrObj(element) {
    if (element.hasOwnProperty("role")) {
      if (roles.hasOwnProperty(element.role)) {
        roles[element.role] += 1;
      } else {
        roles[element.role] = 1;
      }
    }
    if (element.subordinates.length > 0) {
      roleFromArr(element.subordinates);
    } else {
      return;
    }
  }
  function roleFromArr(arr) {
    arr.forEach(
      //(element) => {
      //   if (element.hasOwnProperty("role")) {
      //     if (roles.hasOwnProperty(element.role)) {
      //       roles[element.role] += 1;
      //     } else {
      //       roles[element.role] = 1;
      //     }
      //   }
      //   if (element.subordinates.length > 0) {
      //     roleFromArr(element.subordinates);
      //   } else {
      //     return;
      //   }
      // }
      arrObj
    );
  }
  return roles;
}

// console.log(company.hasOwnProperty("role"));

// countEmployeesByRole(company); //{CEO: 1,Manager: 1,Team Lead: 2,Developer: 2}
// countEmployeesByRole(testCompany); //{CEO: 1,Manager: 1,Team Lead: 1}
const value = countEmployeesByRole(companyTestMy); //{ CEO: 1, Manager: 2, 'Team Lead': 3, Developer: 4 }
// console.log(Object.keys(roles));
// console.log(roles);
console.log(value);
// an object argument , pass it inside any function , and mutate the copy not the og object
// dfs(rajeev) and bfs(uday)
//
