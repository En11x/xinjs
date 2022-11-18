---
category: Patterns
---

# Schdule

最大数量的异步任务调度器

## Usage

```ts
import { Scheduler } from '@xinjs/patterns';

const scheduler = new Schedule(2);
```

## Code

```ts
class Scheduler {
  //max task
  private max: number;
  //waiting task list
  private queue: any[];
  //current working task
  private currentTask: number;

  constructor(max: number) {
    this.max = max;
    this.queue = [];
    this.currentTask = 0;
  }

  async add(task: any) {
    if (this.currentTask >= this.max) {
      await new Promise((resolve) => this.queue.push(resolve));
    }
    this.currentTask++;
    const res = await task();
    this.currentTask--;
    this.queue.length && this.queue.shift()();
    return res;
  }
}
```

## Example

```ts
const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const scheduler = new Scheduler(2);

scheduler.add(() => sleep(1000).then(() => console.log(1)));
scheduler.add(() => sleep(2000).then(() => console.log(2)));
scheduler.add(() => sleep(1000).then(() => console.log(3)));
scheduler.add(() => sleep(3000).then(() => console.log(4)));
scheduler.add(() => sleep(2000).then(() => console.log(5)));

//console
// 1
// 3
// 2
// 5
// 4
```
