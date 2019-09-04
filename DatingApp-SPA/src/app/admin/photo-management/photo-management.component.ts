import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Photo } from 'src/app/_models/photo';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photos: any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getPhotosForModeration();
  }

  getPhotosForModeration() {
    this.adminService.getPhotosForApproval().subscribe((photos) => {
      this.photos = photos;
    }, error => {
      console.log(error);
    });
  }

  approvePhoto(id: number) {
    this.adminService.approvePhoto(id).subscribe(() => {
      this.getPhotosForModeration();
    }, error => {
      console.log(error);
    });
  }

  rejectPhoto(id: number) {
    this.adminService.rejectPhoto(id).subscribe(() => {
      this.getPhotosForModeration();
    }, error => {
      console.log(error);
    });
  }

}
