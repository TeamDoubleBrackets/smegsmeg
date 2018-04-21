let lastItemLink

export function linkHandler (link) {
  const grid = document.querySelector('#grid')
  const product = document.querySelector('#product')
  const back = document.querySelector('#back')

  grid.setAttribute('visible', link !== 'product')
  product.setAttribute('visible', link === 'product')
  back.setAttribute('visible', link !== 'categories')

  if (link !== 'product') {
    grid.setAttribute('data-grid', link)
  }

  if (link.startsWith('items-')) {
    lastItemLink = link
    back.setAttribute('back-button', 'categories')
  } else if (link === 'product') {
    back.setAttribute('back-button', lastItemLink)
  }
}
