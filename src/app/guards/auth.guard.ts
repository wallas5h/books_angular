import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    const isAuthenticated = this.authService.isAuthenticated;

    if (!isAuthenticated) {
      if (!isAuthenticated) {
        alert("Login first to see your cart");
      }
    }
    return this.authService.isAuthenticated;
  }
}
