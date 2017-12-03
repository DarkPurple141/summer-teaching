webpackJsonp([1],{

/***/ "0BLv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1qb4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EGOM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JEYu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/sub/Footer.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Footer = ({
   name: "appFooter"
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-63f00658","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/sub/Footer.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0,false,false)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"appFooter"}},[_c('div',{staticClass:"footer"},[_c('hr'),_vm._v(" "),_c('p',[_c('em',[_vm._v("Made with vue.js")])]),_vm._v(" "),_c('p',[_vm._v("e. "),_c('a',{attrs:{"href":"mailto:a.hinds@unsw.edu.au"}},[_vm._v("Alex Hinds")])]),_vm._v(" "),_c('p',[_vm._v("git. "),_c('a',{attrs:{"target":"_blank","href":"https://github.com/DarkPurple141/teaching-api"}},[_vm._v("Repository")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var sub_Footer = (esExports);
// CONCATENATED MODULE: ./src/components/sub/Footer.vue
function injectStyle (ssrContext) {
  __webpack_require__("EGOM")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Footer,
  sub_Footer,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_sub_Footer = (Component.exports);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/http.js


var HOST = "https://cgi.cse.unsw.edu.au/~z3420752";

var HTTP = axios_default.a.create({
  baseURL: HOST + "/teaching-api/index.cgi" //,
  //withCredentials: true
});

/* harmony default export */ var http = (HTTP);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//




/* harmony default export */ var App = ({
  name: 'app',
  components: { AppFooter: components_sub_Footer }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-028a5766","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view'),_vm._v(" "),_c('AppFooter')],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__("a6tl")
}
var App_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Notes.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var Notes = ({
  name: 'HelloWorld',
  data: function data() {
    return {
      msg: 'No content here yet!'
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5565a394","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Notes.vue
var Notes_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('div',{staticClass:"container"},[_c('h1',[_vm._v(_vm._s(_vm.msg))])])])}
var Notes_staticRenderFns = []
var Notes_esExports = { render: Notes_render, staticRenderFns: Notes_staticRenderFns }
/* harmony default export */ var components_Notes = (Notes_esExports);
// CONCATENATED MODULE: ./src/components/Notes.vue
function Notes_injectStyle (ssrContext) {
  __webpack_require__("hsfl")
}
var Notes_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Notes___vue_template_functional__ = false
/* styles */
var Notes___vue_styles__ = Notes_injectStyle
/* scopeId */
var Notes___vue_scopeId__ = "data-v-5565a394"
/* moduleIdentifier (server only) */
var Notes___vue_module_identifier__ = null
var Notes_Component = Notes_normalizeComponent(
  Notes,
  components_Notes,
  Notes___vue_template_functional__,
  Notes___vue_styles__,
  Notes___vue_scopeId__,
  Notes___vue_module_identifier__
)

/* harmony default export */ var src_components_Notes = (Notes_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Home.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Home = ({
   name: 'Home',
   data: function data() {
      return {
         cards: [{
            title: "Labs",
            description: "Code from every week's labs in one place",
            url: '/code'
         }, {
            title: "Notes",
            description: "Bits of pieces of things that may be worth thinking about!",
            url: '/notes'
         }]
      };
   }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d002c74c","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('h1',[_vm._v("Teaching Repository")]),_vm._v(" "),_vm._l((_vm.cards),function(card){return _c('div',[_c('article',[_c('div',{staticClass:"card"},[_c('h2',[_vm._v(_vm._s(card.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(card.description))]),_vm._v(" "),_c('router-link',{attrs:{"to":{ path: card.url }}},[_vm._v("More")])],1)])])})],2)}
var Home_staticRenderFns = []
var Home_esExports = { render: Home_render, staticRenderFns: Home_staticRenderFns }
/* harmony default export */ var components_Home = (Home_esExports);
// CONCATENATED MODULE: ./src/components/Home.vue
function Home_injectStyle (ssrContext) {
  __webpack_require__("JEYu")
}
var Home_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Home___vue_template_functional__ = false
/* styles */
var Home___vue_styles__ = Home_injectStyle
/* scopeId */
var Home___vue_scopeId__ = "data-v-d002c74c"
/* moduleIdentifier (server only) */
var Home___vue_module_identifier__ = null
var Home_Component = Home_normalizeComponent(
  Home,
  components_Home,
  Home___vue_template_functional__,
  Home___vue_styles__,
  Home___vue_scopeId__,
  Home___vue_module_identifier__
)

/* harmony default export */ var src_components_Home = (Home_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Post.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Post = ({
  name: 'HelloWorld',
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4241e014","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Post.vue
var Post_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_vm._m(0,false,false),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_vm._m(1,false,false)])}
var Post_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank"}},[_vm._v("Core Docs")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank"}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank"}},[_vm._v("Community Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank"}},[_vm._v("Twitter")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank"}},[_vm._v("Docs for This Template")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank"}},[_vm._v("vue-router")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank"}},[_vm._v("vuex")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank"}},[_vm._v("vue-loader")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank"}},[_vm._v("awesome-vue")])])])}]
var Post_esExports = { render: Post_render, staticRenderFns: Post_staticRenderFns }
/* harmony default export */ var components_Post = (Post_esExports);
// CONCATENATED MODULE: ./src/components/Post.vue
function Post_injectStyle (ssrContext) {
  __webpack_require__("1qb4")
}
var Post_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Post___vue_template_functional__ = false
/* styles */
var Post___vue_styles__ = Post_injectStyle
/* scopeId */
var Post___vue_scopeId__ = "data-v-4241e014"
/* moduleIdentifier (server only) */
var Post___vue_module_identifier__ = null
var Post_Component = Post_normalizeComponent(
  Post,
  components_Post,
  Post___vue_template_functional__,
  Post___vue_styles__,
  Post___vue_scopeId__,
  Post___vue_module_identifier__
)

