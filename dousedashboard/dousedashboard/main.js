(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 5px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.modifyBusiness = function () {
    };
    AppComponent.prototype.modifyServices = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _business_business_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./business/business.component */ "./src/app/business/business.component.ts");
/* harmony import */ var _entities_business_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entities/business.service */ "./src/app/entities/business.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'business/:id', component: _business_business_component__WEBPACK_IMPORTED_MODULE_11__["BusinessComponent"] },
    { path: 'services/:id', component: _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"] },
    { path: '', component: _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _business_business_component__WEBPACK_IMPORTED_MODULE_11__["BusinessComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            providers: [_entities_business_service__WEBPACK_IMPORTED_MODULE_12__["BusinessService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/business/business.component.html":
/*!**************************************************!*\
  !*** ./src/app/business/business.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav (changePath)=\"save()\"></app-nav>\n<button mat-raised-button color=\"primary\" (click)=\"save()\" class='save'>Save</button>\n\n<div class='prop'>Name</div>\n<input type='text' name='name' [(ngModel)]='business.Name' required />\n\n<div class='prop'>Street Address</div>\n<input type='text' [(ngModel)]='business.Address' />\n\n<div class='prop'>City</div>\n<input type='text' [(ngModel)]='business.City' />\n\n<div class='prop'>State</div>\n<input type='text' [(ngModel)]='business.State' />\n\n<div class='prop'>Zip</div>\n<input type='text' [(ngModel)]='business.Zip' />\n\n<div class='prop'>Phone</div>\n<input type='text' [(ngModel)]='business.Phone' />\n\n<div class='prop'>Instagram Link</div>\n<input type='text' [(ngModel)]='business.Instagram' />\n\n<div class='prop'>Instagram Title</div>\n<input type='text' [(ngModel)]='business.InstagramTitle' />\n\n<div class='prop'>Facebook</div>\n<input type='text' [(ngModel)]='business.Facebook' />\n\n<div class='prop'>Facebook Title</div>\n<input type='text' [(ngModel)]='business.FacebookTitle' />\n\n<div class='prop'>Hours</div>\n<textarea type='text' [(ngModel)]='business.Hours'></textarea>\n\n<div class='prop'>iOS Map Link</div>\n<input type='text' [(ngModel)]='business.IosMap' />\n\n<div class='prop'>Google Map Link</div>\n<input type='text' [(ngModel)]='business.GoogleMap' />\n\n<div class='prop'>Book Now Link</div>\n<input type='text' [(ngModel)]='business.BookNow' />\n\n<div class='prop'>Home Page Notification</div>\n<input type='text' [(ngModel)]='business.Notification' />\n\n<div class='prop'>Logo</div>\n<input type='file' accept=\"image/*\" (change)=\"uploadImage($event, 'logo')\" />\n<img *ngIf='homeLogo' [src]=\"homeLogo\" class=\"image\" />\n\n\n<div class='prop'>Owner Image</div>\n<input type='file' accept=\"image/*\" (change)=\"uploadImage($event, 'owner')\" />\n<img *ngIf='ownerImage' [src]=\"ownerImage\" class=\"image\" />\n"

/***/ }),

/***/ "./src/app/business/business.component.scss":
/*!**************************************************!*\
  !*** ./src/app/business/business.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  width: 97%;\n  min-height: 300px;\n  max-width: 600px; }\n\ntextarea,\ninput {\n  padding: 5px;\n  font-size: 16px;\n  margin: 3px 0 10px; }\n\nimg {\n  max-width: 400px;\n  display: block;\n  margin-bottom: 20px; }\n\n.save {\n  position: fixed;\n  top: 5px;\n  right: 5px; }\n\n.loading-spinner {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1; }\n\n.loading-spinner .background {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    opacity: 0.95;\n    background-color: #444; }\n\n.loading-spinner .modal {\n    z-index: 2;\n    height: 200px;\n    width: 350px;\n    border: 3px solid #222;\n    background-color: #f1f1f1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 20px; }\n"

/***/ }),

/***/ "./src/app/business/business.component.ts":
/*!************************************************!*\
  !*** ./src/app/business/business.component.ts ***!
  \************************************************/
