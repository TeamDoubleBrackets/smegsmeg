import { linkHandler } from "../linkHandler"

export const backButton = {
    schema: { type: 'string' },
    init () {
        this.el.addEventListener('click', () =>
            this.data && linkHandler(this.data)
        )
    }
}
