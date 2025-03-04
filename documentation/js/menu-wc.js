'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
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
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-f42e285df2301ac93ab0d064f2e571a65dd1a9ee1e46f3cc1caf8348645fd459e1c2b9eba169a7ca0910c7cdccefd010620d639e27f94e5765b13366b186e6ff"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f42e285df2301ac93ab0d064f2e571a65dd1a9ee1e46f3cc1caf8348645fd459e1c2b9eba169a7ca0910c7cdccefd010620d639e27f94e5765b13366b186e6ff"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f42e285df2301ac93ab0d064f2e571a65dd1a9ee1e46f3cc1caf8348645fd459e1c2b9eba169a7ca0910c7cdccefd010620d639e27f94e5765b13366b186e6ff"' :
                                            'id="xs-controllers-links-module-AppModule-f42e285df2301ac93ab0d064f2e571a65dd1a9ee1e46f3cc1caf8348645fd459e1c2b9eba169a7ca0910c7cdccefd010620d639e27f94e5765b13366b186e6ff"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-f42e285df2301ac93ab0d064f2e571a65dd1a9ee1e46f3cc1caf8348645fd459e1c2b9eba169a7ca0910c7cdccefd010620d639e27f94e5765b13366b186e6ff"' : 'data-bs-target="#xs-injectables-links-module-AppModule-f42e285df2301ac93ab0d064f2e571a65dd1a9ee1e46f3cc1caf8348645fd459e1c2b9eba169a7ca0910c7cdccefd010620d639e27f94e5765b13366b186e6ff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f42e285df2301ac93ab0d064f2e571a65dd1a9ee1e46f3cc1caf8348645fd459e1c2b9eba169a7ca0910c7cdccefd010620d639e27f94e5765b13366b186e6ff"' :
                                        'id="xs-injectables-links-module-AppModule-f42e285df2301ac93ab0d064f2e571a65dd1a9ee1e46f3cc1caf8348645fd459e1c2b9eba169a7ca0910c7cdccefd010620d639e27f94e5765b13366b186e6ff"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"' :
                                            'id="xs-controllers-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"' :
                                        'id="xs-injectables-links-module-AuthModule-2f815b56ba1602203441450683b7aff0d05d7870e374e00985bb397d74c1f05e1c14a7672783f212242ca479a328d0ffd6da2393eba9566f2e4a4e427e5f7221"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-78ffbb5b8cb58ad9c0b5e7fc8c85021a76be0f02c59a58cdb124b33642d588efc359dd16a0f7e4f78d11050f6aafb97939c0f41bb6bac357a326d0773c7d5ce0"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"' :
                                            'id="xs-controllers-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"' :
                                        'id="xs-injectables-links-module-PostsModule-277366838178445a6acaebb4ac4e9ee6b01fe918a98fc1170c345356ba0418dbb9062bc94e47b4f74e313c52c144f2dc3517533fbff04ee92d2bdb1692cd0515"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"' :
                                            'id="xs-controllers-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"' :
                                        'id="xs-injectables-links-module-TagsModule-2e1b911d3c95e802ad1c8c16e19955e31aa1137761a19ff1a4dadec9c29355403d0739360f0c37540259fd4eaccca391e583afa0ae891af09c14b1309a949b47"' }>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-1aee92cbce3096d2e3e4674464727a3ff09508e14e7e79b6c4211603929e0d5c8222d99655bfd61b79e42c1a33834df10d166c4212a72fec1b8830ea85d40c28"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-1aee92cbce3096d2e3e4674464727a3ff09508e14e7e79b6c4211603929e0d5c8222d99655bfd61b79e42c1a33834df10d166c4212a72fec1b8830ea85d40c28"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-1aee92cbce3096d2e3e4674464727a3ff09508e14e7e79b6c4211603929e0d5c8222d99655bfd61b79e42c1a33834df10d166c4212a72fec1b8830ea85d40c28"' :
                                            'id="xs-controllers-links-module-UsersModule-1aee92cbce3096d2e3e4674464727a3ff09508e14e7e79b6c4211603929e0d5c8222d99655bfd61b79e42c1a33834df10d166c4212a72fec1b8830ea85d40c28"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-1aee92cbce3096d2e3e4674464727a3ff09508e14e7e79b6c4211603929e0d5c8222d99655bfd61b79e42c1a33834df10d166c4212a72fec1b8830ea85d40c28"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-1aee92cbce3096d2e3e4674464727a3ff09508e14e7e79b6c4211603929e0d5c8222d99655bfd61b79e42c1a33834df10d166c4212a72fec1b8830ea85d40c28"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-1aee92cbce3096d2e3e4674464727a3ff09508e14e7e79b6c4211603929e0d5c8222d99655bfd61b79e42c1a33834df10d166c4212a72fec1b8830ea85d40c28"' :
                                        'id="xs-injectables-links-module-UsersModule-1aee92cbce3096d2e3e4674464727a3ff09508e14e7e79b6c4211603929e0d5c8222d99655bfd61b79e42c1a33834df10d166c4212a72fec1b8830ea85d40c28"' }>
                                        <li class="link">
                                            <a href="injectables/UsersCreateManyProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersCreateManyProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateManyUsersDto.html" data-type="entity-link" >CreateManyUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
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
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagsService.html" data-type="entity-link" >TagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersCreateManyProvider.html" data-type="entity-link" >UsersCreateManyProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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
});