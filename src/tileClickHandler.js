export function tileClickHandler (link) {
  const grid = document.querySelector('#grid')
  const product = document.querySelector('#product')

  if (link === 'product') {
    product.setAttribute('visible', 'true')
    grid.setAttribute('visible', 'false')
  } else {
    grid.setAttribute('visible', 'true')
    product.setAttribute('visible', 'false')
    grid.setAttribute('data-grid', link)
  }
}
