import { Component } from '@angular/core';
import { PermissionService } from 'src/app/services/permission.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css'],
})
export class ApiTestComponent {
  public permissionList: any;
  public expand = true;

  public checkboxForm = new FormGroup({
    permissionArray: new FormArray([], [Validators.required]),
  });

  constructor(private userPermission: PermissionService) {
    this.permissionList = userPermission.getPermissionList();
    console.log('Permission List are', this.permissionList);
    console.log(
      'Permission List are',
      this.permissionList[0].priviliage[0].value
    );
  }

  handleChange(e: any) {
    console.log('Checked Value', e);
  }
  handleSubmit() {
    return (
      this.checkboxForm.controls,
      console.log('submitted form', this.checkboxForm.controls)
    );
  }
}
