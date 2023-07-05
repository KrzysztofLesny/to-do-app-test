export const peopleQuery = () =>
  fetch("https://swapi.dev/api/people/").then((res) => res.json());
