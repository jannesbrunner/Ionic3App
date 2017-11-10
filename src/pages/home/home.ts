import { Component, ViewChild } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { Task } from './task';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild(List) list: List;

  public tasks: Task[];

  constructor(public navCtrl: NavController) {
    this.tasks = [
      {id: 1, title: 'Wash the dishes', isDone: false, isEdit: false},
      {id: 2, title: 'Call Mommy', isDone: false, isEdit: false},
      {id: 3, title: 'Train at Tutorials Dojo', isDone: false, isEdit: false}
    ];

   console.log('Task amount:' + this.tasks.length);

  }



  private addTask(title) {

    if(title) {
      this.tasks.push(new Task(title));
    }


  }


  private editTask(task) {
     task.isEdit = !task.isEdit
     this.list.closeSlidingItems();
  }


  private deleteTask(id) {
    this.tasks.splice(id,1);
  }
}
