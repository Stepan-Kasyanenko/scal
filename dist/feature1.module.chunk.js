webpackJsonp(["feature1.module"],{

/***/ "../../../../../src/app/main/modules/feature1/components/feature1/feature1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/modules/feature1/components/feature1/feature1.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"\">main</a>\n<p>\n  feature1 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/modules/feature1/components/feature1/feature1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feature1Component; });
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

var Feature1Component = (function () {
    function Feature1Component() {
    }
    Feature1Component.prototype.ngOnInit = function () {
    };
    return Feature1Component;
}());
Feature1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-feature1',
        template: __webpack_require__("../../../../../src/app/main/modules/feature1/components/feature1/feature1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/modules/feature1/components/feature1/feature1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Feature1Component);

//# sourceMappingURL=feature1.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/modules/feature1/feature1-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feature1RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_feature1_feature1_component__ = __webpack_require__("../../../../../src/app/main/modules/feature1/components/feature1/feature1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_feature1_feature1_component__["a" /* Feature1Component */]
    }
];
var Feature1RoutingModule = (function () {
    function Feature1RoutingModule() {
    }
    return Feature1RoutingModule;
}());
Feature1RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], Feature1RoutingModule);

//# sourceMappingURL=feature1-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/modules/feature1/feature1.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature1Module", function() { return Feature1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature1_routing_module__ = __webpack_require__("../../../../../src/app/main/modules/feature1/feature1-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_feature1_feature1_component__ = __webpack_require__("../../../../../src/app/main/modules/feature1/components/feature1/feature1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Feature1Module = (function () {
    function Feature1Module() {
    }
    return Feature1Module;
}());
Feature1Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__feature1_routing_module__["a" /* Feature1RoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__components_feature1_feature1_component__["a" /* Feature1Component */]]
    })
], Feature1Module);

//# sourceMappingURL=feature1.module.js.map

/***/ })

});
//# sourceMappingURL=feature1.module.chunk.js.map