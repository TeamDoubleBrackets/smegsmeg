import { toRadians } from '../utils'

export const tile = {
  schema: {
    row: { type: 'number' },
    col: { type: 'number' },
    nrow: { type: 'number' },
    ncol: { type: 'number' },
    icon: { type: 'asset' }
  },
  init () {
    setTileTransform(this)
    setTileGeometry(this)

    const image = document.createElement('a-image')
    image.setAttribute('src', this.data.icon)
    image.setAttribute('width', 0.7)
    image.setAttribute('height', 0.7)
    image.setAttribute('position', { x: 0, y: 0, z: 0.02 })
    this.el.appendChild(image)

    this.el.addEventListener('click', function () {
      console.log('click')
    })
  }
}

const CYLINDER_RADIUS = 5
const ANGLE_STEP = 12
const CAMERA_OFFSET = 2.5

function setTileTransform ({ data, el }) {
  const { row, col, nrow, ncol } = data
  const angleOffset = ANGLE_STEP * (ncol / 2 - 0.5) + 90

  const phi = col * ANGLE_STEP - angleOffset
  const phiRad = toRadians(phi)
  el.setAttribute('rotation', {
    y: -phi - 90
  })
  el.setAttribute('position', {
    x: CYLINDER_RADIUS * Math.cos(phiRad),
    y: (nrow - 1) / 2 - row,
    z: CYLINDER_RADIUS * Math.sin(phiRad) + CAMERA_OFFSET
  })
}

function setTileGeometry ({ el }) {
  el.setAttribute('geometry', {
    primitive: 'plane',
    height: 0.8,
    width: 0.8
  })
  el.setAttribute('material', {
    color: '#FFFFFF'
  })
}