/*! exports provided: BusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessComponent", function() { return BusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _entities_business_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/business.service */ "./src/app/entities/business.service.ts");
/* harmony import */ var _entities_business__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entities/business */ "./src/app/entities/business.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BusinessComponent = /** @class */ (function () {
    function BusinessComponent(sanitizer, businessService, route, snackBar) {
        this.sanitizer = sanitizer;
        this.businessService = businessService;
        this.route = route;
        this.snackBar = snackBar;
        this.business = new _entities_business__WEBPACK_IMPORTED_MODULE_7__["BusinessVM"]();
        this.snackBar.open('Contacting server ...');
    }
    BusinessComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.businessService.get(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error, caught) {
            _this.snackBar.open('Failed to load user data :(', '', {
                duration: 3000
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        })).subscribe(function (business) {
            if (business) {
                _this.business = business;
                _this.homeLogo = _this.sanitizer.bypassSecurityTrustUrl(_this.business.HomeLogo);
                _this.ownerImage = _this.sanitizer.bypassSecurityTrustUrl(_this.business.EmployeeImg);
                _this.snackBar.dismiss();
            }
        });
    };
    BusinessComponent.prototype.save = function () {
        var _this = this;
        this.snackBar.open('Saving data to the server ...');
        this.businessService.save(this.business).subscribe(function () {
            setTimeout(function () {
                _this.snackBar.open('User data saved', '', {
                    duration: 3000
                });
            }, 2000);
        }, function (error) {
            _this.snackBar.open('Failed to save user data :(', '', {
                duration: 3000
            });
        });
    };
    BusinessComponent.prototype.uploadImage = function (event, prop) {
        var _this = this;
        if (event.target.files && event.target.files.length > 0) {
            if (event.target.files[0].size < 220000) {
                var file_1 = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var blob = window.URL.createObjectURL(file_1);
                    switch (prop) {
                        case 'owner':
                            _this.ownerImage = _this.sanitizer.bypassSecurityTrustUrl(blob);
                            _this.business.EmployeeImg = e.target.result.toString();
                            break;
                        case 'logo':
                            _this.homeLogo = _this.sanitizer.bypassSecurityTrustUrl(blob);
                            _this.business.HomeLogo = e.target.result.toString();
                            break;
                    }
                };
                reader.readAsDataURL(file_1);
            }
            else {
                this.snackBar.open('Image too large. Please make sure image is less than 200 KB (Preferably 100KB or less)', '', {
                    duration: 5000
                });
            }
        }
    };
    BusinessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business',
            template: __webpack_require__(/*! ./business.component.html */ "./src/app/business/business.component.html"),
            styles: [__webpack_require__(/*! ./business.component.scss */ "./src/app/business/business.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _entities_business_service__WEBPACK_IMPORTED_MODULE_6__["BusinessService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], BusinessComponent);
    return BusinessComponent;
}());



/***/ }),

/***/ "./src/app/entities/business.service.ts":
/*!**********************************************!*\
  !*** ./src/app/entities/business.service.ts ***!
  \**********************************************/
/*! exports provided: BusinessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessService", function() { return BusinessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessService = /** @class */ (function () {
    function BusinessService(http) {
        this.http = http;
    }
    BusinessService.prototype.save = function (business) {
        this.business = business;
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + "/business/" + this.business.Id, this.convertToDTO(this.business));
    };
    BusinessService.prototype.get = function (id) {
        var _this = this;
        if (this.business) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.business);
        }
        else {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + "/business/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (business) {
                _this.business = business;
                _this.business.Hours = _this.removeHtmlBreak(_this.business.Hours);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.business);
            }));
        }
    };
    BusinessService.prototype.convertToDTO = function (business) {
        return {
            Id: business.Id,
            Name: business.Name,
            Address: business.Address,
            City: business.City,
            State: business.State,
            Zip: business.Zip,
            Phone: business.Phone,
            Instagram: business.Instagram,
            InstagramTitle: business.InstagramTitle,
            Facebook: business.Facebook,
            FacebookTitle: business.FacebookTitle,
            EmployeeImg: business.EmployeeImg,
            Hours: this.addHtmlBreak(business.Hours),
            HomeLogo: business.HomeLogo,
            IosMap: business.IosMap,
            GoogleMap: business.GoogleMap,
            BookNow: business.BookNow,
            Notification: business.Notification
        };
    };
    BusinessService.prototype.addHtmlBreak = function (val) {
        if (!val) {
            return val;
        }
        return val.replace(/\n/g, '<br />').trim();
    };
    BusinessService.prototype.removeHtmlBreak = function (val) {
        if (!val) {
            return val;
        }
        return val.replace(/<br \/>/g, '\n');
    };
    BusinessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BusinessService);
    return BusinessService;
}());



