(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <a class=\"button\" routerLink=\"/room\" (click)=\"createRoom()\">create room</a> |\r\n  </nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chatui/chatui.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chatui/chatui.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<body>\n\n<div class=\"flex-container\">\n  <label> user info : {{this.id}} {{this.name}}</label>\n\n <mat-form-field appearance=\"fill\">\n  <mat-label>all current users</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let user of Users\" [value]=\"Users.id\">\n      {{Users.name}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n\n<div  class=\"flex-chat\">\n  <ul >\n    <li *ngFor=\"let msg of Messages\">{{msg}}</li>\n\n  </ul>\n</div>\n<div>\n  <input [(ngModel)]=\"msg\" type=\"text\" >\n  <button (click)=\"sendMsg()\" type=\"button\" class=\"btn btn-primary\" >Send</button>\n</div>\n<div class=\"flex-item\">\n  <ul >\n    <li *ngFor=\"let anno of Announcement\">{{anno}}</li>\n\n  </ul>\n</div>\n\n</div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">chat</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/room/room.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/room/room.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>room works!</p>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n    box-shadow: inset 0 1px 0 0 #ffffff;\r\n    background: #ffffff linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\r\n    border-radius: 6px;\r\n    border: 1px solid #dcdcdc;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    color: #666666;\r\n    font-family: Arial, sans-serif;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    padding: 6px 24px;\r\n    text-decoration: none;\r\n    text-shadow: 0 1px 0 #ffffff;\r\n    outline: 0;\r\n}\r\n.activebutton {\r\n    box-shadow: inset 0 1px 0 0 #dcecfb;\r\n    background: #bddbfa linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);\r\n    border-radius: 6px;\r\n    border: 1px solid #84bbf3;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    font-family: Arial, sans-serif;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    padding: 6px 24px;\r\n    text-decoration: none;\r\n    text-shadow: 0 1px 0 #528ecc;\r\n    outline: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsd0VBQXdFO0lBQ3hFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsd0VBQXdFO0lBQ3hFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgMCAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDUlLCAjZjZmNmY2IDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMjRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5hY3RpdmVidXR0b24ge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAwICNkY2VjZmI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmRkYmZhIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiZGRiZmEgNSUsICM4MGI1ZWEgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODRiYmYzO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDZweCAyNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgIzUyOGVjYztcclxuICAgIG91dGxpbmU6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _websocket_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket-service.service */ "./src/app/websocket-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor(WebSocketServiceService) {
        this.WebSocketServiceService = WebSocketServiceService;
    }
    createRoom() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _websocket_service_service__WEBPACK_IMPORTED_MODULE_0__["WebSocketServiceService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [_websocket_service_service__WEBPACK_IMPORTED_MODULE_0__["WebSocketServiceService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
/* harmony import */ var _websocket_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket-service.service */ "./src/app/websocket-service.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chatui_chatui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatui/chatui.component */ "./src/app/chatui/chatui.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__["NavMenuComponent"],
            _chatui_chatui_component__WEBPACK_IMPORTED_MODULE_7__["ChatuiComponent"],
            _room_room_component__WEBPACK_IMPORTED_MODULE_0__["RoomComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                { path: 'room', component: _room_room_component__WEBPACK_IMPORTED_MODULE_0__["RoomComponent"] },
                { path: '', component: _chatui_chatui_component__WEBPACK_IMPORTED_MODULE_7__["ChatuiComponent"], pathMatch: 'full' },
            ], { relativeLinkResolution: 'legacy' }),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"]
        ],
        providers: [
            _websocket_service_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketServiceService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chatui/chatui.component.css":
/*!*********************************************!*\
  !*** ./src/app/chatui/chatui.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n  .flex-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n    padding: 5px;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\r\n  }\r\n\r\n\r\n  .flex-item {\r\n    height: 500px;\r\n    margin: 3px;\r\n  }\r\n\r\n\r\n  .flex-chat {\r\n    height: 500px;\r\n    margin: 5px;\r\n  }\r\n\r\n\r\n  .flex-item ul {\r\n      list-style: none;\r\n    }\r\n\r\n\r\n  .flex-item li {\r\n      background-color: black;\r\n      color: white;\r\n      margin: 3px;\r\n      padding:3px;\r\n    }\r\n\r\n\r\n  .flex-chat li {\r\n      background-color: white;\r\n      color: blue;\r\n      margin: 3px;\r\n      padding:3px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHVpL2NoYXR1aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaO0VBQ0Y7OztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiOzs7RUFFRTtNQUNFLGdCQUFnQjtJQUNsQjs7O0VBRUE7TUFDRSx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLFdBQVc7TUFDWCxXQUFXO0lBQ2I7OztFQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxXQUFXO01BQ1gsV0FBVztJQUNiIiwiZmlsZSI6InNyYy9hcHAvY2hhdHVpL2NoYXR1aS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG4gIH1cclxuIFxyXG4gIC5mbGV4LWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gIH1cclxuICAuZmxleC1jaGF0IHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgXHJcbiAgICAuZmxleC1pdGVtIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuIFxyXG4gICAgLmZsZXgtaXRlbSBsaSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICBwYWRkaW5nOjNweDtcclxuICAgIH1cclxuICAgIC5mbGV4LWNoYXQgbGkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICBwYWRkaW5nOjNweDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chatui/chatui.component.ts":
/*!********************************************!*\
  !*** ./src/app/chatui/chatui.component.ts ***!
  \********************************************/
/*! exports provided: ChatuiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatuiComponent", function() { return ChatuiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_send_msg_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/send-msg-request */ "./src/app/models/send-msg-request.ts");
/* harmony import */ var _websocket_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../websocket-service.service */ "./src/app/websocket-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ChatuiComponent = class ChatuiComponent {
    constructor(_WebSocketServiceService) {
        this._WebSocketServiceService = _WebSocketServiceService;
        this.Messages = [];
        this.Announcement = [];
        this.msg = '';
        this.name = "";
        this.id = 0;
        this.Users = [];
        this._WebSocketServiceService.announcement$.subscribe(ev => {
            if (ev) {
                this.Announcement.unshift(ev);
            }
        });
        this._WebSocketServiceService.Message$.subscribe(ev => {
            if (ev) {
                this.Messages.unshift(ev);
            }
        });
        this._WebSocketServiceService.user$.subscribe(n => {
            this.name = n.name;
            this.id = n.id;
            //console.log(n.id);
        });
    }
    ngOnInit() {
        this._WebSocketServiceService.StartSocket();
        this.getUsers();
    }
    getUsers() {
        this._WebSocketServiceService.getUsers().subscribe(data => {
            this.Users = data;
        });
    }
    sendMsg() {
        var req = new _models_send_msg_request__WEBPACK_IMPORTED_MODULE_1__["SendMsgRequest"]();
        req.Id = 0;
        req.Msg = this.msg;
        req.Name = this.name;
        this._WebSocketServiceService.sendMessage(req);
    }
};
ChatuiComponent.ctorParameters = () => [
    { type: _websocket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"] }
];
ChatuiComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-chatui',
        template: __webpack_require__(/*! raw-loader!./chatui.component.html */ "./node_modules/raw-loader/index.js!./src/app/chatui/chatui.component.html"),
        styles: [__webpack_require__(/*! ./chatui.component.css */ "./src/app/chatui/chatui.component.css")]
    }),
    __metadata("design:paramtypes", [_websocket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"]])
], ChatuiComponent);



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, name, socket) {
        this.id = id,
            this.name = name,
            this.socket = socket;
    }
}
User.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/models/send-msg-request.ts":
/*!********************************************!*\
  !*** ./src/app/models/send-msg-request.ts ***!
  \********************************************/
