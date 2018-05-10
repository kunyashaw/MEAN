import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../../utils/service/http.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-todobox',
  templateUrl: './todobox.component.html',
  styleUrls: ['./todobox.component.css']
})
export class TodoboxComponent implements OnInit {
  list: Array<any> = [];
  nowInput: string = "";
  constructor(private myService: MyHttpService, private myRouter: Router) { }

  ngOnInit() {
    //先去读取服务器端对应的数据
    this.myService.sendGetRequest('http://localhost:3000/api/list').subscribe((result: any) => {
      console.log(result);
      if (result.code == 1) {
        this.list = result.list;
      }
    })
  }

  addToList() {
    this.myService.sendGetRequest('http://localhost:3000/api/add?todo=' + this.nowInput).subscribe((result: any) => {
      if (result.code == 1) {
        this.list.unshift(result.msg);
        this.nowInput = "";
      }
      else {
        alert(result.msg);
      }
    })

  }

  deleteFromList(index) {
    this.myService.sendPostRequest('http://localhost:3000/api/delete',
      { id: this.list[index]._id })
      .subscribe((result: any) => {
        if (result.code == 1) {
          this.list.splice(index, 1);
        }
        else {
          alert(result.msg);
        }
      })

  }

}
