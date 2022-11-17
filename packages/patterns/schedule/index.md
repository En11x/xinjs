---
category: Patterns
---

# Schdule

最大数量的异步任务调度器

## Usage

```ts
import { Schedule } from '@xinjs/patterns';

const schedule = new Schedule(2);
```

## code

```ts
class Schedule {
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

## example

```ts
const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const schedule = new Schedule(2);

schedule.add(() => sleep(1000).then(() => console.log(1)));
schedule.add(() => sleep(2000).then(() => console.log(2)));
schedule.add(() => sleep(1000).then(() => console.log(3)));
schedule.add(() => sleep(3000).then(() => console.log(4)));
schedule.add(() => sleep(2000).then(() => console.log(5)));

//console
// 1
// 3
// 2
// 5
// 4
```
