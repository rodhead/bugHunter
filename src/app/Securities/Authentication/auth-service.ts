import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
//import * as jwt_token from 'jwt_decode';

export const TOKEN_NAME='jwt_token';

@Injectable()
export class AuthService {
    private url: String = 'api/auth';
    private headers = new Headers({'Content-Type' : 'application/json'});

    constructor(
        private http: HttpClient
    ){}

    getToken():string{
        return localStorage.getItem(TOKEN_NAME);
    }

    setToken(token: string):void {
        localStorage.setItem(TOKEN_NAME, token);
    }

    getTokenExpirationDate(token?:string): Date {
       return new Date();
    }
    isTokenExpired( token?: string): boolean {
        if(!token) token = this.getToken();
        if(!token) return true;

        const date = this.getTokenExpirationDate(token);
        if( date == undefined) return false;

        return !(date.valueOf() > new Date().valueOf());
    }
}
