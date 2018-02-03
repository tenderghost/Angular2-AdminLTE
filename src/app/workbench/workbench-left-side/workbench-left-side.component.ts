import { Component, OnInit } from '@angular/core';

/**
 * Left panel menu item defination
 */
interface LeftPanelMenuItem {
  id: String,
  text: String,
  cssClass: string,
  childItems?: LeftPanelMenuItem[]
}

/**
 * Left side panel component.
 */
@Component({
  selector: 'app-workbench-left-side',
  templateUrl: './workbench-left-side.component.html',
  styleUrls: ['./workbench-left-side.component.css']
})
export class WorkbenchLeftSideComponent implements OnInit {

  menuItems: LeftPanelMenuItem[] = [{
      id: 'dashboard',
      text: '工作总览',
      cssClass: 'fa fa-dashboard text-red'
    }, {
      id: 'todos',
      text: '待办事项',
      cssClass: 'fa fa-tasks text-green',
      childItems: [{
        id: 'todos',
        text: '待消除缺陷',
        cssClass: 'fa fa-tasks text-green',
      }, {
        id: 'todos',
        text: '周期性工作',
        cssClass: 'fa fa-tasks text-green',
      }]
    }, {
      id: 'planmgr',
      text: '计划管理',
      cssClass: 'fa fa-table text-aqua'
    }, {
      id: 'inspectmgr',
      text: '巡视管理',
      cssClass: 'fa fa-th text-yellow'
    }, {
      id: 'mt',
      text: '检修过程管理',
      cssClass: 'fa fa-pie-chart text-blue'
    }, {
      id: 'testmgr',
      text: '试验管理',
      cssClass: 'fa fa-flask text-green'
    }, {
      id: 'changelog',
      text: '版本更新',
      cssClass: 'fa fa-magic text-red'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
