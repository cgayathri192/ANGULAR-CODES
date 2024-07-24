import { Component, OnInit } from '@angular/core';
import { sidebarModel } from 'src/app/shared/models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebardata: sidebarModel[] = [
    {
      title:'user',
      isopen:false,
      childrens: [
        {
          title:'leaves',
          link:'/user/leaves'
        },
        {
          title:'holidays',
          link:'/user/holidays'
        }
      ]
    },
    {
      title:'hr',
      isopen:false,
      childrens:[
        {
          title:'policies',
          link:'/hr/policies'

        }
      ]
    },
    {
      title:'settings',
      link:'/settings'
    }
  ]

  constructor() { }
  toggleSideMenu(i:number){
    this.sidebardata[i].isopen = !this.sidebardata[i].isopen

  }

  ngOnInit(): void {
  }

}
