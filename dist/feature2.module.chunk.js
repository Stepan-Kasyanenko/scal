webpackJsonp(["feature2.module"],{

/***/ "../../../../../src/app/main/modules/feature2/components/feature2/feature2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/modules/feature2/components/feature2/feature2.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"\">main</a>\n<p>\n  feature2 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/modules/feature2/components/feature2/feature2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feature2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Feature2Component = (function () {
    function Feature2Component() {
    }
    Feature2Component.prototype.ngOnInit = function () {
    };
    return Feature2Component;
}());
Feature2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-feature2',
        template: __webpack_require__("../../../../../src/app/main/modules/feature2/components/feature2/feature2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/modules/feature2/components/feature2/feature2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Feature2Component);

//# sourceMappingURL=feature2.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/modules/feature2/feature2-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feature2RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_main_modules_feature2_components_feature2_feature2_component__ = __webpack_require__("../../../../../src/app/main/modules/feature2/components/feature2/feature2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2_app_main_modules_feature2_components_feature2_feature2_component__["a" /* Feature2Component */]
    }];
var Feature2RoutingModule = (function () {
    function Feature2RoutingModule() {
    }
    return Feature2RoutingModule;
}());
Feature2RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], Feature2RoutingModule);

//# sourceMappingURL=feature2-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/modules/feature2/feature2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature2Module", function() { return Feature2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature2_routing_module__ = __webpack_require__("../../../../../src/app/main/modules/feature2/feature2-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_feature2_feature2_component__ = __webpack_require__("../../../../../src/app/main/modules/feature2/components/feature2/feature2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Feature2Module = (function () {
    function Feature2Module() {
    }
    return Feature2Module;
}());
Feature2Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__feature2_routing_module__["a" /* Feature2RoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_feature2_feature2_component__["a" /* Feature2Component */]]
    })
], Feature2Module);

//# sourceMappingURL=feature2.module.js.map

/***/ })

});
//# sourceMappingURL=feature2.module.chunk.js.map