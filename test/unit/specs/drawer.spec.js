import { createTest, destroyVM } from "../util"
import { Drawer } from "main"
describe("drawer", () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })
  it("create", () => {
    vm = createTest(Drawer, {})
    let el = vm.$el
    expect(el.classList.contains("svt_drawer")).to.be.true
  })
})
