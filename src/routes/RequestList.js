import React, { useEffect, useState } from "react";

export default function RequestList() {
  const [list, setList] = useState(null);
  useEffect(() => {
    fetch("http://0f899f22e5ee.ngrok.io/api/requests/userdashboard/", {
      method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
      mode: "no-cors",
    })
      .then(({body}) => console.log("list: ", body))
      .catch(console.error);
  }, []);
  return <div></div>;
}
