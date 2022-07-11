import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild('input', { static: true }) input: ElementRef;
  @Output() searchEmitter = new EventEmitter<string>();
  searchValue: string;
  private unsubscriber$ = new Subject<void>();

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.unsubscriber$),
        tap(() => this.searchEmitter.emit(this.searchValue))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
