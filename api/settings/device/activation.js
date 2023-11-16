
export default {
  set_activation: (dates) => [
    {
      url: "/device/set_activation/",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json:charset=UTF-8",
      },
      params: {
        date: dates,
      },
    },
    null,
  ],
  list_activation: () => [
    {
      url: "/device/list_activation/",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json:charset=UTF-8",
      },
    },
    null,
  ],
};
