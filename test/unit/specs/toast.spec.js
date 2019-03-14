import { createVue, destroyVM } from '../util'
import { Toast } from 'main'
describe('Toast', () => {
  let vm
  afterEach(() => {
    vm && vm.instance.remove()
  })
  it('create', () => {
    vm = createVue({
      created() {
        this.instance = this.$Toast()
      }
    })
    expect(document.body.querySelector('.svt-toast')).to.exist
  })
  it('remove', () => {
    vm = createVue({
      created() {
        this.instance = this.$Toast()
      }
    })
    expect(document.body.querySelector('.svt-toast')).to.exist
    vm.$destroy()

    // vm.instance.handleAfterLeave()
    expect(document.body.querySelector('.svt-toast')).to.not.exist
  })
  it('animatin finish', () => {
    vm = createVue({
      created() {
        this.instance = this.$Toast()
      }
    })
    expect(document.body.querySelector('.svt-toast')).to.exist
    vm.instance.handleAfterLeave()
    expect(document.body.querySelector('.svt-toast')).to.not.exist
  })
  it('vm isVisible state', done => {
    vm = createVue({
      created() {
        this.instance = this.$Toast({ duration: 3000 })
      }
    })
    expect(vm.instance.isVisible).to.true
    setTimeout(() => {
      expect(vm.instance.isVisible).to.false
      done()
    }, 3000)
  })
})