/***/ }),

/***/ "./src/app/entities/business.ts":
/*!**************************************!*\
  !*** ./src/app/entities/business.ts ***!
  \**************************************/
/*! exports provided: BusinessVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessVM", function() { return BusinessVM; });
var BusinessVM = /** @class */ (function () {
    function BusinessVM() {
    }
    return BusinessVM;
}());



/***/ }),

/***/ "./src/app/entities/service-category.ts":
/*!**********************************************!*\
  !*** ./src/app/entities/service-category.ts ***!
  \**********************************************/
/*! exports provided: ServiceCategoryVM, ServicesVM, ServiceOptionVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCategoryVM", function() { return ServiceCategoryVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesVM", function() { return ServicesVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOptionVM", function() { return ServiceOptionVM; });
var ServiceCategoryVM = /** @class */ (function () {
    function ServiceCategoryVM() {
        this.Services = new Array();
        this.editing = false;
    }
    return ServiceCategoryVM;
}());

var ServicesVM = /** @class */ (function () {
    function ServicesVM() {
        this.ServiceOptions = new Array();
        this.editing = false;
    }
    return ServicesVM;
}());

var ServiceOptionVM = /** @class */ (function () {
    function ServiceOptionVM() {
        this.editing = false;
    }
    return ServiceOptionVM;
}());



/***/ }),

/***/ "./src/app/entities/serviceCategory.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/entities/serviceCategory.service.ts ***!
  \*****************************************************/
