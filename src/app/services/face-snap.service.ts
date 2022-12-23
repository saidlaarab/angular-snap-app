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

  getFaceSnapById(id: number): FaceSnap {
    const faceSnap = this.getAllFaceSnaps().find( fs => fs.id === id);
    if(faceSnap){
      return faceSnap;
    }else{
      throw new Error(`no face snap found for the ID : ${id} !`);
    }
  }

  snapIt(snapId: number): void{
    const faceSnap = this.getFaceSnapById(snapId);
    if(faceSnap){
      faceSnap.nbrLikes++;
    }
  }

  unsnapIt(snapId: number): void{
    const faceSnap = this.getFaceSnapById(snapId);
    if(faceSnap){
      faceSnap.nbrLikes--;
    }
  }

}
