class User {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public fullName(): string {
    return [this.firstName, this.lastName].join(" ");
  }
}

const user = new User("ae", "real");
console.log(user);
