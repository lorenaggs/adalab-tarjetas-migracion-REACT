// const URL_SERVER = "https://awesome-profile-cards.herokuapp.com/card";
const dataApi = (data) => {
  return fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};
export default dataApi;
