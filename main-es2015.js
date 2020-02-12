(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\" >\n  <span>     </span>\n  <span class=\"example-fill-remaining-space\">DANNY NGUYEN</span>  \n  <span>     </span>\n  </mat-toolbar>\n \n  <mat-toolbar color=\"primary\" >\n    <span class=\"example-fill-remaining-space2\">Software Developer - Photographer</span>  \n    </mat-toolbar> \n\n  \n  <nav mat-tab-nav-bar mat-align-tabs=\"center\" >\n    <a mat-tab-link\n    *ngFor=\"let link of navLinks\"\n    [routerLink]=\"link.link\"\n    routerLinkActive #rla=\"routerLinkActive\"\n    [active]=\"rla.isActive\">\n    {{link.label}}\n  \n    </a>\n  </nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componenet1/componenet1.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componenet1/componenet1.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div align=\"center\">\n<ng-container *ngIf=\"show\">\n    <img src=\"./assets/image/0001.jpg\" alt=\"res\" height=\"1000\" width=\"800\" >\n            </ng-container>\n        </div>\n\n<table style=\"font-family: 'Satisfy', cursive; color: white; font-size: 40px;border-color: #4e65e7; border-radius: 20px; height: 600px; margin-right: auto; margin-left: auto;\" border=\"6\" width=\"1000\" cellspacing=\"0\" cellpadding=\"12\"><caption >&nbsp;</caption>\n    <tbody>\n    <tr>\n    <td style=\"width: 500px; text-align: center;\" >\n        <div id = \"home\">\n            <br>\n            <br>\n            <p>  \"The most beautful things in the world cannot be seen\n            or even be touched. They must be felt by the heart.\"</p>\n             <button (click)=\"Dotoggle()\" id=\"bt3\"> {{show ? 'Hide Resume':'Resume Quick View'}}</button>\n                      \n    </div>\n\n    </td>\n    </tr>\n    </tbody>\n    </table>\n    <p>&nbsp;</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componenet2/componenet2.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componenet2/componenet2.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<table style=\"border-color: #4e65e7; border-radius: 20px; height: 600px; margin-right: auto; margin-left: auto;\" border=\"6\" width=\"1000\" cellspacing=\"0\" cellpadding=\"12\"><caption style=\"font-family: 'Titillium Web', sans-serif; font-size: 40px;\">&nbsp;Get To Know Me</caption>\n  <tbody>\n  <tr>\n  <td id=\"hello\" style=\" text-align: center\" >\n  <img  style=\"border-radius: 20px;\" src=\"./assets/image/me.jpg\" alt=\"me\" width=\"330\" height=\"400\" />\n  </td>\n  <td style=\"width: 500px; text-align: left;font-family: 'Titillium Web', sans-serif; font-size: 20px;\" valign=\"top \">\n    <div><span style=\"color: #000000; text-align: left; font-size: 20px\">Hello there! My name is Danny Nguyen. I am a software developer that is currently residing in Atlanta, Georgia, As someone who likes to solve problems, I have always been fascinated with coding since I was a senior in highschool. I graduated from Georgia State University in 2019 with a bachelors of science in computer science and with a concentration in databases. I mainly enjoy UX/UI design and web development. As of right now, I am currently employed as a application developer at United Paracel Services or commonly known as UPS. When I am not working, I like to take pictures with my camera or go hiking with friends. Some of my other interest include keeping up with new Javascript frameworks( I am currently keeping up with Angular 8 and ReactJS) and practiceing my coding skills. I think when you open up your mind to new concepts , you are allowing yourself to fully embrace the ever changing world. You can check out my resume and more on what I know in the experience tab!</span></div>\n  </td>\n  </tr>\n  </tbody>\n  </table>\n  <p>&nbsp;</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componenet3/componenet3.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componenet3/componenet3.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<table style=\"font-family: 'Titillium Web', sans-serif; font-size: 40px;border-color: #4e65e7; border-radius: 20px; height: 600px; margin-right: auto; margin-left: auto;\" border=\"6\" width=\"1000\" cellspacing=\"0\" cellpadding=\"12\"><caption >&nbsp;So what Do I know?</caption>\n    <tbody>\n    <tr>\n    <td style=\"width: 500px;font-family: 'Titillium Web', sans-serif; text-align: center;\" valign=\"top \">\n        <a href=\"./assets/resume.pdf\" class=\"button\" download=\"resume.pdf\">Download Resume </a>\n\n        <br>\n        <div id=\"button2\">\n        <mat-button-toggle-group [value]=\"toggle\" (change)=\"toggleView($event)\">\n            <mat-button-toggle [value]=\"true\">\n                Key Skills\n            </mat-button-toggle>\n            <mat-button-toggle [value]=\"false\">\n                What I Know\n            </mat-button-toggle>\n          </mat-button-toggle-group>\n        </div>\n        \n\n          <div *ngIf=\"toggle\">\n                <p id=\"titl\">Angular 8</p>\n                <div class=\"container\">\n                  <div class=\"skills angular\">90%</div>\n                </div>\n                \n                <p id=\"titl\">Angular JS</p>\n                <div class=\"container\">\n                  <div class=\"skills angularjs\">70%</div>\n                </div>\n                <p id=\"titl\">React JS</p>\n                <div class=\"container\">\n                  <div class=\"skills react\">60%</div>\n                </div>\n                \n                <p id=\"titl\">JavaScript/HTML/CSS</p>\n                <div class=\"container\">\n                  <div class=\"skills js\">90%</div>\n                </div>\n                \n                <p id=\"titl\">C#</p>\n                <div class=\"container\">\n                  <div class=\"skills csharp\">80%</div>\n                </div>\n\n                <p id=\"titl\">Java</p>\n                <div class=\"container\">\n                  <div class=\"skills java\">80%</div>\n                </div>\n\n                <p id=\"titl\">Backend Development(NodeJS,MongoDB,SQL)</p>\n                <div class=\"container\">\n                  <div class=\"skills back\">85%</div>\n                </div>\n                \n                <p id=\"titl\">Cloud Services(Azure,AWS,Google)</p>\n                <div class=\"container\">\n                  <div class=\"skills back\">70%</div>\n                </div>\n\n\n          </div>\n\n\n          <div *ngIf=\"!toggle\">\n            <br>\n            <p id=\"exp\">I mainly consider myself a frontend developer and a backend developer. My knowledge includes Javascript, mainly AngularJS and Angular 8, HTML5, \n                and CSS. Although, I do have a little experience with ReactJS. For back end, I know Node.JS, MYSQL,SQLite, and I do have some experience with MongoDB. In addition to having the knowledge of how to set up REST API's and using Express. \n                Other languages that I know include Java, C#,and Matlab. I also have experience with Azure and AWS. Other experience includes using Docker and Openshift. My other interest includes photography and because of this, my skill set \n                also includes photoshop and light room. </p>\n            <p id=\"exp2\">In addition to these skills, the fact that I have attended various hackathons has also helped me to work in a team environment. I have worked, both in a waterfall \n                and agile working environments. This has contributed to my experience of not only, working in a team of devlopers, but also with UX/UI designers and various types of \n                business majors to execute and deliver projects based on the given challenges and assigments. Feel free to check out my resume to see my projects\n                and the hackathons that I have attended.</p>       \n          </div>\n          \n\n\n    \n\n    </td>\n    </tr>\n    </tbody>\n    </table>\n    <p>&nbsp;</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componenet4/componenet4.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componenet4/componenet4.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div id=\"header\">Photography</div>\n<hr style=\"background-color:#4e65e7; height:2px; width:1600px\" />\n<p id=\"photo\">\n    I picked up photography about two years ago. It was right around when I realize how beautiful the world actually was. \n    Photogrphy became a way for me to capture this beauty, whether it was a mesmerizing sunset or a unforgettable moment with friends and family, At some point, \n     photography pushed me to become a perfectionist in a way as I wanted to replicate, not only the scenery I saw, but also the emotions that came with every photo. \n     Feel free to contact me for any shoots that you want done and for my rates. Below are some of my photos that I have taken.\n</p>\n<button (click)=\"toggle()\" id=\"bt\">\n  {{show ? 'Hide Equipment':'View My Equipment'}}\n</button>\n\n<ng-container *ngIf=\"show\">\n  <div style=\"margin: 0 auto;text-align: center;\">\n    <br>\n\n    <table style=\"font-family: 'Titillium Web', sans-serif; font-size: 40px;border-color: #4e65e7; border-radius: 20px; height: 400px; margin-right: auto; margin-left: auto;\" border=\"6\" width=\"600\" cellspacing=\"0\" cellpadding=\"12\"><caption >&nbsp;</caption>\n        <tbody>\n\n        <tr>\n        <td style=\"width: 500px;font-family: 'Titillium Web', sans-serif; text-align: left;\" valign=\"top \">\n            <h3 style=\"font-size: 25px;\">Canon 5D Mark III</h3>\n            <ul style=\"font-size: 20px; list-style-position: inside;\" >\n              Lenses:\n            <li>Canon 85mm F/1.2</li>\n            <li>Canon 50mm F/1.2</li>\n            <li>Sigma Art 35mm F/1.4</li>\n            <li>Canon 17mm-40mm F/4</li>\n            </ul>\n    \n       \n    \n    \n        </td>\n        </tr>\n        </tbody>\n        </table>\n        <p>&nbsp;</p>\n    \n  </div>\n</ng-container>\n\n<hr style=\"background-color:#4e65e7; height:2px; width:1800px\" />\n\n<div>  \n    <div class=\"row\">  \n      <div class=\"col-sm-12 btn btn-primary\" Style=\"font-family: 'Titillium Web', sans-serif; font-size:40px; text-align: center;\">  \n        My Photos  \n      </div>  \n    </div>  \n  </div>  \n<!--  <hr style=\"background-color:black\" /> --> \n  <div class=\"row\">  \n    <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">  \n      <div ngxSlickItem *ngFor=\"let image of images\" class=\"slide\">  \n        <img src=\"{{ image.img }}\" width=\"100%\">  \n      </div>  \n    </ngx-slick-carousel>  \n  </div>  \n  <br>\n  <hr style=\"background-color:#4e65e7; height:2px; width:1800px\" />\n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componenet5/componenet5.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componenet5/componenet5.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n\n<table style=\"font-family: 'Titillium Web', sans-serif; font-size: 40px;border-color: #4e65e7; border-radius: 20px; height: 600px; margin-right: auto; margin-left: auto;\" border=\"6\" width=\"1000\" cellspacing=\"0\" cellpadding=\"12\"><caption >&nbsp;How To Find Me</caption>\n    <tbody>\n    <tr>\n    <td style=\"width: 500px;font-family: 'Titillium Web', sans-serif; text-align: center;font-size:15px;\" valign=\"top \">\n           \n    <div id=\"swbt\">\n            \n            <mat-button-toggle-group [value]=\"toggle\" (change)=\"toggleView($event)\">\n                    <mat-button-toggle [value]=1>\n                        <strong>Social media</strong>\n                        </mat-button-toggle>\n                    <mat-button-toggle [value]=2>\n                        <strong>Contact Info</strong>\n                    </mat-button-toggle>\n                    <mat-button-toggle [value]=3>\n                        <strong>Email Me</strong>\n                    </mat-button-toggle>\n                  </mat-button-toggle-group>\n\n                </div>\n                  <span>Current Value: {{toggle}}</span>-//\n                 <br>\n                  <div *ngIf=\"(toggle==1)\">\n                      <br>\n                        <table style=\"border-color:transparent; border-radius: 20px; height:120px; margin-right: auto; margin-left: auto;\" border=\"0\" width=\"960\" cellspacing=\"0\" cellpadding=\"0\">\n                                <tbody>\n                                <tr>\n                                        <div id=\"menu-outer\">\n                                        <div class=\"table\">\n                                        <ul id=\"horizontal-list\">\n                                        <li><a href=\"https://www.facebook.com/calculus.bc.3\" target=\"_blank\"><img src=\"./assets/image/facebook.png\"  style=\"font-size:60px; width:60px; height:60px\" ></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n                                        <li><a href=\"https://www.instagram.com/dauwuy_cwenn/\"><img src=\"./assets/image/insta.png\"  style=\"font-size:63px; width:63px; height:643x\" ></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n                                        <li><a href=\"https://www.linkedin.com/in/danny-nguyen-529a06138/\" target=\"_blank\"><img src=\"./assets/image/lin.png\"  style=\"font-size:60px; width:60px; height:60px\" ></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n                                        <li><a href=\"https://github.com/DanWin94\" target=\"_blank\"><img src=\"./assets/image/git.png\"  style=\"font-size:60px; width:60px; height:60px\"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n                                        <li><a href=\"https://devpost.com/dantran94?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav\" target=\"_blank\"><img src=\"./assets/image/dp.png\" style=\"font-size:65px; width:65px; height:65px\" ></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n                                        </ul>                                     \n                                   </div>                                  \n                                    </div>\n                                    \n\n\n                                </tr>\n                                </tbody>\n                                </table>\n                  </div>\n                  \n                  <div *ngIf=\"(toggle==2)\">\n                      <br>\n                  <table style=\"border-color: #4e65e7; border-radius: 20px; height:120px; margin-right: auto; margin-left: auto;\" border=\"4\" width=\"960\" cellspacing=\"0\" cellpadding=\"12\">\n                    <tbody>\n                    <tr>\n                    <td style=\" text-align: center\" >\n                        Email: Dannynguyen49@yahoo.com\n\n                    </td>\n                    <td style=\" text-align: center;\">\n                      Phone Number: 404-916-0552\n                        \n                    </td>\n                    <td style=\" text-align: center;\">\n                      Work Email: Dannynguyen@ups.com\n                \n                    </td>\n                    </tr>\n                    </tbody>\n                    </table>\n                    <p>&nbsp;</p>\n                  </div>\n\n                  <div *ngIf=\"(toggle==3)\">\n                      &nbsp;\n                      \n                    <!-- form goes here -->\n                    <!-- (ngSubmit)=\"processForm()\" -->\n                    <form ngNoForm action=\"https://formspree.io/mvogjqed\" method=\"POST\">\n                    <!-- name -->\n                    <div class=\"field\">\n                      <input type=\"text\" name=\"name\" size=\"62\" style=\"font-size:18px;font-family: 'Titillium Web',sans-serif;\" class=\"input\" placeholder=\"Your Name\" >\n                    </div>\n\n                    <!-- email -->\n                    <div class=\"field\">\n                      <input type=\"email\" name=\"email\" size=\"62\" style=\"font-size:18px;font-family: 'Titillium Web',sans-serif;\" class=\"input\" placeholder=\"Your Email\">\n                      </div>\n\n                    <!-- message -->\n                    <div class=\"field\">\n                        <textarea class=\"textarea\" rows=\"8\" cols=\"60\" style=\"font-size: 18px;font-family: 'Titillium Web',sans-serif;\"name=\"message\" placeholder=\"What's on your mind?\"></textarea>\n                    </div>\n                  \n                      <button type=\"submit\" id=\"bt4\">Send!</button>\n                    </form>\n                 \n                  </div>\n                \n                \n\n                  <div id=\"header\">Where I Am Currently</div>\n                  <hr style=\"background-color:#4e65e7; height:2px; width:960px\" />\n                <agm-map [latitude]=\"lat\" [zoom]=\"zoom\" [longitude]=\"lng\">\n                <agm-marker  [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                </agm-map>\n                <hr style=\"background-color:#4e65e7; height:2px; width:960px\" />\n </td>\n    </tr> \n\n\n    </tbody>\n    </table>\n    <p>&nbsp;</p>\n\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componenet1_componenet1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componenet1/componenet1.component */ "./src/app/componenet1/componenet1.component.ts");
/* harmony import */ var _componenet2_componenet2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componenet2/componenet2.component */ "./src/app/componenet2/componenet2.component.ts");
/* harmony import */ var _componenet3_componenet3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componenet3/componenet3.component */ "./src/app/componenet3/componenet3.component.ts");
/* harmony import */ var _componenet4_componenet4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componenet4/componenet4.component */ "./src/app/componenet4/componenet4.component.ts");
/* harmony import */ var _componenet5_componenet5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componenet5/componenet5.component */ "./src/app/componenet5/componenet5.component.ts");









