import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/firebase.config";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  constructor(private authService: AuthService) {}

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
  logout() {
    this.authService.logout();
  }
  onClickCart() {
    const isAuthenticated = this.authService.isAuthenticated;
    if (!isAuthenticated) {
      alert("Login first to see your cart");
    }
  }
}
