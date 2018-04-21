import { toRadians } from '../utils'
import { linkHandler } from '../linkHandler'

export const tile = {
    schema: {
        row: { type: 'number' },
        col: { type: 'number' },
        nrow: { type: 'number' },
        ncol: { type: 'number' },
        icon: { type: 'asset' },
        label: { type: 'string' },
        link: { type: 'string' }
    },
    init () {
        setTileTransform(this)
        setTileGeometry(this)
        setAnimation(this)

        const image = document.createElement('a-image')
        image.className = 'image'
        image.style.borderRadius = '2px'
        image.setAttribute('width', 0.5)
        image.setAttribute('height', 0.5)
        image.setAttribute('position', { x: 0, y: 0.1, z: 0.02 })
        this.el.appendChild(image)

        const label = document.createElement('a-entity')
        label.className = 'label'
        label.setAttribute('text', {
            align: 'center',
            color: '#000',
            width: 2
        })
        label.setAttribute('position', { x: 0, y: -0.27, z: 0.02 })
        this.el.appendChild(label)

        this.el.addEventListener('click', () => {
            if (this.data.link) {
                const children = this.el.parentNode.childNodes
                children.forEach(node => node.emit('anim-out'))
                setTimeout(() => {
                    children.forEach(node => node.emit('anim-in'))
                    linkHandler(this.data.link)
                }, 500)
            }
        })
    },
    update (oldData) {
        if (oldData.icon !== this.data.icon) {
            this.el.querySelector('.image').setAttribute('src', this.data.icon)
        }
        if (oldData.label !== this.data.label) {
            this.el.querySelector('.label').setAttribute('text', {
                value: this.data.label
            })
        }
        this.el.classList.toggle('clickable', !!this.data.link)
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

function setAnimation({ el }) {
    const anim1 = document.createElement('a-animation')
    anim1.setAttribute('attribute', 'scale')
    anim1.setAttribute('to', "0 0 0")
    anim1.setAttribute('dur', 300)
    anim1.setAttribute('begin','anim-out')
    el.appendChild(anim1)

    const anim2 = document.createElement('a-animation')
    anim2.setAttribute('attribute', 'scale')
    anim2.setAttribute('to', "1 1 1")
    anim2.setAttribute('dur', 300)
    anim2.setAttribute('begin','anim-in')
    el.appendChild(anim2)
}
