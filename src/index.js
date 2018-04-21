import { cylinderGrid } from './components/cylinder-grid'
import { tile } from './components/tile'
import { dataGrid } from './components/data-grid'
import { backButton } from './components/back-button'

import { preload } from './preload'

preload()

AFRAME.registerComponent('cylinder-grid', cylinderGrid)
AFRAME.registerComponent('tile', tile)
AFRAME.registerComponent('data-grid', dataGrid)
AFRAME.registerComponent('back-button', backButton)