const routes = [
    { path: '', redirectTo: '/first', pathMatch: 'full' },
    { path: 'first', component: _componenet1_componenet1_component__WEBPACK_IMPORTED_MODULE_4__["Componenet1Component"] },
    { path: 'second', component: _componenet2_componenet2_component__WEBPACK_IMPORTED_MODULE_5__["Componenet2Component"] },
    { path: 'third', component: _componenet3_componenet3_component__WEBPACK_IMPORTED_MODULE_6__["Componenet3Component"] },
    { path: 'fourth', component: _componenet4_componenet4_component__WEBPACK_IMPORTED_MODULE_7__["Componenet4Component"] },
    { path: 'fifth', component: _componenet5_componenet5_component__WEBPACK_IMPORTED_MODULE_8__["Componenet5Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n       -webkit-box-flex: 1;\r\n               flex: 1 1 auto;\r\n       text-align: center;\r\n       font-family: 'Titillium Web', sans-serif;\r\n       font-weight: bold;\r\n       font-size: 45px;\r\n       text-decoration: underline;\r\n}\r\n\r\n.example-fill-remaining-space2 {\r\n       -webkit-box-flex: 1;\r\n               flex: 1 1 auto;\r\n       text-align: center ;\r\n       font-family: 'Titillium Web', sans-serif;\r\n       position: relative;\r\n       font-size: 20px;\r\n       right: 0px;\r\n       bottom: 31px;\r\n}\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtxREFDaUQ7T0FDOUMsbUJBQWM7ZUFBZCxjQUFjO09BQ2Qsa0JBQWtCO09BQ2xCLHdDQUF3QztPQUN4QyxpQkFBaUI7T0FDakIsZUFBZTtPQUNmLDBCQUEwQjtBQUNqQzs7QUFFQTtPQUNPLG1CQUFjO2VBQWQsY0FBYztPQUNkLG1CQUFtQjtPQUNuQix3Q0FBd0M7T0FDeEMsa0JBQWtCO09BQ2xCLGVBQWU7T0FDZixVQUFVO09BQ1YsWUFBWTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZTIge1xyXG4gICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xyXG4gICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICBib3R0b206IDMxcHg7XHJcbn1cclxuICAgICAiXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'angular-material-tab-router';
        this.activeLinkIndex = -1;
        this.navLinks = [
            {
                label: 'Home',
                link: './first',
                index: 0
            }, {
                label: 'About Me',
                link: './second',
                index: 1
            }, {
                label: 'Experience',
                link: './third',
                index: 2
            }, {
                label: 'Photography',
                link: './fourth',
                index: 3
            },
            {
                label: 'Contact Me',
                link: './fifth',
                index: 4
            },
        ];
    }
    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componenet1_componenet1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componenet1/componenet1.component */ "./src/app/componenet1/componenet1.component.ts");
/* harmony import */ var _componenet2_componenet2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componenet2/componenet2.component */ "./src/app/componenet2/componenet2.component.ts");
/* harmony import */ var _componenet3_componenet3_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componenet3/componenet3.component */ "./src/app/componenet3/componenet3.component.ts");
/* harmony import */ var _componenet4_componenet4_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componenet4/componenet4.component */ "./src/app/componenet4/componenet4.component.ts");
/* harmony import */ var _componenet5_componenet5_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componenet5/componenet5.component */ "./src/app/componenet5/componenet5.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _componenet1_componenet1_component__WEBPACK_IMPORTED_MODULE_12__["Componenet1Component"],
            _componenet2_componenet2_component__WEBPACK_IMPORTED_MODULE_13__["Componenet2Component"],
            _componenet3_componenet3_component__WEBPACK_IMPORTED_MODULE_14__["Componenet3Component"],
            _componenet4_componenet4_component__WEBPACK_IMPORTED_MODULE_15__["Componenet4Component"],
            _componenet5_componenet5_component__WEBPACK_IMPORTED_MODULE_16__["Componenet5Component"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAdL_WYLSzMGGiZoQ7EEZ_WqijCCi-CDz0'
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/componenet1/componenet1.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenet1/componenet1.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homeborder{\r\n \r\n    border: 10px solid steelblue;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    margin: 80px;\r\n    background-color:  rgb(233, 231, 231);\r\n  \r\n  }\r\n  \r\n  #home{\r\n    border: 10px;\r\n    background: url('table.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 590px;\r\n    width:1000px;\r\n    border-radius: 10px;\r\n    display: block;\r\n    \r\n    \r\n  }\r\n  \r\n  #bt3 {\r\n    border-radius: 4px;\r\n    background-color: #4e65e7;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    width: 230px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 0 auto;\r\n   \r\n    vertical-align: middle;\r\n   }\r\n  \r\n  #bt3-wrapper {\r\n \r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldDEvY29tcG9uZW5ldDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQXFDOztFQUV2Qzs7RUFFQTtJQUNFLFlBQVk7SUFDWiw0QkFBK0M7SUFDL0Msc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYzs7O0VBR2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixjQUFjOztJQUVkLHNCQUFzQjtHQUN2Qjs7RUFHQTs7SUFFQyxtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW5ldDEvY29tcG9uZW5ldDEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lYm9yZGVye1xyXG4gXHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgc3RlZWxibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDIzMywgMjMxLCAyMzEpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAjaG9tZXtcclxuICAgIGJvcmRlcjogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlL3RhYmxlLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDU5MHB4O1xyXG4gICAgd2lkdGg6MTAwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gICNidDMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNjVlNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIFxyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgfVxyXG4gIFxyXG5cclxuICAgI2J0My13cmFwcGVyIHtcclxuIFxyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/componenet1/componenet1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenet1/componenet1.component.ts ***!
  \******************************************************/
/*! exports provided: Componenet1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componenet1Component", function() { return Componenet1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Componenet1Component = class Componenet1Component {
    constructor() {
        this.show = false;
    }
    Dotoggle() {
        this.show = !this.show;
    }
    //constructor() { }
    ngOnInit() {
    }
};
Componenet1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-componenet1',
        template: __webpack_require__(/*! raw-loader!./componenet1.component.html */ "./node_modules/raw-loader/index.js!./src/app/componenet1/componenet1.component.html"),
        styles: [__webpack_require__(/*! ./componenet1.component.css */ "./src/app/componenet1/componenet1.component.css")]
    })
], Componenet1Component);



