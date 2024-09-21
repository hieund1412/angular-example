import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/application/user.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(
    private userService: UserService,
    private form: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
