(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),s=n(6),o=(n(0),n(176)),r={id:"getting-started",title:"Getting started",layout:"Guide",order:2},c={id:"getting-started",title:"Getting started",description:"What is a build process?",source:"@site/docs/getting-started.md",permalink:"/docs/getting-started",editUrl:"https://github.com/cssnano/cssnano/edit/master/website/docs/getting-started.md",lastUpdatedBy:"Anix",lastUpdatedAt:1597678403,sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/Introduction"},next:{title:"Config Files",permalink:"/docs/config-file"}},i=[{value:"What is a build process?",id:"what-is-a-build-process",children:[]},{value:"Installing Node.js &amp; npm",id:"installing-nodejs--npm",children:[]},{value:"Using PostCSS CLI",id:"using-postcss-cli",children:[]},{value:"Alternatives to using the CLI",id:"alternatives-to-using-the-cli",children:[{value:"Grunt",id:"grunt",children:[]},{value:"Gulp",id:"gulp",children:[]},{value:"Webpack",id:"webpack",children:[]},{value:"Others",id:"others",children:[]}]}],l={rightToc:i};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-a-build-process"},"What is a build process?"),Object(o.b)("p",null,"A build process is a sequence of tasks, usually automated, that you run each\ntime that you want to deploy a new release of your application. cssnano fits\ninto this build process as a tool that should be run on your development CSS,\nand in turn will create compressed production assets. These are then uploaded\nto your production server or CDN."),Object(o.b)("p",null,"There are a number of different ways that you can compose a build process; we\nrecommend using the command line, but you might also want to consider an\nabstraction such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://gulpjs.com/"}),"gulp"),", especially for more complex\nsystems."),Object(o.b)("h2",{id:"installing-nodejs--npm"},"Installing Node.js & npm"),Object(o.b)("p",null,"cssnano is installed using the command line, using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://npmjs.com"}),"npm"),"; so\nyou will need to use an application such as Terminal or the Windows Command\nPrompt. If you don't already have Node.js installed, then you'll need to\nfollow these instructions:"),Object(o.b)("p",null,"We require a minimum of Node.js version 6.9.0 & npm 3.10.8 to run, and we\nrecommend that you install ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/creationix/nvm"}),"nvm")," to manage\nyour Node.js versions."),Object(o.b)("p",null,"Alternately, you can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"visit the Node.js website")," and\nfollow the instructions there to install it for your machine."),Object(o.b)("p",null,"Once you have installed Node.js & npm, you can run this command to install\ncssnano into your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install cssnano --save-dev\n")),Object(o.b)("p",null,"Note that for most typical setups, we recommend that you compress your CSS\nduring your deployment step, so that when it is uploaded to your server/CDN\nit is already optimized. In most cases, you should not need to install cssnano\non your web server."),Object(o.b)("h2",{id:"using-postcss-cli"},"Using PostCSS CLI"),Object(o.b)("p",null,"Once you have cssnano installed, you will need a PostCSS runner in order to\nuse it to compress your CSS files. We recommend the PostCSS command line module,\nbut you can use any of the alternatives listed in the next section."),Object(o.b)("p",null,"You can install ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/postcss-cli"}),"PostCSS CLI"),"\nwith this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install postcss-cli --global\n")),Object(o.b)("p",null,"Once you have done this, you will need to configure cssnano by creating a\n",Object(o.b)("inlineCode",{parentName:"p"},"postcss.config.js")," file in the root of your project. This should contain\ncssnano as well as any other ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/postcss/blob/master/site/plugins.md"}),"plugins")," that you might want for your project;\nas an example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n    plugins: [\n        require('cssnano')({\n            preset: 'default',\n        }),\n    ],\n};\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Read more about presets in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"/guides/presets"}),"our presets guide"),".")),Object(o.b)("p",null,"You can now minify your CSS files! Try it out by creating a CSS file in your\nproject named ",Object(o.b)("inlineCode",{parentName:"p"},"input.css"),", with some styles in there. Then, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"postcss input.css > output.css\n")),Object(o.b)("p",null,"You should then see an ",Object(o.b)("inlineCode",{parentName:"p"},"output.css")," with the same styles but compressed!"),Object(o.b)("p",null,"Note that you can also find a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/cssnano/cssnano/tree/master/packages/example-cli-usage"}),"basic example")," in our GitHub repository."),Object(o.b)("h2",{id:"alternatives-to-using-the-cli"},"Alternatives to using the CLI"),Object(o.b)("p",null,"You can also use any of the other available PostCSS runners to manage your\nCSS compression; these are the most common."),Object(o.b)("h3",{id:"grunt"},"Grunt"),Object(o.b)("p",null,"Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nDmitry/grunt-postcss"}),"grunt-postcss"),"."),Object(o.b)("h3",{id:"gulp"},"Gulp"),Object(o.b)("p",null,"Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/gulp-postcss"}),"gulp-postcss"),"."),Object(o.b)("h3",{id:"webpack"},"Webpack"),Object(o.b)("p",null,"You can use cssnano explicitly with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/postcss-loader"}),"postcss-loader"),"."),Object(o.b)("p",null,"You can also use the cssnano with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin"}),"webpack plugin")),Object(o.b)("h3",{id:"others"},"Others"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/postcss#usage"}),"PostCSS documentation")," for\nother available runners."))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||b[d]||o;return n?s.a.createElement(m,c(c({ref:t},l),{},{components:n})):s.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);