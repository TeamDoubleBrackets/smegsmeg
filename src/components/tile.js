AFRAME.registerComponent('tile', {
  schema: {
    row: { type: 'number' },
    col: { type: 'number' }
  },
  init () {
    this.el.setAttribute('geometry', {
      primitive: 'plane',
      height: 0.7,
      width: 0.7
    })
    this.el.setAttribute('material', {
      color: '#FFFFFF'
    })
    this.el.setAttribute('position', {
      x: (2 - this.data.col) / 2 - 0.5,
      y: (2 - this.data.row) / 2 - 0.5,
      z: -2
    })
  }
})
