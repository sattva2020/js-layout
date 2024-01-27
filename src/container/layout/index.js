// Iмпорт createHeader та createElement
import {
  createHeader,
  createElement,
} from '../../script/layout'

// Отримання посилання на елемент .page
const page = document.querySelector('.page')

// Створення та додавання header
const header = createHeader()
page.append(header)

// Створення та додавання заголовка h1
const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)

// Оголошення константи NAV_LIST зі списком елементів навігації
const NAV_LIST = ['База знань', 'Інформація']

// Оголошення об'єкта communityContent з інформацією для відображення
const layout2Content = {
  imageSrc: '/svg/layout2.svg',
  title: 'Що таке база знань?',
  info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
  button_textContent: "Перейти до ком'юніті у Телеграм",
}

// Створення <main class="layout2__list">
const layout2List = createElement('main', 'layout2__list')

// Створення навігаційного меню
const navList = createElement('nav', 'nav__list')

NAV_LIST.forEach((navItemText) => {
  const navButton = createElement('button', 'nav__button')

  if (navItemText === 'База знань') {
    navButton.classList.add('nav__button__inactive')
  }

  navButton.textContent = navItemText
  navList.append(navButton)
})

// Створення блоку з контентом
const layout2ContentBlock = createElement(
  'div',
  'layout2__content',
)
// layout2ContentBlock.className = 'layout2__content'

// Створення зображення
const layout2Image = createElement('img', 'layout2--img')
layout2Image.src = layout2Content.imageSrc
layout2Image.alt = 'Community Telegram'

// Створення заголовку
const layout2Title = createElement(
  'h2',
  'layout2--title',
  layout2Content.title,
)

// Створення тексту інформації
const layout2Info = createElement(
  'p',
  'layout2--info',
  layout2Content.info,
)

// Створення кнопки
const layout2Button = createElement(
  'button',
  'layout2__button',
  layout2Content.button_textContent,
)


// Додавання створених елементів до блоку з контентом
layout2ContentBlock.append(layout2Image)
layout2ContentBlock.append(layout2Title)
layout2ContentBlock.append(layout2Info)
layout2ContentBlock.append(layout2Button)

// Додавання навігаційного меню та блоку з контентом до головного контейнера
layout2List.append(navList)
layout2List.append(layout2ContentBlock)

page.append(layout2List)
