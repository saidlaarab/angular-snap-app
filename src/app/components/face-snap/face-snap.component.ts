import FaceSnap  from 'src/app/models/face-snap';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {

  @Input() facesnap!: FaceSnap;

  constructor() { }

  ngOnInit(): void {
  }

}
