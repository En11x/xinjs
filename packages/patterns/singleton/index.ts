/**
 * The Singleton class define the `getInstance` method that lets clients access the unique singleton instance
 */
class Singleton {
  private static instance: Singleton

  /**
   * The Singleton's constructor should always be private to prevent direct construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method controls the access to the single
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}

export default Singleton
