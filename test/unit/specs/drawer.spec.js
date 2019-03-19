import { createVue, createTest, destroyVM } from '../util'
import { Drawer } from 'main'
describe('drawer', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it('close', () => {
    vm = createVue({
      data() {
        return {
          visible: false
        }
      },
      template: `
        <svt-drawer v-model="visible" />
      `
    })
    expect(vm.$el.querySelector('.drawer_hint')).to.exist
    vm.$data.visible = true
    expect(vm.$data.visible).to.true
    vm.$el.querySelector('.drawer_hint').click()
    expect(vm.$data.visible).to.false
  })
})
