type EventHandle = (...args: any[]) => any

/**
 * A Emitter Event center betteen publisher and subscriber
 */
interface Emitter {
  /**
   *
   * @param event subscribe event
   * @param handles callback
   */
  subscribe(event: string, ...handles: EventHandle[]): void

  /**
   *
   * @param event subscribe event
   * @param handle callback
   */
  unsubscribe(event: string, handle?: EventHandle): boolean

  /**
   *
   * @param event subscribe event
   * @param args publish data
   */
  publish(event: string, ...args: any[]): any[] | null
}

class EventEmitter implements Emitter {
  private eventMap = new Map<string, EventHandle[]>()

  subscribe(event: string, ...handle: EventHandle[]): void {
    let events = this.eventMap.get(event)
    if (!events) {
      this.eventMap.set(event, (events = []))
    }

    events.push(...handle)
  }

  unsubscribe(event: string, handle?: EventHandle | undefined): boolean {
    if (!handle) {
      return this.eventMap.delete(event)
    }

    const events = this.eventMap.get(event)
    if (!events) {
      return false
    }

    const index = events.indexOf(handle)
    if (index === -1) {
      return false
    }

    events.splice(index, 1)

    if (events.length === 0) {
      this.eventMap.delete(event)
    }

    return true
  }

  publish(event: string, ...args: any[]): any[] | null {
    const handles = this.eventMap.get(event)
    if (!handles) {
      return null
    }

    return handles.map((handle) => {
      try {
        return handle(...args)
      } catch (error) {
        console.error(error)
        return null
      }
    })
  }
}

export { EventEmitter as Emitter }
