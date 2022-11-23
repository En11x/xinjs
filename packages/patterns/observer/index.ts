/**
 * The Observer interfaces declares the update method,used by Subjects.
 */
interface Observer {
  //Receive update from subject
  update(subject: Subject): void
}

/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
interface Subject {
  //Attach an observer to the subject
  attach(observer: Observer): void

  //Detach an observer from the subject
  detach(observer: Observer): void

  //Notify all observers about an event
  notify(): void
}

/**
 * The Subject owns some important state and notifies observers when the state changes.
 */
class ConcreteSubject implements Subject {
  /**
   * @type {Observer} List of Subsribers.In real life,the list of subscribers can be stored more comprehensively.
   */
  private observers: Observer[] = []

  /**
   *
   * @param observer
   * the subscription management methods.
   */
  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer)
    if (isExist) {
      return console.log('Subject:Observer has been attached already')
    }

    this.observers.push(observer)
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    if (index === -1) {
      return console.log('Subject:Noneexistent observer')
    }

    this.observers.splice(index, 1)
  }

  /**
   * Trigger an update in each subscriber
   */
  notify(): void {
    for (const observer of this.observers) {
      observer.update(this)
    }
  }
}

class ConcreteObserver implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject) {
      console.log('Observer:Reacted to the event.')
    }
  }
}

export { ConcreteSubject as Subject, ConcreteObserver as Observer }
