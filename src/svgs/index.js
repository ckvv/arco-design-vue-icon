const modules = import.meta.glob('./*/*/*.svg', { as: 'raw', eager: true })

const icons = Object.keys(modules).reduce((pre, cur) => {
  const name = cur.split('/').pop().split('.').shift()
  pre[name] = modules[cur];
  return pre;
}, {});


export default icons;