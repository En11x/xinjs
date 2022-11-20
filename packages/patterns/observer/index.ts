const observers: Function[] = []

export default Object.freeze({
  notify: (data: any) => observers.forEach((observer) => observer(data)),
  subscribe: (func: Function) => observers.push(func),
  unsubscribe: (func: Function) => {
    ;[...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1)
      }
    })
  },
})
