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

  // rightButtonElement.addEventListener('click', () => {
  //   if(mainSlide.classList.contains('blue')){
  //     mainSlide.className = 'green'
  //     pElement.textContent = centerThumbnailElement.textContent
  //   }else if(mainSlide.classList.contains('green')){
  //     mainSlide.className = 'pink'
  //     pElement.textContent = rightThumbnailElement.textContent
  //   }else if(mainSlide.classList.contains('pink')){
  //     mainSlide.className = 'blue'
  //     pElement.textContent = leftThumbnailElement.textContent
  //   }
  // })

  leftButtonElement.addEventListener('click',() => {
    if(mainSlide.classList.contains('blue')){
      mainSlide.className = 'pink'
      pElement.textContent = rightThumbnailElement.textContent
    }else if(mainSlide.classList.contains('green')){
      mainSlide.className = 'blue'
      pElement.textContent = leftThumbnailElement.textContent
    }else if(mainSlide.classList.contains('pink')){
      mainSlide.className = 'green'
      pElement.textContent = centerThumbnailElement.textContent
    }
  })

  
  
  const clickRightButton = () => {
    rightButtonElement.addEventListener('click',()=>{
      const thumbnails = [leftThumbnailElement,centerThumbnailElement,rightThumbnailElement]
      for(let i = 0; i<thumbnails.length; i++){
        mainSlide.className = thumbnails[i].className
        console.log(mainSlide.className)
        mainSlide.classList.remove('thumbnails')
        pElement.textContent = thumbnails[i].textContent
        if(i > 2){
          mainSlide.className = thumbnails[0].className
          console.log(mainSlide.className)
          mainSlide.classList.remove('thumbnails')
          pElement.textContent = thumbnails[0].textContent
        }
      }
    }
  )}

  clickRightButton()
}