/***/ }),

/***/ "./src/app/componenet2/componenet2.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenet2/componenet2.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXQyL2NvbXBvbmVuZXQyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componenet2/componenet2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenet2/componenet2.component.ts ***!
  \******************************************************/
/*! exports provided: Componenet2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componenet2Component", function() { return Componenet2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Componenet2Component = class Componenet2Component {
    constructor() { }
    ngOnInit() {
    }
};
Componenet2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-componenet2',
        template: __webpack_require__(/*! raw-loader!./componenet2.component.html */ "./node_modules/raw-loader/index.js!./src/app/componenet2/componenet2.component.html"),
        styles: [__webpack_require__(/*! ./componenet2.component.css */ "./src/app/componenet2/componenet2.component.css")]
    })
], Componenet2Component);



/***/ }),

/***/ "./src/app/componenet3/componenet3.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenet3/componenet3.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.button {\r\n  border-radius: 4px;\r\n  background-color: #4e65e7;\r\n  border: none;\r\n  color: #FFFFFF;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  padding: 15px;\r\n  width: 90px;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n  margin: 5px;\r\n}\r\n\r\n.button span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n\r\n.button span:after {\r\n  content: '\\00bb';\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: 0;\r\n  right: -20px;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n\r\n.button:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.button:hover span:after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n#exp {\r\nfont-size:20px\r\n\r\n}\r\n\r\n#exp2 {\r\n  font-size:20px\r\n  \r\n  }\r\n\r\n::ng-deep input{\r\n    border: 1px solid #ccc !important;\r\n    margin-bottom: 20px !important;\r\n  }\r\n\r\n#button2{\r\n    margin-top: 10px;\r\n    width: 60px;\r\n    height: 25px;\r\n    margin-left: 328px;\r\n    font-size:15px;\r\n    margin-left: 379px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n*{box-sizing: border-box}\r\n\r\n.container {\r\n  width: 100%;\r\n  background-color: #ddd;\r\n  margin-top: -15px;\r\n}\r\n\r\n.skills {\r\n  text-align: right;\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n  color: white;\r\n}\r\n\r\n.angular {height:20px;width: 90%;font-size: 15px;text-align: left;  background-color: #4e65e7;}\r\n\r\n.angularjs {height:20px;width: 70%;font-size: 15px; text-align: left;background-color: #4e65e7;}\r\n\r\n.react {height:20px;width: 60%;font-size: 15px; text-align: left;background-color: #4e65e7;}\r\n\r\n.js {height:20px;width: 90%;font-size: 15px; text-align: left;background-color: #4e65e7;}\r\n\r\n.csharp {height:20x;width: 80%; font-size: 15px; text-align: left;background-color: #4e65e7;}\r\n\r\n.java {height:20px;width: 80%; font-size: 15px; text-align: left;background-color: #4e65e7;}\r\n\r\n.back {height:20px;width: 85%; font-size: 15px; text-align: left;background-color: #4e65e7;}\r\n\r\n.cloud {height:20px;width: 70%; font-size: 15px; text-align: left;background-color: #4e65e7;}\r\n\r\n#titl{\r\nfont-size: 15px;\r\ntext-align: left;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldDMvY29tcG9uZW5ldDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtBQUNBOztBQUVBOztBQUNBO0VBQ0U7O0VBRUE7O0FBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsOEJBQThCO0VBQ2hDOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUNBLEVBQUUsc0JBQXNCOztBQUcxQjtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBLFVBQVUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcseUJBQXlCLENBQUM7O0FBQzlGLFlBQVksV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7O0FBQy9GLFFBQVEsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7O0FBQzNGLEtBQUssV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7O0FBQ3hGLFNBQVMsVUFBVSxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7O0FBQzVGLE9BQU8sV0FBVyxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7O0FBQzNGLE9BQU8sV0FBVyxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7O0FBQzNGLFFBQVEsV0FBVyxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUMseUJBQXlCLENBQUM7O0FBRTVGO0FBQ0EsZUFBZTtBQUNmLGdCQUFnQjs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbmV0My9jb21wb25lbmV0My5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNjVlNztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbiBzcGFuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uIHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciBzcGFuIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbiNleHAge1xyXG5mb250LXNpemU6MjBweFxyXG5cclxufVxyXG4jZXhwMiB7XHJcbiAgZm9udC1zaXplOjIwcHhcclxuICBcclxuICB9XHJcbiAgOjpuZy1kZWVwIGlucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAjYnV0dG9uMntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMjhweDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM3OXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgKntib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG4gXHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG4uc2tpbGxzIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYW5ndWxhciB7aGVpZ2h0OjIwcHg7d2lkdGg6IDkwJTtmb250LXNpemU6IDE1cHg7dGV4dC1hbGlnbjogbGVmdDsgIGJhY2tncm91bmQtY29sb3I6ICM0ZTY1ZTc7fVxyXG4uYW5ndWxhcmpzIHtoZWlnaHQ6MjBweDt3aWR0aDogNzAlO2ZvbnQtc2l6ZTogMTVweDsgdGV4dC1hbGlnbjogbGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiAjNGU2NWU3O31cclxuLnJlYWN0IHtoZWlnaHQ6MjBweDt3aWR0aDogNjAlO2ZvbnQtc2l6ZTogMTVweDsgdGV4dC1hbGlnbjogbGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiAjNGU2NWU3O31cclxuLmpzIHtoZWlnaHQ6MjBweDt3aWR0aDogOTAlO2ZvbnQtc2l6ZTogMTVweDsgdGV4dC1hbGlnbjogbGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiAjNGU2NWU3O31cclxuLmNzaGFycCB7aGVpZ2h0OjIweDt3aWR0aDogODAlOyBmb250LXNpemU6IDE1cHg7IHRleHQtYWxpZ246IGxlZnQ7YmFja2dyb3VuZC1jb2xvcjogIzRlNjVlNzt9XHJcbi5qYXZhIHtoZWlnaHQ6MjBweDt3aWR0aDogODAlOyBmb250LXNpemU6IDE1cHg7IHRleHQtYWxpZ246IGxlZnQ7YmFja2dyb3VuZC1jb2xvcjogIzRlNjVlNzt9XHJcbi5iYWNrIHtoZWlnaHQ6MjBweDt3aWR0aDogODUlOyBmb250LXNpemU6IDE1cHg7IHRleHQtYWxpZ246IGxlZnQ7YmFja2dyb3VuZC1jb2xvcjogIzRlNjVlNzt9XHJcbi5jbG91ZCB7aGVpZ2h0OjIwcHg7d2lkdGg6IDcwJTsgZm9udC1zaXplOiAxNXB4OyB0ZXh0LWFsaWduOiBsZWZ0O2JhY2tncm91bmQtY29sb3I6ICM0ZTY1ZTc7fVxyXG5cclxuI3RpdGx7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componenet3/componenet3.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenet3/componenet3.component.ts ***!
  \******************************************************/
