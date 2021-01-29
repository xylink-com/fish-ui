(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{NXf4:function(e,n,t){"use strict";t.r(n);var a=t("wx14"),l=t("q1tI"),s=t.n(l),r=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(r),c=t("5Yjd"),i=t.n(c),u=s.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("2bmL")),l=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(l)}));n["default"]=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"markdown"},s.a.createElement("h1",{id:"button"},s.a.createElement("a",{"aria-hidden":"true",href:"#button"},s.a.createElement("span",{className:"icon icon-link"})),"Button"),s.a.createElement("h2",{id:"examples"},s.a.createElement("a",{"aria-hidden":"true",href:"#examples"},s.a.createElement("span",{className:"icon icon-link"})),"Examples")),s.a.createElement(i.a,Object(a["a"])({source:{tsx:"import { BasicButton } from '../Button.stories';\nexport default () => <BasicButton />;",jsx:"import { BasicButton } from '../Button.stories';\n\nexport default () => <BasicButton />;\n"}},{path:"/_demos/basic",title:"Basic Usage",desc:'<div class="markdown"><p>Some desc for basic usage.</p></div>',"title.zh-CN":"\u57fa\u7840\u7528\u6cd5","desc.zh-CN":'<div class="markdown"><p>\u57fa\u7840\u7528\u6cd5\u7684\u63cf\u8ff0\u3002</p></div>',dependencies:{classnames:"2.2.6"},files:{"Button.stories.tsx":{path:"../Button.stories",content:'import React from "react";\nimport Button from "./Button";\n\nexport default {\n    title: "Button"\n};\n\nexport const BasicButton = () => <Button>\u9ed8\u8ba4\u6837\u5f0f</Button>;\n'},"Button.tsx":{path:"./Button",content:'import React from "react";\nimport ButtonProps from "./Button.types";\nimport classnames from "classnames";\nimport { defaultPrefixCls } from "./Button.config";\nimport "./Button.scss";\n\nconst Button: React.FC<ButtonProps> = (props) => {\n  const {\n    className = "",\n    style = {},\n    children,\n    type = "default",\n    size = "middle",\n    shape = "square",\n    ghost = false,\n    disabled = false,\n    block = false,\n    onClick = () => {},\n    icon = <></>,\n    danger = false,\n    tag: Tag = "button",\n    href = "",\n    htmlType = "button",\n    loading = false,\n    target,\n    ...restProps\n  } = props;\n\n  const classes = classnames(\n    className,\n    defaultPrefixCls,\n    `${defaultPrefixCls}-${type}`,\n    `${defaultPrefixCls}-${size}`,\n    `${defaultPrefixCls}-${shape}`,\n    {\n      [`${defaultPrefixCls}-${ghost}`]: ghost,\n      [`${defaultPrefixCls}-${disabled}`]: disabled,\n      [`${defaultPrefixCls}-${block}`]: block,\n      [`${defaultPrefixCls}-${danger}`]: danger,\n      [`${defaultPrefixCls}-${loading}`]: loading,\n    }\n  );\n\n  return (\n    <Tag\n      data-testid="Button"\n      {...restProps}\n      style={style}\n      className={classes}\n      onClick={onClick}\n      href={href}\n      type={htmlType}\n    >\n      {icon}\n      <span>{children}</span>\n    </Tag>\n  );\n};\n\nButton.displayName = "Button";\nexport default Button;\n'},"Button.config.ts":{path:"./Button.config",content:'export const defaultPrefixCls = "xy-btn";\n'},"Button.scss":{path:"./Button.scss",content:'@import "src/theme.scss";\n\n$defaultPrefixCls: "xy-btn";\n\n.#{defaultPrefixCls} {\n  & {\n  }\n  &-primary {\n  }\n  &-ghost {\n  }\n  &-dashed {\n  }\n  &-link {\n  }\n  &-text {\n  }\n  &-default {\n  }\n  &-large {\n  }\n  &-small {\n  }\n  &-circle {\n  }\n  &-round {\n  }\n  &-square {\n  }\n  &-ghost {\n  }\n  &-disabled {\n  }\n  &-block {\n  }\n  &-loading {\n  }\n}\n'}}}),s.a.createElement(u,null)),s.a.createElement("div",{className:"markdown"},s.a.createElement("h2",{id:"usage"},s.a.createElement("a",{"aria-hidden":"true",href:"#usage"},s.a.createElement("span",{className:"icon icon-link"})),"Usage"),s.a.createElement(o.a,{code:"",lang:"ts"}),s.a.createElement("h3",{id:"params"},s.a.createElement("a",{"aria-hidden":"true",href:"#params"},s.a.createElement("span",{className:"icon icon-link"})),"Params"),s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Property"),s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Default"))),s.a.createElement("tbody",null)),s.a.createElement("h3",{id:"result"},s.a.createElement("a",{"aria-hidden":"true",href:"#result"},s.a.createElement("span",{className:"icon icon-link"})),"Result"),s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Property"),s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Type"))),s.a.createElement("tbody",null)),s.a.createElement("h3",{id:"types"},s.a.createElement("a",{"aria-hidden":"true",href:"#types"},s.a.createElement("span",{className:"icon icon-link"})),"Types"),s.a.createElement(o.a,{code:"",lang:"ts"}),s.a.createElement("h3",{id:"workflow"},s.a.createElement("a",{"aria-hidden":"true",href:"#workflow"},s.a.createElement("span",{className:"icon icon-link"})),"WORKFLOW"),s.a.createElement("h4",{id:"tofix"},s.a.createElement("a",{"aria-hidden":"true",href:"#tofix"},s.a.createElement("span",{className:"icon icon-link"})),"TOFIX"),s.a.createElement("h4",{id:"todo"},s.a.createElement("a",{"aria-hidden":"true",href:"#todo"},s.a.createElement("span",{className:"icon icon-link"})),"TODO")))}},TqRt:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t}}]);