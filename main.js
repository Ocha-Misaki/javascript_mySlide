{
  'use strict'
  //サムネイルを押した時の切り替え
  const leftThumbnailElement = document.getElementById('left_thumbnail')
  const centerThumbnailElement = document.getElementById('center_thumbnail')
  const rightThumbnailElement = document.getElementById('right_thumbnail')
  const mainSlide = document.getElementById('main_slide')
  const pElement = document.querySelector('p')
  
  const touchThumbnail = (element, color) =>{
    element.addEventListener('click',() => {
      mainSlide.className = color
      pElement.textContent = element.textContent
    })
  }
  touchThumbnail(leftThumbnailElement,'blue')
  touchThumbnail(centerThumbnailElement,'green')
  touchThumbnail(rightThumbnailElement,'pink')
  
  
  //ボタンを押した時の切り替え
  const leftButtonElement = document.getElementById('left_button')
  const rightButtonElement = document.getElementById('right_button')

  rightButtonElement.addEventListener('click', () => {
    if(mainSlide.classList.contains('blue')){
      mainSlide.className = 'green'
      pElement.textContent = centerThumbnailElement.textContent
    }else if(mainSlide.classList.contains('green')){
      mainSlide.className = 'pink'
      pElement.textContent = rightThumbnailElement.textContent
    }else if(mainSlide.classList.contains('pink')){
      mainSlide.className = 'blue'
      pElement.textContent = leftThumbnailElement.textContent
    }
  })

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
  }