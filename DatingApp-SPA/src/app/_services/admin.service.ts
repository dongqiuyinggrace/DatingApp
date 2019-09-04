import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsersWithRoles() {
    return this.http.get(this.baseUrl + 'admin/UsersWithRoles');
  }

  updateUserRoles(user: User, roles: {}) {
    return this.http.post(this.baseUrl + 'admin/editRoles/' + user.userName, roles);
  }

  getPhotosForApproval() {
    return this.http.get(this.baseUrl + 'admin/PhotosForModeration');
  }

  approvePhoto(id: number) {
    return this.http.post(this.baseUrl + 'admin/approvePhoto/' + id, {});
  }

  rejectPhoto(id: number) {
    return this.http.post(this.baseUrl + 'admin/rejectPhoto/' + id, {});
  }
}