/*! exports provided: Componenet3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componenet3Component", function() { return Componenet3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Componenet3Component = class Componenet3Component {
    constructor() {
        this.toggle = true;
    }
    ngOnInit() {
    }
    toggleView(change) {
        this.toggle = change.value;
    }
};
Componenet3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-componenet3',
        template: __webpack_require__(/*! raw-loader!./componenet3.component.html */ "./node_modules/raw-loader/index.js!./src/app/componenet3/componenet3.component.html"),
        styles: [__webpack_require__(/*! ./componenet3.component.css */ "./src/app/componenet3/componenet3.component.css")]
    })
], Componenet3Component);



/***/ }),

/***/ "./src/app/componenet4/componenet4.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenet4/componenet4.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slick-slider {  \r\n    width: 90%;  \r\n    margin: auto;  \r\n  } \r\n\r\n  #header{\r\n    font-family: 'Titillium Web', sans-serif; \r\n    text-align: center;\r\n    font-size:40px;\r\n\r\n  } \r\n\r\n  #photo{\r\n    font-family: 'Titillium Web', sans-serif; \r\n    text-align: center;\r\n    font-size:20px;\r\n  } \r\n\r\n  #bt {\r\n      border-radius: 4px;\r\n      background-color: #4e65e7;\r\n      border: none;\r\n      color: #FFFFFF;\r\n      text-align: center;\r\n      font-size: 20px;\r\n      padding: 15px;\r\n      width: 230px;\r\n      -webkit-transition: all 0.5s;\r\n      transition: all 0.5s;\r\n      cursor: pointer;\r\n      margin: 0 auto;\r\n      display: block;\r\n\r\n     }\r\n\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldDQvY29tcG9uZW5ldDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGNBQWM7O0VBRWhCOztFQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osY0FBYztNQUNkLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsYUFBYTtNQUNiLFlBQVk7TUFDWiw0QkFBb0I7TUFBcEIsb0JBQW9CO01BQ3BCLGVBQWU7TUFDZixjQUFjO01BQ2QsY0FBYzs7S0FFZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXQ0L2NvbXBvbmVuZXQ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpY2stc2xpZGVyIHsgIFxyXG4gICAgd2lkdGg6IDkwJTsgIFxyXG4gICAgbWFyZ2luOiBhdXRvOyAgXHJcbiAgfSBcclxuXHJcbiAgI2hlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjQwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgI3Bob3Rve1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICB9XHJcblxyXG4gICNidCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNjVlNztcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICB9XHJcblxyXG4gICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/componenet4/componenet4.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenet4/componenet4.component.ts ***!
  \******************************************************/
