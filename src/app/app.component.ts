import { Component, OnInit } from "@angular/core";
import { MongodbService } from "./mongodb.service";



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  autenticato = false;
  loginMsg = "Type the password here";
  authResponse = "";

  constructor(private mdbService: MongodbService) {}

  login(password) {
    this.loginMsg = "";
    this.authResponse = "";
    this.mdbService.getAuth("app", password).subscribe(
      resp => {
//        console.log(">" + resp + "<");
        if (resp === "Ok") {
          this.autenticato = true;
          this.loginMsg = "Type your password here";
        } else {
          this.autenticato = false;
          this.loginMsg = "Nope";
        }
      },
      err => console.error("MongoDB observer got an error: " + err.message)
    );
  }

  logout() {
    this.autenticato = false;
  }

  ngOnInit() {}
}
