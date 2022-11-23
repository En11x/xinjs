---
category: Patterns
---

# Observer

观察者模式

## Usage

```ts
import { Observer, Subject } from '@xinjs/patterns'

const subject = new Subject()

const observer1 = new Observer()
const observer2 = new Observer()

subject.attach(observer1)
subject.attach(observer2)

subject.notify()

subject.detach(observer1)

subject.notify()

//output:
// Observer:Reacted to the event.
// Observer:Reacted to the event.

// Observer:Reacted to the event.
```

## Code

```ts
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
```
