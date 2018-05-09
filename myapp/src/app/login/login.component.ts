import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../utils/service/http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: string = "";
  upwd: string = "";
  constructor(private myService: MyHttpService, private myRouter: Router) { }

  ngOnInit() {
  }
  login() {
    this.myService.sendPostRequest(
      'http://localhost:3000/user/login',
      { uname: this.uname, upwd: this.upwd })
      .subscribe((result: any) => {
        console.log(result);
        if (result.code == 1) {
          this.myRouter.navigateByUrl('/todobox');
        }
        else {
          alert('登录失败！');
        }
      })
  }

  register() {
    this.myRouter.navigateByUrl('/register');
  }

}
