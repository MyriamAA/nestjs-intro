'use strict';

customElements.define(
  'compodoc-menu',
  class extends HTMLElement {
    constructor() {
      super();
      this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
      this.render(this.isNormalMode);
    }

    render(isNormalMode) {
      let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : ''}
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#modules-links"'
                                : 'data-bs-target="#xs-modules-links"'
                            }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"'}>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-bs-target="#controllers-links-module-AppModule-b2d3dc85fa4f3ec02eaac48f2016075d43874ae7bc26854ebd0d5979e10b73a4bb5a8c7b46bc3ce4c006bc5852d3cedc68019906a7d3322e1365a4635d4f9141"'
                                            : 'data-bs-target="#xs-controllers-links-module-AppModule-b2d3dc85fa4f3ec02eaac48f2016075d43874ae7bc26854ebd0d5979e10b73a4bb5a8c7b46bc3ce4c006bc5852d3cedc68019906a7d3322e1365a4635d4f9141"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="controllers-links-module-AppModule-b2d3dc85fa4f3ec02eaac48f2016075d43874ae7bc26854ebd0d5979e10b73a4bb5a8c7b46bc3ce4c006bc5852d3cedc68019906a7d3322e1365a4635d4f9141"'
                                            : 'id="xs-controllers-links-module-AppModule-b2d3dc85fa4f3ec02eaac48f2016075d43874ae7bc26854ebd0d5979e10b73a4bb5a8c7b46bc3ce4c006bc5852d3cedc68019906a7d3322e1365a4635d4f9141"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-AppModule-b2d3dc85fa4f3ec02eaac48f2016075d43874ae7bc26854ebd0d5979e10b73a4bb5a8c7b46bc3ce4c006bc5852d3cedc68019906a7d3322e1365a4635d4f9141"'
                                        : 'data-bs-target="#xs-injectables-links-module-AppModule-b2d3dc85fa4f3ec02eaac48f2016075d43874ae7bc26854ebd0d5979e10b73a4bb5a8c7b46bc3ce4c006bc5852d3cedc68019906a7d3322e1365a4635d4f9141"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AppModule-b2d3dc85fa4f3ec02eaac48f2016075d43874ae7bc26854ebd0d5979e10b73a4bb5a8c7b46bc3ce4c006bc5852d3cedc68019906a7d3322e1365a4635d4f9141"'
                                        : 'id="xs-injectables-links-module-AppModule-b2d3dc85fa4f3ec02eaac48f2016075d43874ae7bc26854ebd0d5979e10b73a4bb5a8c7b46bc3ce4c006bc5852d3cedc68019906a7d3322e1365a4635d4f9141"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-bs-target="#controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                                            : 'data-bs-target="#xs-controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                                            : 'id="xs-controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                                        : 'data-bs-target="#xs-injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                                        : 'id="xs-injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-bs-target="#controllers-links-module-PostsModule-51ebec704049802c327607beef8ab65cf7b8546166b263bbbb7a241232868d77afa4efc302dd7ed4eeb31562ec51415ab96d5a94e54bbae612860a1872f1fde7"'
                                            : 'data-bs-target="#xs-controllers-links-module-PostsModule-51ebec704049802c327607beef8ab65cf7b8546166b263bbbb7a241232868d77afa4efc302dd7ed4eeb31562ec51415ab96d5a94e54bbae612860a1872f1fde7"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="controllers-links-module-PostsModule-51ebec704049802c327607beef8ab65cf7b8546166b263bbbb7a241232868d77afa4efc302dd7ed4eeb31562ec51415ab96d5a94e54bbae612860a1872f1fde7"'
                                            : 'id="xs-controllers-links-module-PostsModule-51ebec704049802c327607beef8ab65cf7b8546166b263bbbb7a241232868d77afa4efc302dd7ed4eeb31562ec51415ab96d5a94e54bbae612860a1872f1fde7"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-PostsModule-51ebec704049802c327607beef8ab65cf7b8546166b263bbbb7a241232868d77afa4efc302dd7ed4eeb31562ec51415ab96d5a94e54bbae612860a1872f1fde7"'
                                        : 'data-bs-target="#xs-injectables-links-module-PostsModule-51ebec704049802c327607beef8ab65cf7b8546166b263bbbb7a241232868d77afa4efc302dd7ed4eeb31562ec51415ab96d5a94e54bbae612860a1872f1fde7"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-PostsModule-51ebec704049802c327607beef8ab65cf7b8546166b263bbbb7a241232868d77afa4efc302dd7ed4eeb31562ec51415ab96d5a94e54bbae612860a1872f1fde7"'
                                        : 'id="xs-injectables-links-module-PostsModule-51ebec704049802c327607beef8ab65cf7b8546166b263bbbb7a241232868d77afa4efc302dd7ed4eeb31562ec51415ab96d5a94e54bbae612860a1872f1fde7"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-bs-target="#controllers-links-module-UsersModule-85c704b95795aeacf655e4cae193d8c75dc351173ce37946626f65784e860839cb1719463d5acf42a3b18fe79a83893e155811a4487e864a33e916bd96234d95"'
                                            : 'data-bs-target="#xs-controllers-links-module-UsersModule-85c704b95795aeacf655e4cae193d8c75dc351173ce37946626f65784e860839cb1719463d5acf42a3b18fe79a83893e155811a4487e864a33e916bd96234d95"'
                                        }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="controllers-links-module-UsersModule-85c704b95795aeacf655e4cae193d8c75dc351173ce37946626f65784e860839cb1719463d5acf42a3b18fe79a83893e155811a4487e864a33e916bd96234d95"'
                                            : 'id="xs-controllers-links-module-UsersModule-85c704b95795aeacf655e4cae193d8c75dc351173ce37946626f65784e860839cb1719463d5acf42a3b18fe79a83893e155811a4487e864a33e916bd96234d95"'
                                        }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                                      isNormalMode
                                        ? 'data-bs-target="#injectables-links-module-UsersModule-85c704b95795aeacf655e4cae193d8c75dc351173ce37946626f65784e860839cb1719463d5acf42a3b18fe79a83893e155811a4487e864a33e916bd96234d95"'
                                        : 'data-bs-target="#xs-injectables-links-module-UsersModule-85c704b95795aeacf655e4cae193d8c75dc351173ce37946626f65784e860839cb1719463d5acf42a3b18fe79a83893e155811a4487e864a33e916bd96234d95"'
                                    }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-UsersModule-85c704b95795aeacf655e4cae193d8c75dc351173ce37946626f65784e860839cb1719463d5acf42a3b18fe79a83893e155811a4487e864a33e916bd96234d95"'
                                        : 'id="xs-injectables-links-module-UsersModule-85c704b95795aeacf655e4cae193d8c75dc351173ce37946626f65784e860839cb1719463d5acf42a3b18fe79a83893e155811a4487e864a33e916bd96234d95"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#controllers-links"'
                                : 'data-bs-target="#xs-controllers-links"'
                            }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"'}>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                          isNormalMode
                            ? 'data-bs-target="#classes-links"'
                            : 'data-bs-target="#xs-classes-links"'
                        }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"'}>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                              isNormalMode
                                ? 'data-bs-target="#injectables-links"'
                                : 'data-bs-target="#xs-injectables-links"'
                            }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"'}>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${
                          isNormalMode
                            ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"'
                        }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"'}>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
      this.innerHTML = tp.strings;
    }
  },
);
