"use strict";

class Customer {
  constructor(firstname, lastname, customerNo, street, zip, city) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.customerNo = customerNo;
    this.street = street;
    this.zip = zip;
    this.city = city;
  }

  toString() {
    return this.firstname + "; " + this.lastname + "; " + this.customerNo + "; " + this.street + "; " + this.zip + "; " + this.city;
  }
}

class CustomerManager {
  constructor(fs, file) {
    this.fs = fs || require('fs');
    this.file = file || '/tmp/customers';
    this.store = new Map();
  }

  save() {
    this.fs.writeFileSync(this.file, this._serializeStore());
  }

  load() {
    let fileContent = this.fs.readFileSync(this.file, "utf8");
    this._deserializeStore(fileContent);
  }

  _serializeStore() {
    let result = [];
    for (const customer of this.store.values()) {
      result.push(customer.toString());
    }
    return result.join("\n");
  }

  _deserializeStore(input) {
    let store = this.store;
    input.split("\n").forEach(line => {
      const fields = line.split(";");
      store.set(fields[2], new Customer(
        fields[0],
        fields[1],
        fields[2],
        fields[3],
        fields[4],
        fields[5]
      ));
    });
  }

  add(customer) {
    this.store.set(customer.customerNo, customer);
  }

  remove(customer) {
    this.store.delete(customer.customerNo);
  }
}

module.exports = {Customer, CustomerManager};
