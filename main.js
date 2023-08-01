{
  'use strict'
  //サムネイルを押した時の切り替え
  const leftThumbnailElement = document.getElementById('left_thumbnail')
  const centerThumbnailElement = document.getElementById('center_thumbnail')
  const rightThumbnailElement = document.getElementById('right_thumbnail')
  const mainSlide = document.getElementById('main_slide')
  const pElement = document.querySelector('p')
  
  const touchThumbnail = (element) =>{
    element.addEventListener('click',() => {
      mainSlide.className = element.className
      mainSlide.classList.remove('thumbnails')
      pElement.textContent = element.textContent
    })
  }
  touchThumbnail(leftThumbnailElement)
  touchThumbnail(centerThumbnailElement)
  touchThumbnail(rightThumbnailElement)
  
  
  //ボタンを押した時の切り替え
  const leftButtonElement = document.getElementById('left_button')
  const rightButtonElement = document.getElementById('right_button')
  const thumbnails = [leftThumbnailElement,centerThumbnailElement,rightThumbnailElement]
  const colors = ['blue', 'green', 'pink']
  let ThumbnailIndex;

  rightButtonElement.addEventListener('click',()=>{
    ThumbnailIndex = colors.indexOf(mainSlide.className)
    ThumbnailIndex++
    if(ThumbnailIndex > 2){
      mainSlide.className = colors[0]
      pElement.textContent = thumbnails[0].textContent
    }
    else{mainSlide.className = colors[ThumbnailIndex]
    pElement.textContent = thumbnails[ThumbnailIndex].textContent
    }
  })

  leftButtonElement.addEventListener('click',() => {
    ThumbnailIndex = colors.indexOf(mainSlide.className)
    ThumbnailIndex--
    if(ThumbnailIndex < 0){
      mainSlide.className = colors[2]
      pElement.textContent = thumbnails[2].textContent
    }else{mainSlide.className = colors[ThumbnailIndex]
    pElement.textContent = thumbnails[ThumbnailIndex].textContent
    }
  })
  
}