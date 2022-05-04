import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { User, Profile } from '../interfaces/users.interfaces';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get('/assets/users.data.json').pipe(
      map((response: { users: User[] }) => response.users),
      tap((a) => console.log(a)),
      catchError((error: HttpErrorResponse) => throwError(error)),
    );
  }

  public getProfiles(): Observable<Profile[]> {
    return this.http.get('/assets/profiles.data.json').pipe(
      map((response: { profiles: Profile[] }) => response.profiles),
      catchError((error: HttpErrorResponse) => throwError(error)),
    );
  }
}
