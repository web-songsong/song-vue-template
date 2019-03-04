import { expect } from 'chai'
// import vueFn from '../vm'
// const { createComponent, createVM, destroyVM } = vueFn
// import comments from '../../src/components'
// const Btn = comments[0]['component']
// describe('哈哈', () => {
//   let vm
//   afterEach(() => {
//     destroyVM(vm)
//   })
//   it('create', () => {
//     vm = createComponent(Btn, true)
//     expect(vm.$el.classList.contains('svt-button')).to.true
//   })
//   it('has a created hook', () => {
//     expect(typeof Btn.created).to.equal('function')
//   })
// })

const sum = require('../../src/test')
describe('sum test suit', () => {
  it('test sum result', () => {
    expect(sum(1, 3)).to.equal(4)
  })
  it('appdemo', () => {
    expect(sum(1, 4)).to.equal(5)
  })
})
