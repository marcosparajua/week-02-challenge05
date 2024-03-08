class Bill {
  #name;
  #address;
  #phone;
  #document;
  constructor(name, address, phone, document) {
    this.#name = name;
    this.#address = address;
    this.#phone = phone;
    this.#document = document;
  }
  getName(name) {
    return this.#name;
  }

  getAddress(address) {
    return this.#address;
  }

  getPhone(phone) {
    return this.#phone;
  }

  getDocument(document) {
    return this.#document;
  }
}

class Client {
  #name;
  #address;
  #phone;
  #document;
  constructor(name, address, phone, document) {
    this.#name = name;
    this.#address = address;
    this.#phone = phone;
    this.#document = document;
  }
  getName() {
    return this.#name;
  }

  getAddress() {
    return this.#address;
  }

  getPhone() {
    return this.#phone;
  }

  getDocument() {
    return this.#document;
  }
}

const bill = new Bill('FakeInc LLC', '123 Main St', '555-1234', '123456789');
console.log(bill.getName());
console.log(bill.getAddress());
console.log(bill.getPhone());
console.log(bill.getDocument());

const students = {
  age: '',
  name: '',
};

Object.create();
