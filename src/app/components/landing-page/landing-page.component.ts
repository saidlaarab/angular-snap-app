import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userEmail:string = "email@example.com";

  firstName!:string;
  lastName!:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinueClick(): void{
    this.router.navigateByUrl('facesnaps')
  }

  onEmailSubmit(){
    console.log("email form value : ", this.userEmail);
  }

  onSubmitUserForm(userForm: NgForm){
    console.log("username form value : ", userForm.value);
  }

}
