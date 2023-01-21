import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { permissionList } from '../components/api-test/permissionList';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  public apiUrl = permissionList;
  constructor() {}
  getPermissionList() {
    console.log('permission Services', this.apiUrl);
    return this.apiUrl;
  }
}
