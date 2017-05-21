export default class Customer {
  constructor (obj) {
    obj.firstName = this.firstName
    obj.lastName = this.lastName
    obj.nationalite = this.nationalite
    obj.mail = this.mail
  }
}
