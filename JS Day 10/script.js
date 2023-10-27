// https://randomuser.me/api/
//randomuser.me/api/?results=100

// https://reqres.in/api/users
// console.log(fetch("https://reqres.in/api/users"));

// fetch("https://reqres.in/api/users/23")
//   .then((response) => {
//     if (response.ok) {
//       console.log("Success");
//     } else {
//       console.log("Failed");
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch("https://reqres.in/api/users/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const fetchURL = `https://reqres.in/api/user/${userNumber}/${email}`;
// fetch(fetchURL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "USER 1",
//   }),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// GET request with async/await
async function fetchUsers() {
  try {
    const response = await fetch("https://reqres.in/api/users/");
    const data = await response.json();
    const users = data.data.map(function (user) {
      return {
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        avatar: user.avatar,
      };
    });

    const userTable = document.getElementById("userTable");
    const tbody = userTable.querySelector("tbody");

    users.forEach(function (user) {
      const row = tbody.insertRow();
      const cellFirstName = row.insertCell(0);
      const cellLastName = row.insertCell(1);
      const cellEmail = row.insertCell(2);
      const cellAvatar = row.insertCell(3);

      cellFirstName.innerHTML = user.firstName;
      cellLastName.innerHTML = user.lastName;
      cellEmail.innerHTML = user.email;
      cellAvatar.innerHTML = `<img src="${user.avatar}" alt="user avatar">`;
    });

    console.log(users);
    return users;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}
fetchUsers();
