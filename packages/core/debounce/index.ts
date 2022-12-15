export const debounce = (fn: any, wait: number) => {
  let timer: any
  return (...args: any) => {
    const context = this
    if (timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      timer = null
      fn.apply(context, args)
    }, wait)
  }
}
