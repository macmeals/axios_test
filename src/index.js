
const url = "https://pokeapi.co/api/v2/pokemon/ditto"
const fetchData = async () => {
  const result = await axios.get(url)
  console.log(result)
};

fetchData();

