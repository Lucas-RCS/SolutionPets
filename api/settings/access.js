
export default {
  login: (serialNumber, activateKey) => [
    {
      url: "/device/validate",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json:charset=UTF-8",
      },
      params: {
        activateKey: activateKey,
        serialNumber: serialNumber,
      },
    },
    null,
  ],
};
