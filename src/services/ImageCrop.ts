
const ImageCrop = (url:string, length:number, width:number) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length
  return url.slice(0, index) +  `crop/${length}/${width}/`+ url.slice(index)
}

export default ImageCrop