/*eslint camelcase: ["error", {ignoreDestructuring: true}]*/

import { UserType } from "@/types/UserType";

export default class UserModel {
  firstName = "";
  lastName = "";
  phone = "";
  sex = 0;
  address: object = {};
  email = "";
  birthday: number = Date.now();

  constructor($data: UserType | null) {
    if ($data) {
      this.firstName = $data.firstName;
      this.lastName = $data.lastName;
      this.phone = $data.phone;
      this.sex = $data.sex;
      this.address = $data.address;
      this.email = $data.email;
      this.birthday = $data.birthday;
    }
  }
}
