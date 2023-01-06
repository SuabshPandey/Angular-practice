export class InputTextDemo {
  fname: string = 'Subash';
  lname: string;
  age: number;
  email: string;
  password: string;

  onClick(): any {
    this.fname = 'Subash';
    this.lname = 'Pandey';
    this.age = 23;
    this.email = 'subash@gmail.com';
    this.password = 'subash';
    console.log(
      'Data',
      this.fname,
      this.lname,
      this.age,
      this.email,
      this.password
    );
  }
}
