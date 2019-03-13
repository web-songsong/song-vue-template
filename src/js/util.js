export const routerPush = self => {
  self.$router &&
    (self.index = self.$router.beforeHooks.push((to, from, next) => {
      self.remove()
      next(true)
    }))
}
export const routerPop = self => {
  self.$router && self.$router.beforeHooks.pop()
}
