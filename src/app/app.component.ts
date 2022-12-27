import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { delay, filter, map, mergeMap, take, tap, concatMap, exhaustMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
  }
}
