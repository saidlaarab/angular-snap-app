import { FaceSnapService } from './../../services/face-snap.service';
import FaceSnap  from 'src/app/models/face-snap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {

  @Input() facesnap!: FaceSnap;
  snapped : boolean = false;

  constructor(private snapService:FaceSnapService) { }

  ngOnInit(): void {
  }

  onSnap(): void {
    if(this.snapped){
      this.snapService.unsnapIt(this.facesnap.id);
    }else{
      this.snapService.snapIt(this.facesnap.id);
    }
    // update the state of snapping :
    this.snapped = !this.snapped;
  }

}
