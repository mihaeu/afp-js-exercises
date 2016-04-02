"use strict";

describe("Exercise 14", () => {
  let Customer = require("../src/exercise14").Customer;
  let CustomerManager = require("../src/exercise14").CustomerManager;

  it("creates customer", () => {
    let customer = new Customer("Max", "Mustermann", 1, "Musterstr. 1", 12345, "Musterstadt");
    expect(customer.firstname).toBe("Max");
    expect(customer.lastname).toBe("Mustermann");
    expect(customer.customerNo).toBe(1);
    expect(customer.zip).toBe(12345);
    expect(customer.city).toBe("Musterstadt");
  });

  it("", () => {
    let customer1 = new Customer("Michael", "Haeuslmann", 1, "Musterstr. ", 12345, "Musterstadt");
    let customer2 = new Customer("Michael", "Haeuslmann", 2, "Musterstr. ", 12345, "Musterstadt");
    let customer3 = new Customer("Michael", "Haeuslmann", 3, "Musterstr. ", 12345, "Musterstadt");
    let manager = new CustomerManager();
    manager.add(customer1);
    manager.add(customer2);
    manager.add(customer3);
    expect(manager.store.size).toBe(3);

    manager.save();
    manager.remove(customer1);
    manager.remove(customer2);
    manager.remove(customer3);
    expect(manager.store.size).toBe(0);

    manager.load();
    expect(manager.store.size).toBe(3);
  });
});
