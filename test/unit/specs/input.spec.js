import { createVue, destroyVM } from '../util'
import { Input } from 'main'
describe('Input', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('create', () => {
    vm = createVue({
      template: `
        <svt-input placeholder="请输入内容" />
      `
    })
    let inputElm = vm.$el.querySelector('input')
    expect(inputElm.getAttribute('placeholder')).to.equal('请输入内容')
  })
})
