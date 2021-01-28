(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{TqRt:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},kK2y:function(e,n,t){"use strict";t.r(n);var l=t("wx14"),a=t("q1tI"),r=t.n(a),o=(t("B2uJ"),t("+su7"),t("qOys")),s=t.n(o),c=t("5Yjd"),i=t.n(c),d=r.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),l=e(t("d009")),a=function(){return n["default"].createElement(l["default"],null)};return n["default"].createElement(a)}));n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"scroller"},r.a.createElement("a",{"aria-hidden":"true",href:"#scroller"},r.a.createElement("span",{className:"icon icon-link"})),"Scroller"),r.a.createElement("p",null,"A scroll container to load more data when scroll to bottom."),r.a.createElement("h2",{id:"examples"},r.a.createElement("a",{"aria-hidden":"true",href:"#examples"},r.a.createElement("span",{className:"icon icon-link"})),"Examples")),r.a.createElement(i.a,Object(l["a"])({source:{tsx:'import { SimpleScroller } from "../Scroller.stories";\n\nexport default () => <SimpleScroller />;\n',jsx:"import { SimpleScroller } from '../Scroller.stories';\n\nexport default () => <SimpleScroller />;\n"}},{path:"/_demos/basic-3",title:"Basic Usage",desc:'<div class="markdown"><p>Scroll to load more data.</p></div>',"title.zh-CN":"\u57fa\u7840\u7528\u6cd5","desc.zh-CN":'<div class="markdown"><p>\u6eda\u52a8\u4ee5\u52a0\u8f7d\u66f4\u6240\u6570\u636e\u3002</p></div>',dependencies:{classnames:"2.2.6","xy-hooks":"0.0.1-beta.1","lodash.debounce":"4.0.8"},files:{"Scroller.stories.tsx":{path:"../Scroller.stories",content:'import React, { useState, useEffect } from "react";\nimport Scroller from "./Scroller";\n\nexport default {\n  title: "Scroller",\n};\n\nexport const SimpleScroller = () => {\n  const [hasMore, setHasMore] = useState<boolean>(true);\n  const [page, setPage] = useState<number>(0);\n  const [list, setList] = useState<number[]>([]);\n  const [tip, setTip] = useState("loading...");\n\n  const totalPage: number = 6;\n\n  const genNewDate = (): number[] => {\n    let newData = [];\n    for (let i = 0; i < 10; i++) {\n      newData.push(parseInt(1000 * Math.random()));\n    }\n    return newData;\n  };\n\n  useEffect(() => {\n    console.log("==>", hasMore, page, list.length);\n  }, [list.length]);\n\n  const handleLoadMore = () => {\n    setTimeout(() => {\n      // setList([]);\n      setList([...list, ...genNewDate()]);\n    }, 500);\n    if(page >= totalPage - 1) {\n      setHasMore(false);\n    }\n    setPage((page) => ++page);\n  };\n\n  return (\n    <Scroller\n      hasMore={hasMore}\n      loadMore={handleLoadMore}\n      style={{\n        width: 600,\n        height: 500,\n        background: "lightcoral",\n      }}\n      loader={tip}\n      onLoadAll={() => alert("All data loaded!")}\n    >\n      {list.map((data, idx) => (\n        <div\n          style={{\n            width: "100%",\n            height: "60px",\n            display: "flex",\n            alignItems: "center",\n            justifyContent: "center",\n            color: "white",\n            background: "#ccc",\n            border: "5px solid lightblue",\n          }}\n          key={idx}\n        >\n          {data}\n        </div>\n      ))}\n    </Scroller>\n  );\n};\n'},"Scroller.tsx":{path:"./Scroller",content:'import React, { useEffect, useState, useRef, useMemo, forwardRef } from "react";\nimport ScrollerProps from "./Scroller.types";\nimport classnames from "classnames";\nimport { useScrollPlus } from "xy-hooks/packages/hooks";\nimport useDebounceFn from "../../hooks/useDebounceFn";\nimport "./Scroller.scss";\n\nconst Scroller: React.FC<ScrollerProps> = (props) => {\n  const {\n    hasMore = false,\n    loadMore,\n    isReverse = false,\n    loader = "loading",\n    threshold = 250,\n    children,\n    prefixCls = "xy",\n    className = "",\n    style = {},\n    onLoadAll,\n    noData = "No data",\n    innerStyle = {},\n    hiddenScrollBar = false,\n  } = props;\n\n  const [loading, setLoading] = useState<boolean>(false);\n  const scrollerRef = useRef(null);\n  const innerScrollRef = useRef(null);\n  const mountRef = useRef<boolean>(null);\n  let loadingLock: boolean = true;\n  const { leftHeight } = useScrollPlus(scrollerRef.current);\n  const { run } = useDebounceFn(\n    () => {\n      loadMore();\n      setLoading(false);\n      loadingLock = true;\n    },\n    {\n      wait: 500,\n    }\n  );\n\n  // ========== Function ========== //\n\n  // const canScroll = useMemo<boolean>(\n  //   () =>\n  //     scrollerRef.current?.clientHeight < innerScrollRef.current?.scrollHeight,\n  //   [children]\n  // );\n\n  // useEffect(() => {\n  //   if(!canScroll && leftHeight <=0) {\n  //     loadMore();\n  //   }\n  // }, [canScroll])\n\n  useEffect(() => {\n    console.log(\'==>\', {leftHeight});\n    if (hasMore && leftHeight <= threshold) {\n      if (!loading && loadingLock) {\n        setLoading(true);\n        loadingLock = false;\n      }\n      run();\n    }\n  }, [leftHeight]);\n\n  useEffect(() => {\n    if (!hasMore) {\n      onLoadAll?.();\n    }\n  }, [hasMore]);\n\n  const scrollerClasses = classnames(className, `${prefixCls}-scroller`);\n  const innerScrollerClasses = classnames(`${prefixCls}-scroller-inner`, {\n    [`${prefixCls}-hidden-bar`]: hiddenScrollBar,\n  });\n\n  // ========== Render ========== //\n  return (\n    <div\n      className={scrollerClasses}\n      style={{\n        ...style,\n      }}\n      ref={scrollerRef}\n    >\n      <div\n        className={innerScrollerClasses}\n        ref={innerScrollRef}\n        style={{ ...innerStyle }}\n      >\n        {children}\n      </div>\n      {loading && loader}\n    </div>\n  );\n};\n\nexport default Scroller;\n'},"hooks/useDebounceFn.ts":{path:"../../hooks/useDebounceFn",content:"import debounce from 'lodash.debounce';\nimport { useRef } from 'react';\nimport useCreation from './useCreation';\n\nexport interface DebounceOptions {\n  wait?: number;\n  leading?: boolean;\n  trailing?: boolean;\n}\n\ntype Fn = (...args: any) => any;\n\nfunction useDebounceFn<T extends Fn>(fn: T, options?: DebounceOptions) {\n  const fnRef = useRef<T>(fn);\n  fnRef.current = fn;\n\n  const wait = options?.wait ?? 1000;\n\n  const debounced = useCreation(\n    () =>\n      debounce<T>(\n        ((...args: any[]) => {\n          return fnRef.current(...args);\n        }) as T,\n        wait,\n        options,\n      ),\n    [],\n  );\n\n  return {\n    run: (debounced as unknown) as T,\n    cancel: debounced.cancel,\n    flush: debounced.flush,\n  };\n}\n\nexport default useDebounceFn;\n"},"useCreation.ts":{path:"./useCreation",content:"import { useRef } from 'react';\n\nexport default function useCreation<T>(factory: () => T, deps: any[]) {\n  const { current } = useRef({\n    deps,\n    obj: undefined as undefined | T,\n    initialized: false,\n  });\n  if (current.initialized === false || !depsAreSame(current.deps, deps)) {\n    current.deps = deps;\n    current.obj = factory();\n    current.initialized = true;\n  }\n  return current.obj as T;\n}\n\nfunction depsAreSame(oldDeps: any[], deps: any[]): boolean {\n  if (oldDeps === deps) return true;\n  for (const i in oldDeps) {\n    if (oldDeps[i] !== deps[i]) return false;\n  }\n  return true;\n}\n"},"Scroller.scss":{path:"./Scroller.scss",content:'@import "src/theme.scss";\n$prefixCls: "xy";\n\n.xy-scroller{\n  &{\n    overflow: hidden;\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n  &-inner{\n    height: auto;\n    &.#{$prefixCls}-hidden-bar{\n      @include no-scrollbar;\n    }\n  }\n}'}}}),r.a.createElement(d,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"usage"},r.a.createElement("a",{"aria-hidden":"true",href:"#usage"},r.a.createElement("span",{className:"icon icon-link"})),"Usage"),r.a.createElement(s.a,{code:'import Scroller from "xy-element";\n\n<Scroller\n  hasMore={hasMore}\n  loadMore={handleLoadMore}\n  style={{\n    width: 600,\n    height: 500,\n    background: "lightcoral",\n  }}\n  loader={tip}\n  onLoadAll={() => alert("All data loaded!")}\n>\n  {list.map((data, idx) => (\n    <div\n      style={{\n        width: "100%",\n        height: "60px",\n        display: "flex",\n        alignItems: "center",\n        justifyContent: "center",\n        color: "white",\n        background: "#ccc",\n        border: "5px solid lightblue",\n      }}\n      key={idx}\n    >\n      {data}\n    </div>\n  ))}\n</Scroller>\n',lang:"ts"}),r.a.createElement("h3",{id:"params"},r.a.createElement("a",{"aria-hidden":"true",href:"#params"},r.a.createElement("span",{className:"icon icon-link"})),"Params"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Property"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Default"))),r.a.createElement("tbody",null)),r.a.createElement("h3",{id:"result"},r.a.createElement("a",{"aria-hidden":"true",href:"#result"},r.a.createElement("span",{className:"icon icon-link"})),"Result"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Property"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Type"))),r.a.createElement("tbody",null)),r.a.createElement("h3",{id:"types"},r.a.createElement("a",{"aria-hidden":"true",href:"#types"},r.a.createElement("span",{className:"icon icon-link"})),"Types"),r.a.createElement(s.a,{code:"",lang:"ts"}),r.a.createElement("h3",{id:"workflow"},r.a.createElement("a",{"aria-hidden":"true",href:"#workflow"},r.a.createElement("span",{className:"icon icon-link"})),"WORKFLOW"),r.a.createElement("h4",{id:"todo"},r.a.createElement("a",{"aria-hidden":"true",href:"#todo"},r.a.createElement("span",{className:"icon icon-link"})),"TODO"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7ec4\u4ef6\u52a0\u8f7d\u65f6\uff0c\u5982\u679c\u6570\u636e\u52a0\u8f7d\u592a\u5c11\u6ca1\u6709\u89e6\u53d1\u6eda\u52a8\uff0c\u81ea\u52a8\u53d1\u8bf7\u6c42\u76f4\u5230\u80fd\u591f\u6eda\u52a8"),r.a.createElement("li",null,"\u6dfb\u52a0\u65e0\u6570\u636e\u7684\u5904\u7406"))))}}}]);