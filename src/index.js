
const url = "https://pokeapi.co/api/v2/pokemon-form/25/"
const url2 = ""
const fetchData = async () => {
  const result = await axios.get(url)
  console.log(result) //ピカチュウの全体？情報
  console.log(result.data.sprites)　//ピカチュウ全ての画像
  console.log(result.data.sprites.front_default)　//ピカチュウ正面図
  console.log(result.data.pokemon.name)　//ピカチュウ名前
  
};

fetchData();

