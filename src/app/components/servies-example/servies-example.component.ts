import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-servies-example',
  templateUrl: './servies-example.component.html',
  styleUrls: ['./servies-example.component.css'],
  providers: [StudentService],
})
export class ServiesExampleComponent {
  public studentList: any;

  constructor(private data: StudentService) {
    this.studentList = data.getStudents();
    console.log(this.studentList);
  }
}
