import FaceSnap from 'src/app/models/face-snap';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  faceSnaps : FaceSnap[];
  
  constructor() {
    this.faceSnaps = [
      {id: 1, description: "First Face Snap", nbrLikes: 30},
      {id: 2, description: "Second Face Snap", nbrLikes: 46},
      {id: 3, description: "Third Face Snap", nbrLikes: 25}
    ];
  }

  getAllFaceSnaps() : FaceSnap[]{
    return this.faceSnaps;
  }

}
