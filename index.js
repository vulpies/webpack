import "./index.css";
import img_js from './assets/js_img.png';

const img = document.createElement('img')
img.src = img_js
img.className = 'image'
document.body.append(img)

console.log('Hello world')