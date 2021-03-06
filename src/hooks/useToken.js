// import { useEffect, useState } from "react";

// const useToken = (user) => {
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     const email = user?.user?.email;
//     const currentUser = { email: email };
//     console.log("auto sync");
//     // fetch the data to put backend
//     fetch(`https://secret-bastion-89260.herokuapp.com/user/${email}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(currentUser),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log("data inside token", data);
//         const accessToken = data.token;
//         localStorage.setItem("accessToken", accessToken);
//         setToken(accessToken);
//       });
//   }, [user]);
//   return [token];
// };
// export default useToken;

import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };

    if (email) {
      console.log(email);
      fetch(`https://secret-bastion-89260.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
