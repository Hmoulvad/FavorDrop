export class User {
  UID: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: number;
  city: string;

  constructor(UID: string, name: string, email: string, phone: string, address: string, zip: number, city: string) {
    this.UID = UID;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.zip = zip;
    this.city = city;
  }


}
