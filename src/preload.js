import data from './data.json'

export function preload () {
  for (const [key, value] of Object.entries(data)) {
    for (const item of value) {
      const image = new Image(item.icon)
    }
  }
}
