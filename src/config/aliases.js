const aliases = (prefix = `src`) => ({
  '@api': `${prefix}/api`,
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@hooks': `${prefix}/hooks`,
  '@pages': `${prefix}/pages`,
  '@routes': `${prefix}/routes`,
  '@store': `${prefix}/store`,
  '@styles': `${prefix}/styles`,
  '@utils': `${prefix}/utils`,
  // '@atoms': `${prefix}/components/atoms`,
  // '@molecules': `${prefix}/components/molecules`,
  // '@organisms': `${prefix}/components/organisms`,
  // '@templates': `${prefix}/components/templates`,
  // '@enums': `${prefix}/enums`,
  // '@icons': `${prefix}/components/atoms/Icons`,
})

module.exports = aliases
