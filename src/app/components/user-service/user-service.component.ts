import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css'],
  providers: [StudentService],
})
export class UserServiceComponent {
  public userList: any;

  constructor(private users: StudentService) {
    this.userList = users.getStudents();
  }
}
