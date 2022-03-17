import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[] = TASKS;
  faTimes=faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
