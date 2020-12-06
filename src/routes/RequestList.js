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
      .then(({ body }) => console.log("list: ", body))
      .catch(console.error);
  }, []);
  return (
    <div>
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Request</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Request">Trump rails against election result at rally ahead of crucial Georgia Senate runoff</td>
          <td data-label="Type">True</td>
        </tr>
        <tr>
          <td data-label="Request">President falsely claims he was ‘cheated’ and calls for people to vote in coming Senate races that will decide control of chamber</td>
          <td data-label="Type">False</td>
        </tr>
        <tr>
          <td data-label="Request">Armenian protesters demand prime minister quit over deal with Nagorno-Karabakh</td>
          <td data-label="Type">Waiting...</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
