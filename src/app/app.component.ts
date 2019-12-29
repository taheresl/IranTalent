import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {



  }
  value;
  list = JSON.parse(localStorage.getItem("AllList"));
  add() {

    this.list.push({
      id: this.list.length,
      title: this.value,
      checked: 0

    });
    this.value = null;

    localStorage.setItem("AllList", JSON.stringify(this.list));
  }
  remove() {
    for (let i = 0; i <= this.list.length - 1; i++) {
      if (this.list[i].checked === true) {
        this.list.splice(i, 1)
        localStorage.setItem("AllList", JSON.stringify(this.list));
      }
    }



  }
}
