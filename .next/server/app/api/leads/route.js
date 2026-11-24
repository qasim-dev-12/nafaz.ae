/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/leads/route";
exports.ids = ["app/api/leads/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleads%2Froute&page=%2Fapi%2Fleads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleads%2Froute.ts&appDir=C%3A%5Cwisevision%5Cnafaz.ae%5Cnafaz.ae%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cwisevision%5Cnafaz.ae%5Cnafaz.ae&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleads%2Froute&page=%2Fapi%2Fleads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleads%2Froute.ts&appDir=C%3A%5Cwisevision%5Cnafaz.ae%5Cnafaz.ae%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cwisevision%5Cnafaz.ae%5Cnafaz.ae&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_wisevision_nafaz_ae_nafaz_ae_src_app_api_leads_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/leads/route.ts */ \"(rsc)/./src/app/api/leads/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/leads/route\",\n        pathname: \"/api/leads\",\n        filename: \"route\",\n        bundlePath: \"app/api/leads/route\"\n    },\n    resolvedPagePath: \"C:\\\\wisevision\\\\nafaz.ae\\\\nafaz.ae\\\\src\\\\app\\\\api\\\\leads\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_wisevision_nafaz_ae_nafaz_ae_src_app_api_leads_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsZWFkcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbGVhZHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsZWFkcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDd2lzZXZpc2lvbiU1Q25hZmF6LmFlJTVDbmFmYXouYWUlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUN3aXNldmlzaW9uJTVDbmFmYXouYWUlNUNuYWZhei5hZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDa0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXHdpc2V2aXNpb25cXFxcbmFmYXouYWVcXFxcbmFmYXouYWVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcbGVhZHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xlYWRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGVhZHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2xlYWRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcd2lzZXZpc2lvblxcXFxuYWZhei5hZVxcXFxuYWZhei5hZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsZWFkc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleads%2Froute&page=%2Fapi%2Fleads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleads%2Froute.ts&appDir=C%3A%5Cwisevision%5Cnafaz.ae%5Cnafaz.ae%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cwisevision%5Cnafaz.ae%5Cnafaz.ae&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/leads/route.ts":
/*!************************************!*\
  !*** ./src/app/api/leads/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mailer */ \"(rsc)/./src/lib/mailer.ts\");\n\n\nconst LEADS_EMAIL = 'staytopdev@gmail.com';\nasync function POST(req) {\n    try {\n        const data = await req.json();\n        const { name, email, phone, company, service, message } = data;\n        if (!name || !email || !phone) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Name, email and phone are required'\n            }, {\n                status: 400\n            });\n        }\n        const { error } = await (0,_lib_mailer__WEBPACK_IMPORTED_MODULE_1__.getResend)().emails.send({\n            from: _lib_mailer__WEBPACK_IMPORTED_MODULE_1__.SENDER_EMAIL,\n            to: LEADS_EMAIL,\n            replyTo: email,\n            subject: `New website lead: ${name}${service ? ` (${service})` : ''}`,\n            text: `New lead from the Nafaz landing page\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company || '-'}\nService interested in: ${service || '-'}\nMessage: ${message || '-'}\n\nNafaz contact: ${_lib_mailer__WEBPACK_IMPORTED_MODULE_1__.NAFAZ_PHONE}`\n        });\n        if (error) throw error;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to send your request'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9sZWFkcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDeUI7QUFFbkUsTUFBTUksY0FBYztBQUViLGVBQWVDLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR1A7UUFFMUQsSUFBSSxDQUFDRSxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsT0FBTztZQUM3QixPQUFPWCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFTyxPQUFPO1lBQXFDLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMxRjtRQUVBLE1BQU0sRUFBRUQsS0FBSyxFQUFFLEdBQUcsTUFBTWQsc0RBQVNBLEdBQUdnQixNQUFNLENBQUNDLElBQUksQ0FBQztZQUM5Q0MsTUFBTWhCLHFEQUFZQTtZQUNsQmlCLElBQUloQjtZQUNKaUIsU0FBU1g7WUFDVFksU0FBUyxDQUFDLGtCQUFrQixFQUFFYixPQUFPSSxVQUFVLENBQUMsRUFBRSxFQUFFQSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUk7WUFDckVVLE1BQU0sQ0FBQzs7TUFFUCxFQUFFZCxLQUFLO09BQ04sRUFBRUMsTUFBTTtPQUNSLEVBQUVDLE1BQU07U0FDTixFQUFFQyxXQUFXLElBQUk7dUJBQ0gsRUFBRUMsV0FBVyxJQUFJO1NBQy9CLEVBQUVDLFdBQVcsSUFBSTs7ZUFFWCxFQUFFWixvREFBV0EsRUFBRTtRQUMxQjtRQUVBLElBQUlhLE9BQU8sTUFBTUE7UUFFakIsT0FBT2YscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFZ0IsU0FBUztRQUFLO0lBQzNDLEVBQUUsT0FBT0MsS0FBSztRQUNaLE9BQU96QixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVPLE9BQU87UUFBOEIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbkY7QUFDRiIsInNvdXJjZXMiOlsiQzpcXHdpc2V2aXNpb25cXG5hZmF6LmFlXFxuYWZhei5hZVxcc3JjXFxhcHBcXGFwaVxcbGVhZHNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgZ2V0UmVzZW5kLCBOQUZBWl9QSE9ORSwgU0VOREVSX0VNQUlMIH0gZnJvbSAnQC9saWIvbWFpbGVyJ1xuXG5jb25zdCBMRUFEU19FTUFJTCA9ICdzdGF5dG9wZGV2QGdtYWlsLmNvbSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKClcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwaG9uZSwgY29tcGFueSwgc2VydmljZSwgbWVzc2FnZSB9ID0gZGF0YVxuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGhvbmUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTmFtZSwgZW1haWwgYW5kIHBob25lIGFyZSByZXF1aXJlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cblxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IGdldFJlc2VuZCgpLmVtYWlscy5zZW5kKHtcbiAgICAgIGZyb206IFNFTkRFUl9FTUFJTCxcbiAgICAgIHRvOiBMRUFEU19FTUFJTCxcbiAgICAgIHJlcGx5VG86IGVtYWlsLFxuICAgICAgc3ViamVjdDogYE5ldyB3ZWJzaXRlIGxlYWQ6ICR7bmFtZX0ke3NlcnZpY2UgPyBgICgke3NlcnZpY2V9KWAgOiAnJ31gLFxuICAgICAgdGV4dDogYE5ldyBsZWFkIGZyb20gdGhlIE5hZmF6IGxhbmRpbmcgcGFnZVxuXG5OYW1lOiAke25hbWV9XG5FbWFpbDogJHtlbWFpbH1cblBob25lOiAke3Bob25lfVxuQ29tcGFueTogJHtjb21wYW55IHx8ICctJ31cblNlcnZpY2UgaW50ZXJlc3RlZCBpbjogJHtzZXJ2aWNlIHx8ICctJ31cbk1lc3NhZ2U6ICR7bWVzc2FnZSB8fCAnLSd9XG5cbk5hZmF6IGNvbnRhY3Q6ICR7TkFGQVpfUEhPTkV9YCxcbiAgICB9KVxuXG4gICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBzZW5kIHlvdXIgcmVxdWVzdCcgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0UmVzZW5kIiwiTkFGQVpfUEhPTkUiLCJTRU5ERVJfRU1BSUwiLCJMRUFEU19FTUFJTCIsIlBPU1QiLCJyZXEiLCJkYXRhIiwianNvbiIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiY29tcGFueSIsInNlcnZpY2UiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwicmVwbHlUbyIsInN1YmplY3QiLCJ0ZXh0Iiwic3VjY2VzcyIsImVyciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/leads/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mailer.ts":
/*!***************************!*\
  !*** ./src/lib/mailer.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NAFAZ_EMAIL: () => (/* binding */ NAFAZ_EMAIL),\n/* harmony export */   NAFAZ_PHONE: () => (/* binding */ NAFAZ_PHONE),\n/* harmony export */   SENDER_EMAIL: () => (/* binding */ SENDER_EMAIL),\n/* harmony export */   getResend: () => (/* binding */ getResend)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n\nconst NAFAZ_EMAIL = 'info@nafaz.ae';\nconst NAFAZ_PHONE = '+971559549922';\nconst SENDER_EMAIL = 'Nafaz Website <onboarding@resend.dev>';\nfunction getResend() {\n    return new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21haWxlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUV4QixNQUFNQyxjQUFjLGdCQUFlO0FBQ25DLE1BQU1DLGNBQWMsZ0JBQWU7QUFDbkMsTUFBTUMsZUFBZSx3Q0FBdUM7QUFFNUQsU0FBU0M7SUFDZCxPQUFPLElBQUlKLDBDQUFNQSxDQUFDSyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7QUFDOUMiLCJzb3VyY2VzIjpbIkM6XFx3aXNldmlzaW9uXFxuYWZhei5hZVxcbmFmYXouYWVcXHNyY1xcbGliXFxtYWlsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJ1xuXG5leHBvcnQgY29uc3QgTkFGQVpfRU1BSUwgPSAnaW5mb0BuYWZhei5hZSdcbmV4cG9ydCBjb25zdCBOQUZBWl9QSE9ORSA9ICcrOTcxNTU5NTQ5OTIyJ1xuZXhwb3J0IGNvbnN0IFNFTkRFUl9FTUFJTCA9ICdOYWZheiBXZWJzaXRlIDxvbmJvYXJkaW5nQHJlc2VuZC5kZXY+J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzZW5kKCkge1xuICByZXR1cm4gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSlcbn1cbiJdLCJuYW1lcyI6WyJSZXNlbmQiLCJOQUZBWl9FTUFJTCIsIk5BRkFaX1BIT05FIiwiU0VOREVSX0VNQUlMIiwiZ2V0UmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mailer.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/postal-mime","vendor-chunks/standardwebhooks","vendor-chunks/resend","vendor-chunks/fast-sha256","vendor-chunks/@stablelib"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fleads%2Froute&page=%2Fapi%2Fleads%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fleads%2Froute.ts&appDir=C%3A%5Cwisevision%5Cnafaz.ae%5Cnafaz.ae%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cwisevision%5Cnafaz.ae%5Cnafaz.ae&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();