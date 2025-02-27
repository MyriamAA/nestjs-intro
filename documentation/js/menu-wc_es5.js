'use strict';

function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = 'function' == typeof Map ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ('function' != typeof t)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper.prototype = Object.create(t.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        _setPrototypeOf(Wrapper, t)
      );
    }),
    _wrapNativeSuper(t)
  );
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf('[native code]');
  } catch (n) {
    return 'function' == typeof t;
  }
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
customElements.define(
  'compodoc-menu',
  /*#__PURE__*/ (function (_HTMLElement) {
    function _class() {
      var _this;
      _classCallCheck(this, _class);
      _this = _callSuper(this, _class);
      _this.isNormalMode = _this.getAttribute('mode') === 'normal';
      return _this;
    }
    _inherits(_class, _HTMLElement);
    return _createClass(_class, [
      {
        key: 'connectedCallback',
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        },
      },
      {
        key: 'render',
        value: function render(isNormalMode) {
          var tp = lithtml.html(
            '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
              .concat(
                isNormalMode
                  ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                  : '',
                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class="link">\n                                    <a href="properties.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-apps"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#modules-links"'
                  : 'data-bs-target="#xs-modules-links"',
                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                '>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-AppModule-e4dc23a7806af839c78fbd9a0a25958acbd21f6be8d863943a2778ff52e968060333cac6aefb8b95950f98c89dad6590b70928b6e44c8ae7bd36cd8de5e4dbb3"'
                  : 'data-bs-target="#xs-controllers-links-module-AppModule-e4dc23a7806af839c78fbd9a0a25958acbd21f6be8d863943a2778ff52e968060333cac6aefb8b95950f98c89dad6590b70928b6e44c8ae7bd36cd8de5e4dbb3"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-AppModule-e4dc23a7806af839c78fbd9a0a25958acbd21f6be8d863943a2778ff52e968060333cac6aefb8b95950f98c89dad6590b70928b6e44c8ae7bd36cd8de5e4dbb3"'
                  : 'id="xs-controllers-links-module-AppModule-e4dc23a7806af839c78fbd9a0a25958acbd21f6be8d863943a2778ff52e968060333cac6aefb8b95950f98c89dad6590b70928b6e44c8ae7bd36cd8de5e4dbb3"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-AppModule-e4dc23a7806af839c78fbd9a0a25958acbd21f6be8d863943a2778ff52e968060333cac6aefb8b95950f98c89dad6590b70928b6e44c8ae7bd36cd8de5e4dbb3"'
                  : 'data-bs-target="#xs-injectables-links-module-AppModule-e4dc23a7806af839c78fbd9a0a25958acbd21f6be8d863943a2778ff52e968060333cac6aefb8b95950f98c89dad6590b70928b6e44c8ae7bd36cd8de5e4dbb3"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AppModule-e4dc23a7806af839c78fbd9a0a25958acbd21f6be8d863943a2778ff52e968060333cac6aefb8b95950f98c89dad6590b70928b6e44c8ae7bd36cd8de5e4dbb3"'
                  : 'id="xs-injectables-links-module-AppModule-e4dc23a7806af839c78fbd9a0a25958acbd21f6be8d863943a2778ff52e968060333cac6aefb8b95950f98c89dad6590b70928b6e44c8ae7bd36cd8de5e4dbb3"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                  : 'data-bs-target="#xs-controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                  : 'id="xs-controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                  : 'data-bs-target="#xs-injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                  : 'id="xs-injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"'
                  : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"'
                  : 'id="xs-controllers-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"'
                  : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"'
                  : 'id="xs-injectables-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"'
                  : 'data-bs-target="#xs-controllers-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"'
                  : 'id="xs-controllers-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"'
                  : 'data-bs-target="#xs-injectables-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"'
                  : 'id="xs-injectables-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"'
                  : 'data-bs-target="#xs-controllers-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"'
                  : 'id="xs-controllers-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"'
                  : 'data-bs-target="#xs-injectables-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"'
                  : 'id="xs-injectables-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-UsersModule-c2a61334bc85eb7a7c7c2077ff5322c5af1e879d2d8b65efa6efd9dfeb077c612f2adf1ec2241029bd2cc475cd3df1f1b03998316a1e837658baa11b81e35ceb"'
                  : 'data-bs-target="#xs-controllers-links-module-UsersModule-c2a61334bc85eb7a7c7c2077ff5322c5af1e879d2d8b65efa6efd9dfeb077c612f2adf1ec2241029bd2cc475cd3df1f1b03998316a1e837658baa11b81e35ceb"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-UsersModule-c2a61334bc85eb7a7c7c2077ff5322c5af1e879d2d8b65efa6efd9dfeb077c612f2adf1ec2241029bd2cc475cd3df1f1b03998316a1e837658baa11b81e35ceb"'
                  : 'id="xs-controllers-links-module-UsersModule-c2a61334bc85eb7a7c7c2077ff5322c5af1e879d2d8b65efa6efd9dfeb077c612f2adf1ec2241029bd2cc475cd3df1f1b03998316a1e837658baa11b81e35ceb"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-UsersModule-c2a61334bc85eb7a7c7c2077ff5322c5af1e879d2d8b65efa6efd9dfeb077c612f2adf1ec2241029bd2cc475cd3df1f1b03998316a1e837658baa11b81e35ceb"'
                  : 'data-bs-target="#xs-injectables-links-module-UsersModule-c2a61334bc85eb7a7c7c2077ff5322c5af1e879d2d8b65efa6efd9dfeb077c612f2adf1ec2241029bd2cc475cd3df1f1b03998316a1e837658baa11b81e35ceb"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-UsersModule-c2a61334bc85eb7a7c7c2077ff5322c5af1e879d2d8b65efa6efd9dfeb077c612f2adf1ec2241029bd2cc475cd3df1f1b03998316a1e837658baa11b81e35ceb"'
                  : 'id="xs-injectables-links-module-UsersModule-c2a61334bc85eb7a7c7c2077ff5322c5af1e879d2d8b65efa6efd9dfeb077c612f2adf1ec2241029bd2cc475cd3df1f1b03998316a1e837658baa11b81e35ceb"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links"'
                  : 'data-bs-target="#xs-controllers-links"',
                '>\n                                <span class="icon ion-md-swap"></span>\n                                <span>Controllers</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links"'
                  : 'id="xs-controllers-links"',
                '>\n                                <li class="link">\n                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>\n                                </li>\n                                <li class="link">\n                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#entities-links"'
                  : 'data-bs-target="#xs-entities-links"',
                '>\n                                <span class="icon ion-ios-apps"></span>\n                                <span>Entities</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"',
                '>\n                                <li class="link">\n                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/User.html" data-type="entity-link" >User</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#classes-links"'
                  : 'data-bs-target="#xs-classes-links"',
                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                '>\n                            <li class="link">\n                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links"'
                  : 'data-bs-target="#xs-injectables-links"',
                '>\n                                <span class="icon ion-md-arrow-round-down"></span>\n                                <span>Injectables</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links"'
                  : 'id="xs-injectables-links"',
                '>\n                                <li class="link">\n                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" ',
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#miscellaneous-links"'
                  : 'data-bs-target="#xs-miscellaneous-links"',
                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " ',
              )
              .concat(
                isNormalMode
                  ? 'id="miscellaneous-links"'
                  : 'id="xs-miscellaneous-links"',
                '>\n                            <li class="link">\n                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        ',
              ),
          );
          this.innerHTML = tp.strings;
        },
      },
    ]);
  })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement)),
);
