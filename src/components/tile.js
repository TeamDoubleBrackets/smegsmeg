AFRAME.registerComponent('tile', {
  schema: {
    row: { type: 'number' },
    col: { type: 'number' }
  },
  init () {
    this.el.setAttribute('geometry', {
      primitive: 'plane',
      height: 0.8,
      width: 0.8
    })
    this.el.setAttribute('material', {
      color: '#FFFFFF'
    })
    this.el.setAttribute('position', {
      x: 2 - this.data.col - 0.5,
      y: 0.5 - this.data.row,
      z: -2.5
    })
  }
})
