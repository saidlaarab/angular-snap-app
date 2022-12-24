import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import FaceSnap from 'src/app/models/face-snap';
import { FaceSnapService } from 'src/app/services/face-snap.service';

@Component({
  selector: 'app-face-snap-details',
  templateUrl: './face-snap-details.component.html',
  styleUrls: ['./face-snap-details.component.css']
})
export class FaceSnapDetailsComponent implements OnInit {

  facesnap!: FaceSnap;
  snapped : boolean = false;

  constructor(private snapService:FaceSnapService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const snapId: number = +this.activeRoute.snapshot.params['id']; // '+' cast a string into a number
    this.facesnap = this.snapService.getFaceSnapById(snapId); 
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
