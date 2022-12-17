import { FaceSnapService } from './../../services/face-snap.service';
import { Component, OnInit } from '@angular/core';
import FaceSnap from 'src/app/models/face-snap';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {
  snaps!:FaceSnap[];

  constructor(private faceSnapService:FaceSnapService) { }

  ngOnInit(): void {
    this.snaps = this.faceSnapService.getAllFaceSnaps();
  }

}
