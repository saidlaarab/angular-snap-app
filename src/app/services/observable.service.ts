import { Injectable, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { delay, filter, map, mergeMap, take, tap, concatMap, exhaustMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  ngOnInit(): void {
    interval(2000).pipe(
      take(2),
      map( nbr => nbr % 2 === 0 ? 1 : 2),
      tap((index) => console.log(`%cCamera 0${index} is activated`, `color: ${index === 1 ? 'yellow' : 'orange'}`)),
      switchMap((index) => this.getCameraObservable(index)),
      tap((streamChunk) => console.log(streamChunk))
    ).subscribe();
  }

  getCameraObservable(index: number): Observable<string>{
    console.log(`Camera 0${index} is streaming.........................`);
    return interval(500).pipe(
      take(6),
      map( nbr => nbr < 5 ? `CAM_0${index}_${nbr}` : `End of streaming of Camera 0${index}`)
    )
  }

  // Exemple de train rouge & train jaune
  /*
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {
    interval(1000).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      switchMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }
  */

}