/*! exports provided: SendMsgRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMsgRequest", function() { return SendMsgRequest; });
class SendMsgRequest {
}


/***/ }),

/***/ "./src/app/models/socket-message.ts":
/*!******************************************!*\
  !*** ./src/app/models/socket-message.ts ***!
  \******************************************/
/*! exports provided: SocketMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketMessage", function() { return SocketMessage; });
class SocketMessage {
}


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-menu/nav-menu.component.html"),
        styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/room/room.component.css":
/*!*****************************************!*\
  !*** ./src/app/room/room.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20vcm9vbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let RoomComponent = class RoomComponent {
    constructor() { }
    ngOnInit() {
    }
};
RoomComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-room',
        template: __webpack_require__(/*! raw-loader!./room.component.html */ "./node_modules/raw-loader/index.js!./src/app/room/room.component.html"),
        styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/room/room.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RoomComponent);



/***/ }),

/***/ "./src/app/websocket-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/websocket-service.service.ts ***!
  \**********************************************/
/*! exports provided: WebSocketServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketServiceService", function() { return WebSocketServiceService; });
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/User */ "./src/app/models/User.ts");
/* harmony import */ var _models_socket_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/socket-message */ "./src/app/models/socket-message.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let WebSocketServiceService = class WebSocketServiceService {
    constructor(http) {
        this.http = http;
        this.url = "https://localhost:5001/api/chat/";
        this.id = 0;
        this.announcement$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.Message$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_User__WEBPACK_IMPORTED_MODULE_0__["User"]());
    }
    addUser(item) {
        return this.http.post(this.url + 'createUser', item);
    }
    createRoom(id) {
        return this.http.post(this.url + '?id=' + id, id);
    }
    getUsers() {
        return this.http.get(this.url + 'Id');
    }
    StartSocket() {
        this.socket = new WebSocket('wss://localhost:5001/ws');
        this.socket.addEventListener("open", (ev => {
            console.log(ev);
        }));
        this.socket.addEventListener("message", (ev => {
            var msg = new _models_socket_message__WEBPACK_IMPORTED_MODULE_1__["SocketMessage"]();
            msg = JSON.parse(ev.data);
            switch (msg.MessageType) {
                case "user":
                    this.name = msg.Payload.name;
                    let user = new _models_User__WEBPACK_IMPORTED_MODULE_0__["User"](0, msg.Payload.name, msg.Payload.socket);
                    this.addUser(user).subscribe(res => { user.id = res; this.user$.next(user); });
                    break;
                case "message":
                    this.Message$.next(msg.Payload);
                    break;
                case "announce":
                    this.announcement$.next(msg.Payload);
                    break;
                default:
                    break;
            }
        }));
    }
    sendMessage(req) {
        var msgAsJson = JSON.stringify(req);
        console.log(req.Msg);
        this.socket.send(msgAsJson);
    }
};
WebSocketServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
WebSocketServiceService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], WebSocketServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\PROJECT\Chathub\chat\clientapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map