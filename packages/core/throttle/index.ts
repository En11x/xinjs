export const throttle = (fn: any, wait: number) => {
  let inThrottle = false

  return (...args: any) => {
    let context = this
    if (!inThrottle) {
      inThrottle = true
      fn.apply(context, args)
      setTimeout(() => {
        inThrottle = false
      }, wait)
    }
  }
}
