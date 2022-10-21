import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { LoginForm } from "../types/Auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Login failed. ${errorMessage}`);
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  register(form: LoginForm) {
    const auth = getAuth();
    this.isLoading = true;

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert(`Singup failed. ${errorMessage}`);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        this.isAuthenticated = false;
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Logout failed. ${errorMessage}`);
      });
  }
}
