import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss']
})
export class LeavesComponent implements OnInit {
  leavesdata=[];


  constructor(private userser:UserService) {
   this.userser.getLeaves().subscribe((p: any)=>{
    console.log(p)
    this.leavesdata=p.leaves
   })
   }

  ngOnInit(): void {
  }
  


}
