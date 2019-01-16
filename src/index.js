const packages = require.context('../packages', true, /main\.vue$/)
packages.keys().forEach(item => {
  const name = path.join(item, '..')
})
