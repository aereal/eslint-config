class Greeter {
  private readonly message: string = "hello";

  /**
   * @deprecated
   */
  public greet(): string {
    return this.message;
  }
}

const greeter = new Greeter();
greeter.greet();
