import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../utils/service/http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname: string = "";
  upwd: string = "";
  constructor(private myService: MyHttpService, private myRouter: Router) { }

  ngOnInit() {
  }

  register() {
    console.log('register button is pressed');
    this.myService.sendPostRequest(
      'http://localhost:3000/user/register',
      { uname: this.uname, upwd: this.upwd }
    ).subscribe((result: any) => {
      if (result.code == 1) {
        console.log('注册成功');
        this.myRouter.navigateByUrl('/login')
      }
      else {
        console.log('注册失败');
      }
    })
  }

}
