import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isOpen = false;
  private subject: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  setToggleSidebar(): void {
    this.isOpen = !this.isOpen;
    this.subject.next(this.isOpen);
  }

  getToggleSidebar(): Observable<any> {
    return this.subject.asObservable();
  }
}