/* harmony default export */ var src_components_Post = (Post_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Labs.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Labs = ({
  name: 'Labs',
  data: function data() {
    return {
      error: false,
      loaded: false
    };
  },
  mounted: function mounted() {
    this.loaded = true;
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a9d6fc3e","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Labs.vue
var Labs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"labs"},[_c('h1',[_vm._v("Labs")]),_vm._v(" "),(_vm.error)?_c('div',[_vm._v("\n    ERROR: "+_vm._s(_vm.error)+"\n  ")]):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loaded),expression:"!loaded"}]},[_vm._v("LOADING!")]),_vm._v(" "),_c('div',{staticClass:"container"},_vm._l((this.$root.$data.labs),function(lab){return _c('div',{staticClass:"lab"},[_c('div',{staticClass:"lab-content"},[_c('h2',[_vm._v(_vm._s(lab.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(lab.description))]),_vm._v(" "),_c('router-link',{staticClass:"lab-button",attrs:{"to":{ path: lab.file },"append":""}},[_vm._v("More")])],1)])}))])}
var Labs_staticRenderFns = []
var Labs_esExports = { render: Labs_render, staticRenderFns: Labs_staticRenderFns }
/* harmony default export */ var components_Labs = (Labs_esExports);
// CONCATENATED MODULE: ./src/components/Labs.vue
function Labs_injectStyle (ssrContext) {
  __webpack_require__("o4Ku")
}
var Labs_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Labs___vue_template_functional__ = false
/* styles */
var Labs___vue_styles__ = Labs_injectStyle
/* scopeId */
var Labs___vue_scopeId__ = "data-v-a9d6fc3e"
/* moduleIdentifier (server only) */
var Labs___vue_module_identifier__ = null
var Labs_Component = Labs_normalizeComponent(
  Labs,
  components_Labs,
  Labs___vue_template_functional__,
  Labs___vue_styles__,
  Labs___vue_scopeId__,
  Labs___vue_module_identifier__
)

