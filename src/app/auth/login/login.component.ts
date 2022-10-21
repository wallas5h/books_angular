import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { LoginForm } from "../../types/Auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: "",
    password: "",
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    if (this.authService.isLoading) return;

    this.authService.isLoading = true;

    this.authService.login(this.form);

    // this.router.navigate(["/"]);

    // this.form = {
    //   email: "",
    //   password: "",
    // };
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
