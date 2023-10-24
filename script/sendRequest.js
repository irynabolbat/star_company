function sendRequest(data) {
  fetch("http://www.mocky.io/v2/5dfcef48310000ee0ed2c281", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Response from the server:", responseData);
    })
    .catch((error) => {
      throw new Error("Error sending the request:", error);
    });
}

export default sendRequest;