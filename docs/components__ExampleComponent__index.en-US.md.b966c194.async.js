(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14,12],{"Q+gW":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),m=a("TVjr");t["default"]=()=>o.a.createElement(m["a"],null)},TqRt:function(e,t){function a(e){return e&&e.__esModule?e:{default:e}}e.exports=a},khk0:function(e,t,a){"use strict";a.r(t);var n=a("wx14"),o=a("q1tI"),m=a.n(o),l=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(l),p=a("5Yjd"),c=a.n(p),s=m.a.memo((function(){var e=a("TqRt"),t=e(a("q1tI")),n=e(a("Q+gW")),o=function(){return t["default"].createElement(n["default"],null)};return t["default"].createElement(o)}));t["default"]=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"markdown"},m.a.createElement("h1",{id:"examplecomponent"},m.a.createElement("a",{"aria-hidden":"true",href:"#examplecomponent"},m.a.createElement("span",{className:"icon icon-link"})),"ExampleComponent"),m.a.createElement("h2",{id:"examples"},m.a.createElement("a",{"aria-hidden":"true",href:"#examples"},m.a.createElement("span",{className:"icon icon-link"})),"Examples")),m.a.createElement(c.a,Object(n["a"])({source:{tsx:"import { BasicExampleComponent } from '../ExampleComponent.stories';\nexport default () => <BasicExampleComponent />;",jsx:"import { BasicExampleComponent } from '../ExampleComponent.stories';\n\nexport default () => <BasicExampleComponent />;\n"}},{path:"/_demos/basic-2",title:"Basic Usage",desc:'<div class="markdown"><p>Some desc for basic usage.</p></div>',"title.zh-CN":"\u57fa\u7840\u7528\u6cd5","desc.zh-CN":'<div class="markdown"><p>\u57fa\u7840\u7528\u6cd5\u7684\u63cf\u8ff0\u3002</p></div>',dependencies:{},files:{"ExampleComponent.stories.tsx":{path:"../ExampleComponent.stories",content:'import React from "react";\nimport ExampleComponent from "./ExampleComponent";\n\nexport default {\n    title: "ExampleComponent"\n};\n\nexport const BasicExampleComponent = () => <ExampleComponent title=\'first demo\'/>;\nexport const SecondExampleComponent = () => <ExampleComponent title=\'2th demo\' />;\n'},"ExampleComponent.tsx":{path:"./ExampleComponent",content:'import React from "react";\nimport ExampleComponentProps from "./ExampleComponent.types";\nimport "./ExampleComponent.scss";\n\nconst ExampleComponent: React.FC<ExampleComponentProps> = (props) => {\n  const {title, ...restProps} = props;\n  return (\n    <div data-testid="ExampleComponent" {...restProps} className="">{title}</div> \n  )\n};\n\nExampleComponent.displayName = "ExampleComponent";\nexport default ExampleComponent;\n'},"ExampleComponent.scss":{path:"./ExampleComponent.scss",content:'@import "src/theme.scss";'}}}),m.a.createElement(s,null)),m.a.createElement("div",{className:"markdown"},m.a.createElement("h2",{id:"usage"},m.a.createElement("a",{"aria-hidden":"true",href:"#usage"},m.a.createElement("span",{className:"icon icon-link"})),"Usage"),m.a.createElement(r.a,{code:"",lang:"ts"}),m.a.createElement("h3",{id:"params"},m.a.createElement("a",{"aria-hidden":"true",href:"#params"},m.a.createElement("span",{className:"icon icon-link"})),"Params"),m.a.createElement("table",null,m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Property"),m.a.createElement("th",null,"Description"),m.a.createElement("th",null,"Type"),m.a.createElement("th",null,"Default"))),m.a.createElement("tbody",null)),m.a.createElement("h3",{id:"types"},m.a.createElement("a",{"aria-hidden":"true",href:"#types"},m.a.createElement("span",{className:"icon icon-link"})),"Types"),m.a.createElement(r.a,{code:"",lang:"ts"}),m.a.createElement("h3",{id:"workflow"},m.a.createElement("a",{"aria-hidden":"true",href:"#workflow"},m.a.createElement("span",{className:"icon icon-link"})),"WORKFLOW"),m.a.createElement("h4",{id:"tofix"},m.a.createElement("a",{"aria-hidden":"true",href:"#tofix"},m.a.createElement("span",{className:"icon icon-link"})),"TOFIX"),m.a.createElement("h4",{id:"todo"},m.a.createElement("a",{"aria-hidden":"true",href:"#todo"},m.a.createElement("span",{className:"icon icon-link"})),"TODO")))}}}]);