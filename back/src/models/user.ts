class User {
    private id: number;

    private firstName: string;
    private lastName: string;
    private address: string;
    private phoneNumber: number;

    constructor(
        id: number, firstName: string, lastName: string, address: string, phoneNumber: number
                )
        {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.phoneNumber = phoneNumber;
        }
}
