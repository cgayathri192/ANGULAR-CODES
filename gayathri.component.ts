import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gayathri',
  templateUrl: './gayathri.component.html',
  styleUrls: ['./gayathri.component.scss']
})
export class GayathriComponent implements OnInit {
  Users=[{
    name: "gayathri",
    gender: "female",
    id: "8043",
  },
    {
      name: "Reshma",
      gender: "female",
      id: "8043",
    },
    {
      name: "gayathri",
      gender: "female",
      id: "8043",

    }] 

  constructor() { }

  ngOnInit(): void {
  }

}
