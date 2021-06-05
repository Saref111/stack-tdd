import { Stack } from "../stack";

describe('Stack class tests', () => {
    let stack
    beforeEach(() => {
        stack = new Stack()
    });

    it('create new instance of Stack', () => {
        expect(stack)
    })

    it('get initial count value -1', () => {
        expect(stack.count).toBe(-1)
    })

    it('set first element and get count 0', () => {
        stack.set('element')

        expect(stack.count).toBe(0)
    })
    it('set first element, get first element, get count -1', () => {
        stack.set('element')
        
        expect(stack.pop).toBe('element')
        expect(stack.count).toBe(-1)
    })
    it('set set three elements, get the third one , get count 1', () => {
        stack.set('element0')
        stack.set('element1')
        stack.set('element2')


        const third = stack.pop

        expect(third).toBe('element2')
        expect(stack.count).toBe(1)
    })
});