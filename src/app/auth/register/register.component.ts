import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form = {
    email: "",
    password: "",
    confirm_password: "",
  };

  passwordMatch: boolean = true;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.authService.isLoading) return;

    if (this.form.password !== this.form.confirm_password) {
      this.passwordMatch = false;
      return;
    }

    this.authService.register(this.form);
    // this.router.navigate(["/"]);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
