import { createTest, destroyVM } from '../util'
import { Button } from 'main'

describe('Button', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', () => {
    vm = createTest(Button, {})
    let el = vm.$el
    expect(el.classList.contains('svt-button')).to.be.true
  })
})