/* harmony default export */ var src_components_Labs = (Labs_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Code.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Code = ({
   name: 'Code',
   data: function data() {
      return {
         msg: 'Not loaded',
         files: []
      };
   },
   mounted: function mounted() {
      var _this = this;

      http.get('api/labs/' + this.$route.params.week).then(function (response) {
         _this.files = response.data;
         _this.msg = "";
      }).then(function () {
         Prism.highlightAll();
      }).catch(function (err) {
         _this.msg = err;
      });
   },

   computed: {
      title: function title() {
         return '' + this.$route.params.week;
      }
   }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0644098b","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Code.vue
var Code_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h1',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.msg)?_c('div',{staticClass:"error"},[_vm._v("\n    "+_vm._s(_vm.msg)+"\n  ")]):_vm._e(),_vm._v(" "),_vm._l((_vm.files),function(file){return _c('div',{staticClass:"files"},[_c('section',[_c('h3',[_vm._v(_vm._s(file.name))]),_vm._v(" "),_c('pre',[_vm._v("           "),_c('code',{staticClass:"language-c"},[_vm._v(_vm._s(file.code))]),_vm._v("\n        ")])])])})],2)}
var Code_staticRenderFns = []
var Code_esExports = { render: Code_render, staticRenderFns: Code_staticRenderFns }
/* harmony default export */ var components_Code = (Code_esExports);
// CONCATENATED MODULE: ./src/components/Code.vue
function Code_injectStyle (ssrContext) {
  __webpack_require__("to/Q")
}
var Code_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Code___vue_template_functional__ = false
/* styles */
var Code___vue_styles__ = Code_injectStyle
/* scopeId */
var Code___vue_scopeId__ = "data-v-0644098b"
/* moduleIdentifier (server only) */
var Code___vue_module_identifier__ = null
var Code_Component = Code_normalizeComponent(
  Code,
  components_Code,
  Code___vue_template_functional__,
  Code___vue_styles__,
  Code___vue_scopeId__,
  Code___vue_module_identifier__
)

/* harmony default export */ var src_components_Code = (Code_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js








vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{
    path: '/notes',
    name: 'Notes',
    component: src_components_Notes
  }, {
    path: '/notes/:article',
    name: 'Post',
    component: src_components_Post
  }, {
    path: '/code',
    name: 'Labs',
    component: src_components_Labs
  }, {
    path: '/',
    name: 'Home',
    component: src_components_Home
  }, {
    path: '/code/:week',
    name: 'Code',
    component: src_components_Code
  }]
}));
// EXTERNAL MODULE: ./node_modules/vue-prism/src/index.js
var src = __webpack_require__("P6sg");

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./src/init.js


var init__this = this;



var labs = [];

http.get('api/labs').then(function (response) {
   response.data.results.forEach(function (item) {
      labs.push({
         title: item.name,
         path: item.path,
         file: item.file,
         description: "Pending..."
      });
   });
}).then(function () {
   promise_default.a.all(labs.map(function (item) {
      return http.get('api/' + item.path + '/meta.json');
   })).then(function (args) {
      args.forEach(function (res, index) {
         labs[index].description = res.data.description;
      });
   }).then(function () {
      labs.sort(function (a, b) {
         return a.file > b.file;
      });
      console.log(labs);
   }).catch(function (err) {
      throw err;
   });
}).catch(function (err) {
   init__this.error = err;
});

/* harmony default export */ var init = (labs);
// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
var prism = __webpack_require__("0BLv");
var prism_default = /*#__PURE__*/__webpack_require__.n(prism);

// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-c.min.js
var prism_c_min = __webpack_require__("bOLe");
var prism_c_min_default = /*#__PURE__*/__webpack_require__.n(prism_c_min);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







vue_esm["a" /* default */].use(src["a" /* default */]);




vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: src_App },
  data: {
    labs: init
  }
});

/***/ }),

/***/ "a6tl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hsfl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "o4Ku":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "to/Q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.4083ced4a9728d5988fe.js.map