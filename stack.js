export class Stack {
    constructor() {
        this._count = -1
        this._storage = {}
    }

    set(element) {
        this._count++
        this._storage[this._count] = element
    }
    get count() {
        return this._count
    }
    get pop() {
        const el = this._storage[this._count]
        this._count--
        return el
    }
}