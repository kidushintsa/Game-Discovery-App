import noImage from "../assets/glogo.jpg"
const ImageCrop = (url:string, length:number, width:number) => {
  if(!url) return noImage
  const target = "media/";
  const index = url.indexOf(target) + target.length
  return url.slice(0, index) +  `crop/${length}/${width}/`+ url.slice(index)
}

export default ImageCrop