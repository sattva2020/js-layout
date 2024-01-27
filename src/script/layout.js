export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

// === створюємо константу з масиву обєктів з данними для header ===
const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/header__avatar.png',
  },
]

// === створюємо header ===
export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    // console.log(Object.entries(params))

    button.insertAdjacentElement('beforeend', img)
    
    header.insertAdjacentElement('beforeend', button)
  })

  return header
}



// =====






