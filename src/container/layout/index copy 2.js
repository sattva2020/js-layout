import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')
const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', "Ком'юніті")
page.append(title)

// ====

const POST_LIST = [
  {
    navlist: [
      { text: 'База знань', active: false },
      { text: 'Інформація', active: true },
    ],
  },
  {
    img: [
      { src: '/svg/layout2.svg' },
      { alt: 'Community Telegram' },
    ],
  },
  {
    layout2__content: [
      {
        h2__text: 'Що таке база знань?',
        p__text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
        button__text: "Перейти до ком'юніті у Телеграм",
      },
    ],
  },
]

const createPost = () => {
  const postList = createElement('main', 'layout2__list')

  // Створення навігаційного меню
  const navigationList = createElement('nav', 'nav__list')

  POST_LIST.forEach((postData) => {
    const st = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    // ===

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    // ===

    postHeader.append(categoryList, dateSpan)

    // ===

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )

    post.append(postHeader, infoParagraph)

    // ===

    postList.append(post)
  })

  return postList
}

// ===

const post = createPost()
page.append(post)

// =========================================================================
