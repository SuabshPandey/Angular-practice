import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}
  getStudents() {
    return [
      {
        id: 1,
        name: 'Subash',
        email: 'subash.citytech.global.com',
        roll: 42,
        phone: 9898989898,
      },
      {
        id: 2,
        name: 'Basanta',
        email: 'basanta.citytech.global.com',
        roll: 12,
        phone: 9898989898,
      },
      {
        id: 3,
        name: 'Dhiraj',
        email: 'dhiraj.citytech.global.com',
        roll: 32,
        phone: 9898989898,
      },
      {
        id: 4,
        name: 'Subash',
        email: 'subash.citytech.global.com',
        roll: 52,
        phone: 9898989898,
      },
      {
        id: 5,
        name: 'Susan',
        email: 'susan.citytech.global.com',
        roll: 52,
        phone: 9898989898,
      },
    ];
  }
}
