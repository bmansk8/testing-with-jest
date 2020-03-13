export default async () => {
  const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&page=1&api_key=C9zeqODcfauPysuxbTCwTp80uxLdDsQZzu5XLBTd')
  const json = await response.json();
  return json.photos;
}
//simple api call to nasa then return the json.photos array