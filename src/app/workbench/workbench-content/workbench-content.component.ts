import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-workbench-content',
  templateUrl: './workbench-content.component.html',
  styleUrls: ['./workbench-content.component.css']
})
export class WorkbenchContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
