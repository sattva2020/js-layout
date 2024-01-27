import {
  createElement,
  createHeader,
} from '../../script/layout.js'

// const page = document.querySelector('.page')
// const header = createHeader()
// page.append(header)

// створюэмо заголовок h1
// const title = createElement('h1', 'title', "Ком'юніті")
// page.append(title)

const POST_LIST = [
  {
    NAV_LIST: [
      {text: 'База знань'},
      {active: false},
    ],
  },
  {
    NAV_LIST: [
      {text: 'Інформація'},
      {active: true},
    ],
  },
  {
    layout2Body_img: [{
      width: 343,
      height: 160,
      img: '/svg/layout2.svg',
      alt: 'Community Telegram',
    },
    ],
  },
  {
    layout2Content_list: {
      title: 'Що таке база знань?',
      text: 'База знаний - база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач',
      buttonText: `Перейти до ком'юніті у Телеграм`,
      buttonImg: '/svg/push_telegram.svg',
    },
  },
]

// document.addEventListener('DOMContentLoaded', () => {
//   const page = document.querySelector('.page')

//   // Создаем header и добавляем его в документ
//   const header = createHeader()
//   page.append(header)

//   // Создаем заголовок h1 и добавляем его в документ
//   const title = createElement('h1', 'title', "Ком'юніті")
//   page.append(title)

//   // Создаем main и добавляем его в документ
//   const layout2List = createElement('main', 'layout2__list')
//   page.append(layout2List)

//   // Создаем навигационное меню
//   const navList = createElement('nav', 'nav__list')
//   POST_LIST.forEach((postData) => {
//     const navigationList = createElement(
//       'div',
//       postData.NAV_LIST[1].active
//         ? 'nav__button'
//         : 'nav__button__inactive',
//       postData.NAV_LIST[0].text,
//     )
//     navList.append(navigationList)
//   })

//   layout2List.append(navList)

//   // Создаем блок с контентом
//   const layout2Content = createElement(
//     'div',
//     'layout2__content',
//   )

//   // Создаем изображение
//   const imgData = POST_LIST.find(
//     (item) => item.layout2Body_img,
//   )
//   if (imgData) {
//     const img = createElement('img', 'layout2--img')
//     Object.entries(imgData.layout2Body_img[0]).forEach(
//       ([key, value]) => {
//         img[key] = value
//       },
//     )
//     layout2Content.append(img)
//   }

//   // Создаем заголовок
//   const titleData = POST_LIST.find(
//     (item) => item.layout2Content_list,
//   )
//   if (titleData) {
//     const title = createElement(
//       'h2',
//       'layout2--title',
//       titleData.layout2Content_list.title,
//     )
//     layout2Content.append(title)
//   }

//   // Создаем текст информации
//   if (titleData) {
//     const text = createElement(
//       'p',
//       'layout2--info',
//       titleData.layout2Content_list.text,
//     )
//     layout2Content.append(text)
//   }

//   // Создаем кнопку
//   if (titleData) {
//     const button = createElement(
//       'button',
//       'layout2__button',
//       titleData.layout2Content_list.buttonText,
//     )
//     layout2Content.append(button)
//   }

//   layout2List.append(layout2Content)

//   return layout2List

//     console.log('Layout2 List:', layout2List)
//     console.log('Navigation List:', navList)
//     console.log('Layout2 Content:', layout2Content)

// })



// ===============================================================
// const createLayout2 = () => {
//   const layout2List = createElement('main', 'layout2__list')

//   const navList = createElement('nav', 'nav__list')

//   main.insertAdjacentElement('beforeend', nav)
//   document.body.insertAdjacentElement('beforeend', main)

//   const img = createElement('img', 'layout2--img')

//   POST_LIST.forEach((postData) => {
//     const navigationList = createElement(
//       'div',
//       postData.active
//         ? 'nav__list nav__button__inactive'
//         : 'nav__list',
//       postData.text,
//     )
//   })

//   // ===

//   Object.entries(postData.layout2Body_img).forEach(([key, value]) => {
//       img[key] = value
//     })

//     img.append(img)
    
//   // ===



//   }


// ===

// const post = createPost()
// page.append(post)

// Оголошення константи NAV_LIST зі списком елементів навігації
const NAV_LIST = ['База знань', 'Інформація']

// Оголошення об'єкта layout2Content з інформацією для відображення
const layout2Content_list = {
  title: 'Що таке база знань?',
  text: 'База знаний - база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач',
  buttonText: `Перейти до ком'юніті у Телеграм`,
  buttonImg: '/svg/push_telegram.svg',
}

const layout2Body_img = {
  width: 343,
  height: 160,
  img: '/svg/layout2.svg',
  alt: 'Community Telegram',
}
  const layout2List = createElement('main', 'layout2__list')

  // Створення навігаційного меню
  const navigationList = createElement('nav', 'nav__list')

  NAV_LIST.forEach((navItemText) => {
    const navButton = createElement('button', 'nav__button')

    if (navItemText === 'База знань') {
      navButton.classList.add('nav__button__inactive')
    }

    navButton.textContent = navItemText
    navigationList.append(navButton)
  })

  // Створення блоку з контентом
  const layout2ContentBlock = createElement(
    'div',
    'layout2__content',
  )

  //Створення зображення
  layout2Body_img.forEach(params) = () => {
  const layout2Image = createElement('img')

   Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })
    img.insertAdjacentElement('beforeend', img)
}
  return layout2Image

  // Створення заголовку
  const layout2Title = createElement(
    'h2',
    'layout2--title',
    layout2Content_list.title,
  )

  // Створення тексту інформації
  const layout2Info = createElement(
    'p',
    'layout2--info',
    layout2Content_list.text,
  )

  // Створення кнопки
  const layout2Button = createElement(
    'button',
    'layout2__button',
    layout2Content_list.buttonText,
  )

  // Додавання створених елементів до блоку з контентом
  layout2ContentBlock.append(layout2Image)
  layout2ContentBlock.append(layout2Title)
  layout2ContentBlock.append(layout2Info)
  layout2ContentBlock.append(layout2Button)

  // Додавання навігаційного меню та блоку з контентом до головного контейнера
  layout2List.append(navigationList)
  layout2List.append(layout2ContentBlock)

const layout2 = createLayout2()
page.append(layout2)