/*! exports provided: Componenet4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componenet4Component", function() { return Componenet4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Componenet4Component = class Componenet4Component {
    constructor() {
        this.images = [
            { img: "./assets/images/atl.png" },
            { img: "./assets/images/bridge.png" },
            { img: "./assets/images/chicago.png" },
            { img: "./assets/images/city.jpg" },
            { img: "./assets/images/couple.png" },
            { img: "./assets/images/person2.png" },
            { img: "./assets/images/person.png" },
            { img: "./assets/images/person3.png" },
            { img: "./assets/images/ponce.png" },
        ];
        this.slideConfig = {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "dots": true,
            "infinite": true
        };
        this.show = false;
        this.buttonName = 'View My Equipment';
    }
    toggle() {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        // if(this.show)  
        //  this.buttonName = "Hide";
        // else
        //  this.buttonName = "Show";
    }
    //constructor() { }
    ngOnInit() {
    }
};
Componenet4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-componenet4',
        template: __webpack_require__(/*! raw-loader!./componenet4.component.html */ "./node_modules/raw-loader/index.js!./src/app/componenet4/componenet4.component.html"),
        styles: [__webpack_require__(/*! ./componenet4.component.css */ "./src/app/componenet4/componenet4.component.css")]
    })
], Componenet4Component);



