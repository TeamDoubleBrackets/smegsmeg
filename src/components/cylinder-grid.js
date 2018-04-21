export const cylinderGrid = {
  schema: {
    rows: { type: 'number' },
    columns: { type: 'number' }
  },
  init () {
    for (let row = 0; row < this.data.rows; row++) {
      for (let col = 0; col < this.data.columns; col++) {
        const child = document.createElement('a-entity')
        child.setAttribute('tile', {
          row,
          col,
          nrow: this.data.rows,
          ncol: this.data.columns
        })
        this.el.appendChild(child)
      }
    }
    this.el.addEventListener('endFade', function () {
      console.log("event")
      document.querySelector("#categories").setAttribute('visible',false)
      document.querySelector("#products").setAttribute('visible',true)
    })
  }
}