/*! exports provided: ServiceCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCategoryService", function() { return ServiceCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service-category */ "./src/app/entities/service-category.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServiceCategoryService = /** @class */ (function () {
    function ServiceCategoryService(http) {
        this.http = http;
    }
    ServiceCategoryService.prototype.save = function (serviceCategories, businessId) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/services/business/" + businessId, this.convertToDTO(serviceCategories));
    };
    ServiceCategoryService.prototype.getByBusinessId = function (businessId) {
        var _this = this;
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/services/business/" + businessId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (response) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this.convertFromDTO(response)); }));
    };
    ServiceCategoryService.prototype.convertToDTO = function (serviceCategories) {
        var _this = this;
        var result = [];
        serviceCategories.forEach(function (category) {
            var iCategory = {
                Id: category.Id,
                BusinessId: category.BusinessId,
                Name: category.Name,
                ShortName: category.ShortName,
                LinkId: category.LinkId,
                Services: []
            };
            category.Services.forEach(function (service) {
                var iService = {
                    Id: service.Id,
                    ServiceCategoryId: service.ServiceCategoryId,
                    ImageUrl: service.ImageUrl,
                    Title: service.Title,
                    Description: _this.addHtmlBreak(service.Description),
                    ServiceOptions: []
                };
                service.ServiceOptions.forEach(function (option) {
                    var iOption = {
                        Id: option.Id,
                        ServicesId: option.ServicesId,
                        Title: option.Title,
                        Description: _this.addHtmlBreak(option.Description),
                        Footer: _this.addHtmlBreak(option.Footer)
                    };
                    iService.ServiceOptions.push(iOption);
                });
                iCategory.Services.push(iService);
            });
            result.push(iCategory);
        });
        return result;
    };
    ServiceCategoryService.prototype.convertFromDTO = function (serviceCategories) {
        var _this = this;
        var result = new Array();
        serviceCategories.forEach(function (iCategory) {
            var category = new _service_category__WEBPACK_IMPORTED_MODULE_4__["ServiceCategoryVM"]();
            category.Id = iCategory.Id;
            category.BusinessId = iCategory.BusinessId,
                category.LinkId = iCategory.LinkId;
            category.Name = iCategory.Name;
            category.Services = new Array();
            category.ShortName = iCategory.ShortName;
            iCategory.Services.forEach(function (iService) {
                var service = new _service_category__WEBPACK_IMPORTED_MODULE_4__["ServicesVM"]();
                service.Description = _this.removeHtmlBreak(iService.Description);
                service.Id = iService.Id;
                service.ImageUrl = iService.ImageUrl;
                service.ServiceCategoryId = iService.ServiceCategoryId;
                service.ServiceOptions = new Array();
                service.Title = iService.Title;
                iService.ServiceOptions.forEach(function (iOption) {
                    var option = new _service_category__WEBPACK_IMPORTED_MODULE_4__["ServiceOptionVM"]();
                    option.Description = _this.removeHtmlBreak(iOption.Description);
                    option.Footer = _this.removeHtmlBreak(iOption.Footer);
                    option.Id = iOption.Id;
                    option.ServicesId = iOption.ServicesId;
                    option.Title = iOption.Title;
                    service.ServiceOptions.push(option);
                });
                category.Services.push(service);
            });
            result.push(category);
        });
        return result;
    };
    ServiceCategoryService.prototype.addHtmlBreak = function (val) {
        if (!val) {
            return val;
        }
        return val.replace(/\n/g, '<br />').trim();
    };
    ServiceCategoryService.prototype.removeHtmlBreak = function (val) {
        if (!val) {
            return val;
        }
        return val.replace(/<br \/>/g, '\n');
    };
    ServiceCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceCategoryService);
    return ServiceCategoryService;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='nav flex align-center'>\n  <div class='link' (click)=\"modifyBusiness()\" [class.active]='path === \"business\"'>Modify Business</div>\n  <div class='link' (click)=\"modifyServices()\" [class.active]='path === \"services\"'>Modify Services</div>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  padding-bottom: 20px; }\n  .nav .link {\n    margin-right: 10px;\n    padding-bottom: 3px;\n    box-sizing: border-box;\n    cursor: pointer;\n    border-bottom: 2px solid transparent; }\n  .nav .link.active {\n      border-bottom: 2px solid #555; }\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO, make nav a vertical left side bar that can expand/collapse
