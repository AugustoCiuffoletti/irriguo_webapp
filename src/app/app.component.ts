import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  autenticato=false;
  loginMsg="Type the password here"

  constructor() { }

  login(password) {
	this.loginMsg='';
	if ( password === "qsc123" ) {
		this.autenticato=true;
		this.loginMsg="Type your password here";
	} else {
		this.autenticato=false;
		this.loginMsg="Nope";
	}
  }

  logout() {
    this.autenticato=false;
  }

  ngOnInit() {
  }

}
