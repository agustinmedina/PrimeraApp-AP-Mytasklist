import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[] = [];
  faTimes=faTimes;

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    //Like promise
    this.taskService.getTasks().subscribe((tasks)=>{
    this.tasks=tasks}
    );
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks=this.tasks.filter(t => t.id !== task.id)
    })
  
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task)
    })
  }

}
