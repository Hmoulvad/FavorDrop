export class User {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: number;
  city: string;

  constructor(name: string, email: string, phone: string, address: string, zip: number, city: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.zip = zip;
    this.city = city;
  }
}
