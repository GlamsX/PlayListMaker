import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {

    isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    loggIn() {
        //do http request
        this.isLoggedIn$.next(true);
        localStorage.setItem('isLoggedIn', 'true');
    }

    loggOut() {
        this.isLoggedIn$.next(false);
        localStorage.removeItem('isLoggedIn');
    }

    setLogginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            this.isLoggedIn$.next(true);
        } else {
            this.isLoggedIn$.next(false);
        }
    }

    getLogStatus(): Observable<boolean> {
        return this.isLoggedIn$.asObservable();
    }

}