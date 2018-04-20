const CYLINDER_RADIUS = 5
const ANGLE_STEP = 12
const CAMERA_OFFSET = 2.5

export const tile = {
  schema: {
    row: { type: 'number' },
    col: { type: 'number' },
    nrow: { type: 'number' },
    ncol: { type: 'number' }
  },
  init () {
    const { row, col, nrow, ncol } = this.data
    const angleOffset = ANGLE_STEP * (ncol / 2 - 0.5) + 90

    const phi = col * ANGLE_STEP - angleOffset
    const phiRad = toRadians(phi)
    this.el.setAttribute('rotation', {
      y: -phi - 90
    })
    this.el.setAttribute('position', {
      x: CYLINDER_RADIUS * Math.cos(phiRad),
      y: (nrow - 1) / 2 - row,
      z: CYLINDER_RADIUS * Math.sin(phiRad) + CAMERA_OFFSET
    })

    this.el.setAttribute('geometry', {
      primitive: 'plane',
      height: 0.8,
      width: 0.8
    })
    this.el.setAttribute('material', {
      color: '#FFFFFF'
    })

    this.el.addEventListener('click', function () {
      console.log('click')
    })
  }
}

function toRadians (degrees) {
  return degrees / 180 * Math.PI
}
