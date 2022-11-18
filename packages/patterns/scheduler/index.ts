//支持并发数量的异步任务调度器
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

export default Scheduler;
