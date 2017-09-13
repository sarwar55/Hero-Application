import {Component, ElementRef,ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator,MdSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import 'rxjs/add/operator/debounceTime';


/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample {
  displayedColumns = ['id', 'beanName', 'startDateTime', 'refreshRate','parameter','query','lastRefreshTime'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
    @ViewChild(MdSort) sort: MdSort;

  @ViewChild('filter') filter: ElementRef;

  @ViewChild(MdPaginator) paginator: MdPaginator;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator,this.sort);
	 Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }
}

export class UserData {
    id: number;
    beanName: string;
    startDateTime: string;
    refreshRate: number;
    parameter: string | null;
    query: string | null;
    lastRefreshTime: number | null;
}
const DATA: UserData[] = [
    // tslint:disable-next-line:max-line-length
    { id: 1, beanName: 'AccessRequest', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 2, beanName: 'AccessRule', startDateTime: '11/1/2016 11:05:00 AM', refreshRate: 1440, parameter: null, query: null, lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 3, beanName: 'Acknowledgement', startDateTime: '11/1/2016 11:10:00 AM', refreshRate: 10, parameter: 'entryDate', query: 'SELECT MAX(entryDate) FROM RC.Acknowledgement', lastRefreshTime: null },
    { id: 4, beanName: 'Announcement', startDateTime: '11/1/2016 11:15:00 AM', refreshRate: 10, parameter: 'entryDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 5, beanName: 'AnnouncementAttachment', startDateTime: '11/1/2016 11:20:00 AM', refreshRate: 1440, parameter: 'lastUpdateDate', query: null, lastRefreshTime: null },
    { id: 6, beanName: 'AnnouncementRecipient', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 7, beanName: 'Approval', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 8, beanName: 'ApprovalPath', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 9, beanName: 'ApprovalProcess', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 10, beanName: 'ApprovalStep', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 11, beanName: 'ApproverStatus', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 12, beanName: 'Assignment', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 13, beanName: 'AuditLoginAsSession', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 14, beanName: 'Avatar', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 15, beanName: 'AwaitingApproval', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 16, beanName: 'Baseline', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 17, beanName: 'BaselineTask', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 18, beanName: 'BillingRecord', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 19, beanName: 'BurndownEvent', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 20, beanName: 'Category', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 21, beanName: 'CategoryAccessRule', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 22, beanName: 'CategoryCascadeRule', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 23, beanName: 'CategoryCascadeRuleMatch', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 24, beanName: 'CategoryParameter', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 25, beanName: 'CategoryParameterExpression', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 26, beanName: 'Company', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 27, beanName: 'CustomEnum', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    { id: 28, beanName: 'Customer', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null },
    // tslint:disable-next-line:max-line-length
    { id: 29, beanName: 'CustomerPreferences', startDateTime: '11/1/2016 11:00:00 AM', refreshRate: 10, parameter: 'lastUpdateDate', query: 'SELECT MAX(lastUpdateDate) FROM RC.AccessRequest', lastRefreshTime: null }
];



/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return DATA; }

  constructor() {
    
  }

  

  
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
_filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator,private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
      this._sort.mdSortChange,
	  this._filterChange,

    ];
	 

    return Observable.merge(...displayDataChanges).map(() => {
      const data =this.getSortedData();
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.filter((item: UserData) => {
        let searchStr = (item.id+item.beanName+item.parameter+item.refreshRate+item.lastRefreshTime+item.query+item.startDateTime).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
      }).splice(startIndex, this._paginator.pageSize);
    });
	 
  }

  disconnect() {}
  /** Returns a sorted copy of the database data. */
  getSortedData(): UserData[] {
    const data = this._exampleDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';
      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'beanName': [propertyA, propertyB] = [a.beanName, b.beanName]; break;
        case 'startDateTime': [propertyA, propertyB] = [a.startDateTime, b.startDateTime]; break;
        case 'refreshRate': [propertyA, propertyB] = [a.refreshRate, b.refreshRate]; break;
		case 'parameter': [propertyA, propertyB] = [a.parameter, b.parameter]; break;
		case 'query': [propertyA, propertyB] = [a.query, b.query]; break;
		case 'lastRefreshTime': [propertyA, propertyB] = [a.lastRefreshTime, b.lastRefreshTime]; break;

      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */