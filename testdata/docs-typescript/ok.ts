/** User is ... */
export class User {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /** fullName is ... */
  public fullName(): string {
    return [this.firstName, this.lastName].join(" ");
  }
}
