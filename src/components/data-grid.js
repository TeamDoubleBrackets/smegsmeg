import data from '../data.json'

export const dataGrid = {
  schema: { type: 'string' },
  init () {
    this.el.setAttribute('cylinder-grid', {
      rows: 2,
      columns: 4
    })
  },
  update (oldData) {
    if (oldData !== this.data) {
      const values = data[this.data]
      const children = this.el.children
      for (let i = 0; i < 8; i++) {
        children[i].setAttribute('tile', {
          icon: values[i].icon,
          label: values[i].label,
          link: values[i].link
        })
      }
    }
  }
}