var NavComponent = /** @class */ (function () {
    function NavComponent(router, location, route) {
        this.router = router;
        this.location = location;
        this.route = route;
        this.changePath = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.businessId = 0;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.businessId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.path = this.location.path().replace(/\//g, '').replace(/\d/g, '');
        if (!this.path) {
            this.router.navigate(["services/" + this.businessId]);
        }
    };
    NavComponent.prototype.modifyServices = function () {
        this.changePath.emit();
        this.router.navigate(["services/" + this.businessId]);
    };
    NavComponent.prototype.modifyBusiness = function () {
        this.changePath.emit();
        this.router.navigate(["business/" + this.businessId]);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<button mat-raised-button color=\"primary\" (click)=\"save()\" class='save'>Save</button>\n<div class='flex align-top'>\n  <div class='column'>\n    <button mat-raised-button color=\"primary\" (click)=\"newCategory()\">Create Category</button>\n    <div *ngFor=\"let category of categories; let i = index\" class=\"category\"\n      [class.selected]='selectedCategory?.Id === category.Id'>\n      <div class='flex align-center justify-between'>\n        <div class='category-name' (click)='selectCategory(category)'>{{category.Name}}</div>\n        <div *ngIf='!category.editing'>\n          <button mat-raised-button color=\"primary\" class='option-edit' (click)='editName(category)'>Edit</button>\n          <button mat-raised-button color=\"warn\" class='option-edit' (click)='verifyDeleteCategory(i)'>Del</button>\n        </div>\n        <div *ngIf='category.editing' class='flex align-center'>\n          <button mat-raised-button color=\"ok\" class='option-edit' (click)='saveName(category)'>A</button>\n          <button mat-raised-button color=\"warn\" class='option-edit' (click)='exitName(category)'>X</button>\n        </div>\n      </div>\n      <div class='edit-block' *ngIf='category.editing'>\n        <div class='title'>Title</div>\n        <input type='text' [(ngModel)]='category.Name' />\n        <div class='title'>Short Title</div>\n        <input type='text' [(ngModel)]='category.ShortName' />\n      </div>\n    </div>\n  </div>\n  <div class='column' *ngIf='selectedCategory'>\n    <button mat-raised-button color=\"primary\" (click)=\"newService()\">Create Service</button>\n    <div *ngFor=\"let service of selectedCategory.Services; let i = index\" class=\"category\"\n      [class.selected]='selectedService?.Id === service.Id'>\n      <div class='flex align-center justify-between'>\n        <div class='category-name' (click)='selectService(service)'>{{service.Title}}</div>\n        <div *ngIf='!service.editing'>\n          <button mat-raised-button color=\"primary\" class='option-edit' (click)='editService(service)'>Edit</button>\n          <button mat-raised-button color=\"warn\" class='option-edit' (click)='verifyDeleteService(i)'>Del</button>\n        </div>\n        <div *ngIf='service.editing' class='flex align-center'>\n          <button mat-raised-button color=\"ok\" class='option-edit' (click)='saveName(service)'>A</button>\n          <button mat-raised-button color=\"warn\" class='option-edit' (click)='exitName(service)'>X</button>\n        </div>\n      </div>\n      <div class='edit-block' *ngIf='service.editing'>\n        <div class='title'>Title</div>\n        <input type='text' [(ngModel)]='service.Title' />\n        <div class='title'>Description</div>\n        <textarea [(ngModel)]='service.Description'></textarea>\n        <div>Image</div>\n        <input type='file' accept=\"image/*\" (change)=\"uploadImage($event, service)\" />\n        <img *ngIf='image' [src]=\"image\" class=\"image\" />\n        <div *ngIf='!image'>No Image Uploaded Yet</div>\n      </div>\n    </div>\n\n  </div>\n  <div class='column' *ngIf='selectedService'>\n    <button mat-raised-button color=\"primary\" (click)=\"newServiceOption()\">Create Service Option</button>\n    <div *ngFor=\"let option of selectedService.ServiceOptions; let i = index\" class=\"category\"\n      [class.selected]='selectedServiceOption?.Id === option.Id'>\n      <div class='flex align-center justify-between'>\n        <div class='category-name'>{{option.Title}}</div>\n        <div *ngIf='!option.editing'>\n          <button mat-raised-button color=\"primary\" class='option-edit' (click)='editOption(option)'>Edit</button>\n          <button mat-raised-button color=\"warn\" class='option-edit' (click)='verifyDeleteServiceOption(i)'>Del</button>\n        </div>\n        <div *ngIf='option.editing' class='flex align-center'>\n          <button mat-raised-button color=\"ok\" class='option-edit' (click)='saveName(option)'>A</button>\n          <button mat-raised-button color=\"warn\" class='option-edit' (click)='exitName(option)'>X</button>\n        </div>\n      </div>\n      <div class='edit-block' *ngIf='option.editing'>\n        <div class='title'>Title</div>\n        <input type='text' [(ngModel)]='option.Title' />\n        <div class='title'>Description</div>\n        <textarea [(ngModel)]='option.Description'></textarea>\n        <div>Footer</div>\n        <textarea [(ngModel)]='option.Footer'></textarea>\n      </div>\n    </div>\n  </div>\n  <div class='modal-background' [class.show]='showingDeleteModal'></div>\n  <div class='modal' [class.show]='showingDeleteModal'>\n    <div class='question'>Are you sure to delete?</div>\n    <div class='flex align-center'>\n      <button mat-raised-button color=\"warn\" (click)='cancelModal()'>No</button>\n      <button mat-raised-button color=\"primary\" (click)='delete()'>Yes</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category {\n  margin: 10px 0;\n  border: 1px solid black;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .category.selected {\n    box-shadow: 1px 1px 0 0 #555;\n    background-color: #f1f1f1; }\n  .category .category-name {\n    padding: 20px 10px;\n    flex: 1; }\n  .save {\n  position: fixed;\n  top: 5px;\n  right: 5px; }\n  .image {\n  width: 400px; }\n  .column {\n  margin: 0 10px 0 0px;\n  min-width: 400px; }\n  .edit {\n  width: 20px;\n  height: 20px; }\n  .edit-button {\n  cursor: pointer;\n  padding: 5px; }\n  .option-edit {\n  min-width: 5px;\n  margin: 5px; }\n  .edit-block {\n  padding: 10px 10px 0;\n  box-sizing: border-box;\n  min-width: 400px; }\n  .edit-block textarea {\n    width: 97%;\n    min-height: 300px; }\n  .edit-block textarea,\n  .edit-block input {\n    padding: 5px;\n    font-size: 16px;\n    margin: 3px 0 10px; }\n  .mat-ok {\n  background-color: #4caf50;\n  color: white; }\n  .modal-background {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background-color: #ccc;\n  opacity: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  transition: opacity 0.2s linear; }\n  .modal-background.show {\n    transition: opacity 0.2s linear;\n    opacity: 0.4; }\n  .modal {\n  position: fixed;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  margin: auto;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  box-shadow: 1px 1px 0 0 #999;\n  z-index: 2;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s linear; }\n  .modal.show {\n    transition: opacity 0.2s linear;\n    pointer-events: all;\n    opacity: 1; }\n  .modal .question {\n    margin-bottom: 5px; }\n  .modal button:first-child {\n    margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_service_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/service-category */ "./src/app/entities/service-category.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _entities_serviceCategory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/serviceCategory.service */ "./src/app/entities/serviceCategory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(serviceCategoryService, route, sanitizer, snackBar) {
        this.serviceCategoryService = serviceCategoryService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.snackBar = snackBar;
        this.title = 'dousedashboard';
        this.categories = new Array();
        this.showingDeleteModal = false;
        this.deleteCategoryIndex = -1;
        this.deleteServiceIndex = -1;
        this.deleteServiceOptionIndex = -1;
        this.snackBar.open('Getting user data from the server ...');
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.businessId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.serviceCategoryService.getByBusinessId(this.businessId)
            .subscribe(function (serviceCategories) {
            _this.categories = serviceCategories;
            _this.snackBar.dismiss();
        }, function (error) {
            _this.snackBar.open('Unable to retrieve data from the server. Please try again later.', '', {
                duration: 3000
            });
        });
        // this.mock();
    };
    ServicesComponent.prototype.newCategory = function () {
        var category = new _entities_service_category__WEBPACK_IMPORTED_MODULE_1__["ServiceCategoryVM"]();
        category.Name = 'New Category ';
        this.categories.push(category);
    };
    ServicesComponent.prototype.newService = function () {
        var service = new _entities_service_category__WEBPACK_IMPORTED_MODULE_1__["ServicesVM"]();
        service.Title = 'My New Service';
        this.selectedCategory.Services.push(service);
    };
    ServicesComponent.prototype.newServiceOption = function () {
        var serviceOption = new _entities_service_category__WEBPACK_IMPORTED_MODULE_1__["ServiceOptionVM"]();
        serviceOption.Title = 'Service Option';
        this.selectedService.ServiceOptions.push(serviceOption);
    };
    ServicesComponent.prototype.selectCategory = function (category) {
        this.selectedCategory = category;
        this.selectedService = null;
    };
    ServicesComponent.prototype.selectService = function (service) {
        this.selectedService = service;
        if (this.selectedService.ImageUrl) {
            this.image = this.sanitizer.bypassSecurityTrustUrl(this.selectedService.ImageUrl);
        }
        else {
            this.image = null;
        }
    };
    ServicesComponent.prototype.editName = function (item) {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var cat = _a[_i];
            cat.editing = false;
        }
        if (this.selectedCategory) {
            for (var _b = 0, _c = this.selectedCategory.Services; _b < _c.length; _b++) {
                var service = _c[_b];
                service.editing = false;
            }
        }
        item.editing = true;
    };
    ServicesComponent.prototype.editService = function (service) {
        for (var _i = 0, _a = this.selectedCategory.Services; _i < _a.length; _i++) {
            var s = _a[_i];
            s.editing = false;
        }
        service.editing = true;
        this.selectedService = service;
        this.image = this.sanitizer.bypassSecurityTrustUrl(service.ImageUrl);
    };
    ServicesComponent.prototype.saveName = function (item) {
        item.editing = false;
    };
    ServicesComponent.prototype.exitName = function (item) {
        item.editing = false;
    };
    ServicesComponent.prototype.editOption = function (option) {
        for (var _i = 0, _a = this.selectedService.ServiceOptions; _i < _a.length; _i++) {
            var opt = _a[_i];
            opt.editing = opt.Id === option.Id;
        }
    };
    ServicesComponent.prototype.verifyDeleteCategory = function (index) {
        this.showingDeleteModal = true;
        this.deleteCategoryIndex = index;
    };
    ServicesComponent.prototype.verifyDeleteService = function (index) {
        this.showingDeleteModal = true;
        this.deleteServiceIndex = index;
    };
    ServicesComponent.prototype.verifyDeleteServiceOption = function (index) {
        this.showingDeleteModal = true;
        this.deleteServiceOptionIndex = index;
    };
    ServicesComponent.prototype.uploadImage = function (event, service) {
        var _this = this;
        this.selectedService = service;
        if (event.target.files && event.target.files.length > 0) {
            if (event.target.files[0].size < 220000) {
                var file_1 = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var blob = window.URL.createObjectURL(file_1);
                    _this.selectedService.ImageUrl = e.target.result.toString();
                    _this.image = _this.sanitizer.bypassSecurityTrustUrl(e.target.result.toString());
                };
                reader.readAsDataURL(file_1);
            }
            else {
                this.snackBar.open('Image too large. Please make sure image is less than 200 KB (Preferably 100KB or less)', '', {
                    duration: 5000
                });
            }
        }
    };
    ServicesComponent.prototype.save = function () {
        var _this = this;
        this.snackBar.open('Saving...');
        this.serviceCategoryService.save(this.categories, this.businessId).subscribe(function () {
            _this.snackBar.open('Saved to server', '', {
                duration: 3000
            });
        });
    };
    ServicesComponent.prototype.delete = function () {
        if (this.deleteServiceIndex > -1) {
            this.selectedCategory.Services.splice(this.deleteServiceIndex, 1);
        }
        else if (this.deleteCategoryIndex > -1) {
            this.categories.splice(this.deleteCategoryIndex, 1);
        }
        else if (this.deleteServiceOptionIndex > -1) {
            this.selectedService.ServiceOptions.splice(this.deleteServiceOptionIndex, 1);
        }
        this.deleteCategoryIndex = -1;
        this.deleteServiceIndex = -1;
        this.deleteServiceOptionIndex = -1;
        this.showingDeleteModal = false;
        this.selectedCategory = null;
        this.selectedService = null;
        this.selectedServiceOption = null;
    };
    ServicesComponent.prototype.cancelModal = function () {
        this.showingDeleteModal = false;
        this.deleteCategoryIndex = -1;
        this.deleteServiceIndex = -1;
    };
    ServicesComponent.prototype.mock = function () {
        var category = new _entities_service_category__WEBPACK_IMPORTED_MODULE_1__["ServiceCategoryVM"]();
        category.Name = 'My Category 1';
        var service = new _entities_service_category__WEBPACK_IMPORTED_MODULE_1__["ServicesVM"]();
        service.Title = 'My Service';
        var serviceOption = new _entities_service_category__WEBPACK_IMPORTED_MODULE_1__["ServiceOptionVM"]();
        serviceOption.Title = 'My Option 1';
        service.ServiceOptions.push(serviceOption);
        category.Services.push(service);
        this.categories.push(category);
        this.selectedCategory = category;
        this.selectedService = service;
        this.selectedServiceOption = serviceOption;
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [_entities_serviceCategory_service__WEBPACK_IMPORTED_MODULE_4__["ServiceCategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



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
var environment = {
    production: false,
    // api: 'https://localhost:44365/api'
    api: 'https://192.168.1.4:83'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Saith\Documents\dousedashboard\dousedashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map