/***/ }),

/***/ "./src/app/componenet5/componenet5.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componenet5/componenet5.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n::ng-deep input{\r\n    border: 1px solid #ccc !important;\r\n    margin-bottom: 25px !important;\r\n    \r\n  }\r\n   #swbt{\r\n    margin-top: 10px;\r\n    width: 60px;\r\n    height: 25px;\r\n    margin-left: 330px;\r\n  }\r\n   #menu-outer {\r\n\theight: 84px;\r\n\t\r\n}\r\n   .table {\r\n\tdisplay: table;   /* Allow the centering to work */\r\n  margin: 0 auto;\r\n \r\n}\r\n   ul#horizontal-list {\r\n\tmin-width: 696px;\r\n\tlist-style: none;\r\n\tpadding-top: 20px;\r\n\t}\r\n   ul#horizontal-list li {\r\n\t\tdisplay: inline;\r\n  }\r\n   #bt2 {\r\n    border-radius: 4px;\r\n    background-color: #4e65e7;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 15px;\r\n    width: 100px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n\r\n   }\r\n   agm-map {\r\n    height: 300px;\r\n    border-radius:20px;\r\n   }\r\n   #header{\r\n    font-family: 'Titillium Web', sans-serif; \r\n    text-align: center;\r\n    font-size:35px;\r\n\r\n  }\r\n   #bt4 {\r\n    border-radius: 4px;\r\n    background-color: #4e65e7;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 15px;\r\n    width: 100px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n\r\n   }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW5ldDUvY29tcG9uZW5ldDUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLDhCQUE4Qjs7RUFFaEM7R0FDQztJQUNDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtHQUNBO0NBQ0QsWUFBWTs7QUFFYjtHQUVFO0NBQ0QsY0FBYyxJQUFJLGdDQUFnQztFQUNqRCxjQUFjOztBQUVoQjtHQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakI7R0FDQTtFQUNDLGVBQWU7RUFDZjtHQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCOztHQUV0QjtHQUNBO0lBQ0MsYUFBYTtJQUNiLGtCQUFrQjtHQUNuQjtHQUNBO0lBQ0Msd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixjQUFjOztFQUVoQjtHQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCOztHQUV0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVuZXQ1L2NvbXBvbmVuZXQ1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbjo6bmctZGVlcCBpbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuICAgI3N3YnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMwcHg7XHJcbiAgfVxyXG4gICNtZW51LW91dGVyIHtcclxuXHRoZWlnaHQ6IDg0cHg7XHJcblx0XHJcbn1cclxuXHJcbiAgLnRhYmxlIHtcclxuXHRkaXNwbGF5OiB0YWJsZTsgICAvKiBBbGxvdyB0aGUgY2VudGVyaW5nIHRvIHdvcmsgKi9cclxuICBtYXJnaW46IDAgYXV0bztcclxuIFxyXG59XHJcbnVsI2hvcml6b250YWwtbGlzdCB7XHJcblx0bWluLXdpZHRoOiA2OTZweDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cdH1cclxuXHR1bCNob3Jpem9udGFsLWxpc3QgbGkge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICBcclxuICAjYnQyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTY1ZTc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgfVxyXG4gICBhZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgIH1cclxuICAgI2hlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjM1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgI2J0NCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU2NWU3O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgIH1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/componenet5/componenet5.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componenet5/componenet5.component.ts ***!
  \******************************************************/
/*! exports provided: Componenet5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Componenet5Component", function() { return Componenet5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Componenet5Component = class Componenet5Component {
    /* processForm() {
       const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
       alert(allInfo);
     }*/
    constructor() {
        /**
       * Process the form we have. Send to whatever backend
       * Only alerting for now
       */
        this.toggle = 2;
        this.texto = 'Atlanta,GA';
        this.lat = 33.7490;
        this.lng = -84.3880;
        this.zoom = 13;
    }
    toggleView(change) {
        this.toggle = change.value;
    }
    ngOnInit() {
    }
};
Componenet5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-componenet5',
        template: __webpack_require__(/*! raw-loader!./componenet5.component.html */ "./node_modules/raw-loader/index.js!./src/app/componenet5/componenet5.component.html"),
        styles: [__webpack_require__(/*! ./componenet5.component.css */ "./src/app/componenet5/componenet5.component.css")]
    })
], Componenet5Component);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ymq6yyy\Desktop\projects\Angular6Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map