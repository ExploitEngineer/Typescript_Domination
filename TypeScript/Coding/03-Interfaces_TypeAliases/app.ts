// Interfaces and Type Aliases

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function getDataOfUser(obj: User): void {
  console.log(obj.email);
}

// extends interfaces
interface Admin extends User {
  admin: boolean;
}

function abcd(obj: Admin) {
  obj.admin = true;
  console.log(obj);
}
