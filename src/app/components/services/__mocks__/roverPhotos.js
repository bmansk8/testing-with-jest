const fakeImgs = {
  "Photos":[
    {
      "img_src":'123abc',
      "id":'0'
  },
    {
      "img_src":'abc123',
      "id":'1'
    }
  ]
}

export default async () => {
  const data = await new Promise(resolve=>{
    resolve(fakeImgs.Photos)
  })
  return data;
}