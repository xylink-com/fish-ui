// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/jonsam/Company/Projects/Components/xy-element/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/_demos/basic",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Button__demo__basic' */'../../components/Button/demo/basic.tsx')}),
    "exact": true
  },
  {
    "path": "/_demos/basic-1",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__ContainerWithBar__demo__basic' */'../../components/ContainerWithBar/demo/basic.tsx')}),
    "exact": true
  },
  {
    "path": "/_demos/basic-2",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Icon__demo__basic' */'../../components/Icon/demo/basic.tsx')}),
    "exact": true
  },
  {
    "path": "/_demos/basic-3",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Scroller__demo__basic' */'../../components/Scroller/demo/basic.tsx')}),
    "exact": true
  },
  {
    "path": "/_demos/basic-4",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__VideoPlayer__demo__basic' */'../../components/VideoPlayer/demo/basic.tsx')}),
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"en-US":{"*":[{"path":"/","title":"xy-element","meta":{}}],"/pages":[{"path":"/pages/getting-started","title":"Getting Started","meta":{"order":1}},{"path":"/pages/api","title":"API Standards","meta":{}},{"path":"/pages/faq","title":"FAQ","meta":{}}],"/components":[{"title":"Common","path":"/components/common","meta":{},"children":[{"path":"/components/common/icon","title":"Icon","meta":{}}]},{"title":"DataDisplay","path":"/components/data-display","meta":{},"children":[{"path":"/components/data-display/video-player","title":"VideoPlayer","meta":{}}]},{"title":"Example","path":"/components/example","meta":{},"children":[{"path":"/components/example/button","title":"Button","meta":{}}]},{"title":"Other","path":"/components/other","meta":{},"children":[{"path":"/components/other/container-with-bar","title":"ContainerWithBar","meta":{}},{"path":"/components/other/scroller","title":"Scroller","meta":{}}]}]},"zh-CN":{"*":[{"path":"/zh-CN","title":"xy-element","meta":{}}],"/zh-CN/pages":[{"path":"/zh-CN/pages/getting-started","title":"快速上手","meta":{"order":1}},{"path":"/zh-CN/pages/api","title":"API 规范","meta":{}},{"path":"/zh-CN/pages/faq","title":"FAQ","meta":{}}],"/zh-CN/components":[{"title":"Common","path":"/zh-CN/components/common","meta":{},"children":[{"path":"/zh-CN/components/common/icon","title":"Icon","meta":{}}]},{"title":"DataDisplay","path":"/zh-CN/components/data-display","meta":{},"children":[{"path":"/zh-CN/components/data-display/video-player","title":"VideoPlayer","meta":{}}]},{"title":"Example","path":"/zh-CN/components/example","meta":{},"children":[{"path":"/zh-CN/components/example/button","title":"Button","meta":{}}]},{"title":"Other","path":"/zh-CN/components/other","meta":{},"children":[{"path":"/zh-CN/components/other/container-with-bar","title":"ContainerWithBar","meta":{}},{"path":"/zh-CN/components/other/scroller","title":"Scroller","meta":{}}]}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"中文"}],"navs":{"en-US":[{"path":"/pages","title":"Guide","order":1},{"title":"Components","path":"/components"}],"zh-CN":[{"path":"/zh-CN/pages","title":"指南","order":1},{"title":"Components","path":"/zh-CN/components"}]},"title":"xy-element","logo":"/xy-element/logo.png","mode":"site","repoUrl":"https://github.com/xylink-com/xy-element"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__index.en-US.md' */'../../../guide/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/index.en-US.md",
          "updatedTime": 1607395275000,
          "title": "xy-hooks - React Hooks Library",
          "hero": {
            "title": "a hooks library",
            "desc": "<div class=\"markdown\"><p>Born for React Hooks</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/docs/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png",
              "title": "Rich Collection",
              "desc": "<div class=\"markdown\"><p>xy-hooks contains a large set of essential react hooks, with demos and examples for each one of them.</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png",
              "title": "Detailed Tutorial",
              "desc": "<div class=\"markdown\"><p>Providing tutorials about using hooks in practice. An all-in-one place to learn for pro coders and newcomers.</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png",
              "title": "Ready for Production",
              "desc": "<div class=\"markdown\"><p>Used in hundreds of products with high quality and robustness.</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020-xylink</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Easy to get started",
              "heading": "easy-to-get-started"
            }
          ],
          "locale": "en-US"
        },
        "title": "xy-hooks - React Hooks Library"
      },
      {
        "path": "/zh-CN",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__index.zh-CN.md' */'../../../guide/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/index.zh-CN.md",
          "updatedTime": 1607395275000,
          "title": "xy-hooks - React Hooks Library",
          "hero": {
            "title": "a hooks library",
            "desc": "<div class=\"markdown\"><p>为 React Hooks 而生</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/zh-CN/pages/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png",
              "title": "内容丰富",
              "desc": "<div class=\"markdown\"><p>拥有丰富的自定义 Hooks，每个 Hooks 都有丰富的在线示例供您体验。</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png",
              "title": "完备的教程",
              "desc": "<div class=\"markdown\"><p>包含适合全年龄段的丰富的 React Hooks 教程，想学 React Hooks，来这里就够了。</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png",
              "title": "生产可用",
              "desc": "<div class=\"markdown\"><p>已经过足够大量的线上系统的考验及打磨，健壮性值得信赖。</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020-xylink</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "轻松上手",
              "heading": "轻松上手"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "xy-hooks - React Hooks Library"
      },
      {
        "path": "/pages/api",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__api.en-US.md' */'../../../guide/pages/api.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/api.en-US.md",
          "updatedTime": 1607668280000,
          "slugs": [
            {
              "depth": 1,
              "value": "API Standards",
              "heading": "api-standards"
            },
            {
              "depth": 2,
              "value": "Return value",
              "heading": "return-value"
            },
            {
              "depth": 3,
              "value": "1. no output",
              "heading": "1-no-output"
            },
            {
              "depth": 3,
              "value": "2. value type",
              "heading": "2-value-type"
            },
            {
              "depth": 3,
              "value": "3. value setValue type",
              "heading": "3-value-setvalue-type"
            },
            {
              "depth": 3,
              "value": "4. value actions type",
              "heading": "4-value-actions-type"
            },
            {
              "depth": 3,
              "value": "5. values type",
              "heading": "5-values-type"
            },
            {
              "depth": 3,
              "value": "6. values actions type",
              "heading": "6-values-actions-type"
            },
            {
              "depth": 2,
              "value": "Parameter",
              "heading": "parameter"
            },
            {
              "depth": 3,
              "value": "1. No parameters",
              "heading": "1-no-parameters"
            },
            {
              "depth": 3,
              "value": "2. Single input",
              "heading": "2-single-input"
            },
            {
              "depth": 3,
              "value": "3. Multiple required parameters",
              "heading": "3-multiple-required-parameters"
            },
            {
              "depth": 3,
              "value": "4. Many non-required parameters",
              "heading": "4-many-non-required-parameters"
            },
            {
              "depth": 3,
              "value": "5. Required parameters + non-required parameters",
              "heading": "5-required-parameters--non-required-parameters"
            }
          ],
          "title": "API Standards",
          "locale": "en-US",
          "nav": {
            "path": "/pages",
            "title": "Guide"
          }
        },
        "title": "API Standards"
      },
      {
        "path": "/zh-CN/pages/api",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__api.zh-CN.md' */'../../../guide/pages/api.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/api.zh-CN.md",
          "updatedTime": 1607668280000,
          "slugs": [
            {
              "depth": 1,
              "value": "API 规范",
              "heading": "api-规范"
            },
            {
              "depth": 2,
              "value": "返回值",
              "heading": "返回值"
            },
            {
              "depth": 3,
              "value": "1. 无输出",
              "heading": "1-无输出"
            },
            {
              "depth": 3,
              "value": "2. value 型",
              "heading": "2-value-型"
            },
            {
              "depth": 3,
              "value": "3. value setValue 型",
              "heading": "3-value-setvalue-型"
            },
            {
              "depth": 3,
              "value": "4. value actions 型",
              "heading": "4-value-actions-型"
            },
            {
              "depth": 3,
              "value": "5. values 型",
              "heading": "5-values-型"
            },
            {
              "depth": 3,
              "value": "6. values actions 型",
              "heading": "6-values-actions-型"
            },
            {
              "depth": 2,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 3,
              "value": "1. 无参数",
              "heading": "1-无参数"
            },
            {
              "depth": 3,
              "value": "2. 单输入",
              "heading": "2-单输入"
            },
            {
              "depth": 3,
              "value": "3. 多必选参数",
              "heading": "3-多必选参数"
            },
            {
              "depth": 3,
              "value": "4. 多非必选参数",
              "heading": "4-多非必选参数"
            },
            {
              "depth": 3,
              "value": "5. 必选参数 + 非必选参数",
              "heading": "5-必选参数--非必选参数"
            }
          ],
          "title": "API 规范",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/pages",
            "title": "指南"
          }
        },
        "title": "API 规范"
      },
      {
        "path": "/pages/faq",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__faq.en-US.md' */'../../../guide/pages/faq.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/faq.en-US.md",
          "updatedTime": 1607668280000,
          "slugs": [
            {
              "depth": 1,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "I only want to use one or two of them, but all the hooks are compiled after the project is compiled.",
              "heading": "i-only-want-to-use-one-or-two-of-them-but-all-the-hooks-are-compiled-after-the-project-is-compiled"
            },
            {
              "depth": 3,
              "value": "Browser compatibilty",
              "heading": "browser-compatibilty"
            }
          ],
          "title": "FAQ",
          "locale": "en-US",
          "nav": {
            "path": "/pages",
            "title": "Guide"
          }
        },
        "title": "FAQ"
      },
      {
        "path": "/zh-CN/pages/faq",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__faq.zh-CN.md' */'../../../guide/pages/faq.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/faq.zh-CN.md",
          "updatedTime": 1607668280000,
          "slugs": [
            {
              "depth": 1,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "我只想用其中一两个 Hooks，但是项目编译后所有的 Hooks 都编译进去了。",
              "heading": "我只想用其中一两个-hooks，但是项目编译后所有的-hooks-都编译进去了。"
            },
            {
              "depth": 3,
              "value": "浏览器兼容性",
              "heading": "浏览器兼容性"
            }
          ],
          "title": "FAQ",
          "locale": "zh-CN",
          "nav": {
            "path": "/zh-CN/pages",
            "title": "指南"
          }
        },
        "title": "FAQ"
      },
      {
        "path": "/pages/getting-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__getting-started.en-US.md' */'../../../guide/pages/getting-started.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/getting-started.en-US.md",
          "updatedTime": 1607659159000,
          "order": 1,
          "nav": {
            "title": "Guide",
            "order": 1,
            "path": "/pages"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Getting Started",
              "heading": "getting-started"
            },
            {
              "depth": 2,
              "value": "Development Guide",
              "heading": "development-guide"
            }
          ],
          "title": "Getting Started",
          "locale": "en-US"
        },
        "title": "Getting Started"
      },
      {
        "path": "/zh-CN/pages/getting-started",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__pages__getting-started.zh-CN.md' */'../../../guide/pages/getting-started.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/pages/getting-started.zh-CN.md",
          "updatedTime": 1607658257000,
          "order": 1,
          "nav": {
            "title": "指南",
            "order": 1,
            "path": "/zh-CN/pages"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "开发指南",
              "heading": "开发指南"
            }
          ],
          "title": "快速上手",
          "locale": "zh-CN"
        },
        "title": "快速上手"
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.en-US.md' */'../../README.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/README.en-US.md",
          "updatedTime": 1607397942000,
          "slugs": [
            {
              "depth": 1,
              "value": "xy-element",
              "heading": "xy-element"
            },
            {
              "depth": 2,
              "value": "run",
              "heading": "run"
            },
            {
              "depth": 2,
              "value": "build",
              "heading": "build"
            },
            {
              "depth": 2,
              "value": "test",
              "heading": "test"
            },
            {
              "depth": 2,
              "value": "generate component",
              "heading": "generate-component"
            },
            {
              "depth": 2,
              "value": "widget list",
              "heading": "widget-list"
            }
          ],
          "title": "xy-element",
          "locale": "en-US"
        },
        "title": "xy-element"
      },
      {
        "path": "/zh-CN",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.zh-CN.md' */'../../README.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/README.zh-CN.md",
          "updatedTime": 1607397942000,
          "slugs": [
            {
              "depth": 1,
              "value": "xy-element",
              "heading": "xy-element"
            },
            {
              "depth": 2,
              "value": "run",
              "heading": "run"
            },
            {
              "depth": 2,
              "value": "build",
              "heading": "build"
            },
            {
              "depth": 2,
              "value": "test",
              "heading": "test"
            },
            {
              "depth": 2,
              "value": "generate component",
              "heading": "generate-component"
            },
            {
              "depth": 2,
              "value": "widget list",
              "heading": "widget-list"
            }
          ],
          "title": "xy-element",
          "locale": "zh-CN"
        },
        "title": "xy-element"
      },
      {
        "path": "/components/example/button",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Button__index.en-US.md' */'../../components/Button/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/Button/index.en-US.md",
          "updatedTime": 1609921953000,
          "title": "Button",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Example",
            "path": "/components/example"
          },
          "legacy": "/example/component-name",
          "slugs": [
            {
              "depth": 1,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Types",
              "heading": "types"
            },
            {
              "depth": 3,
              "value": "WORKFLOW",
              "heading": "workflow"
            },
            {
              "depth": 4,
              "value": "TOFIX",
              "heading": "tofix"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "en-US"
        },
        "title": "Button"
      },
      {
        "path": "/zh-CN/components/example/button",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Button__index.zh-CN.md' */'../../components/Button/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/Button/index.zh-CN.md",
          "updatedTime": 1609921953000,
          "title": "Button",
          "nav": {
            "title": "Components",
            "path": "/zh-CN/components"
          },
          "group": {
            "title": "Example",
            "path": "/zh-CN/components/example"
          },
          "legacy": "/example/component-name",
          "slugs": [
            {
              "depth": 1,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "用法",
              "heading": "用法"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 3,
              "value": "返回值",
              "heading": "返回值"
            },
            {
              "depth": 3,
              "value": "接口与类型",
              "heading": "接口与类型"
            },
            {
              "depth": 3,
              "value": "工作流",
              "heading": "工作流"
            },
            {
              "depth": 4,
              "value": "TOFIX",
              "heading": "tofix"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Button"
      },
      {
        "path": "/components/other/container-with-bar",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__ContainerWithBar__index.en-US.md' */'../../components/ContainerWithBar/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/ContainerWithBar/index.en-US.md",
          "updatedTime": 1609921953000,
          "title": "ContainerWithBar",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Other",
            "path": "/components/other"
          },
          "legacy": "/other/container-with-bar",
          "slugs": [
            {
              "depth": 1,
              "value": "ContainerWithBar",
              "heading": "containerwithbar"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Types",
              "heading": "types"
            },
            {
              "depth": 3,
              "value": "WORKFLOW",
              "heading": "workflow"
            },
            {
              "depth": 4,
              "value": "TOFIX",
              "heading": "tofix"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "en-US"
        },
        "title": "ContainerWithBar"
      },
      {
        "path": "/zh-CN/components/other/container-with-bar",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__ContainerWithBar__index.zh-CN.md' */'../../components/ContainerWithBar/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/ContainerWithBar/index.zh-CN.md",
          "updatedTime": 1609921953000,
          "title": "ContainerWithBar",
          "nav": {
            "title": "Components",
            "path": "/zh-CN/components"
          },
          "group": {
            "title": "Other",
            "path": "/zh-CN/components/other"
          },
          "legacy": "/other/container-with-bar",
          "slugs": [
            {
              "depth": 1,
              "value": "ContainerWithBar",
              "heading": "containerwithbar"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Types",
              "heading": "types"
            },
            {
              "depth": 3,
              "value": "WORKFLOW",
              "heading": "workflow"
            },
            {
              "depth": 4,
              "value": "TOFIX",
              "heading": "tofix"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "ContainerWithBar"
      },
      {
        "path": "/components/common/icon",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Icon__index.en-US.md' */'../../components/Icon/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/Icon/index.en-US.md",
          "updatedTime": 1609921953000,
          "title": "Icon",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Common",
            "path": "/components/common"
          },
          "legacy": "/common/icon",
          "slugs": [
            {
              "depth": 1,
              "value": "Icon",
              "heading": "icon"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Types",
              "heading": "types"
            },
            {
              "depth": 3,
              "value": "WORKFLOW",
              "heading": "workflow"
            },
            {
              "depth": 4,
              "value": "TOFIX",
              "heading": "tofix"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "en-US"
        },
        "title": "Icon"
      },
      {
        "path": "/zh-CN/components/common/icon",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Icon__index.zh-CN.md' */'../../components/Icon/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/Icon/index.zh-CN.md",
          "updatedTime": 1609921953000,
          "title": "Icon",
          "nav": {
            "title": "Components",
            "path": "/zh-CN/components"
          },
          "group": {
            "title": "Common",
            "path": "/zh-CN/components/common"
          },
          "legacy": "/common/icon",
          "slugs": [
            {
              "depth": 1,
              "value": "Icon",
              "heading": "icon"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "用法",
              "heading": "用法"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 3,
              "value": "返回值",
              "heading": "返回值"
            },
            {
              "depth": 3,
              "value": "接口与类型",
              "heading": "接口与类型"
            },
            {
              "depth": 3,
              "value": "工作流",
              "heading": "工作流"
            },
            {
              "depth": 4,
              "value": "TOFIX",
              "heading": "tofix"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Icon"
      },
      {
        "path": "/components/other/scroller",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Scroller__index.en-US.md' */'../../components/Scroller/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/Scroller/index.en-US.md",
          "updatedTime": 1609921953000,
          "title": "Scroller",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Other",
            "path": "/components/other"
          },
          "legacy": "/other/scroller",
          "slugs": [
            {
              "depth": 1,
              "value": "Scroller",
              "heading": "scroller"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Types",
              "heading": "types"
            },
            {
              "depth": 3,
              "value": "WORKFLOW",
              "heading": "workflow"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "en-US"
        },
        "title": "Scroller"
      },
      {
        "path": "/components/data-display/video-player",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__VideoPlayer__index.en-US.md' */'../../components/VideoPlayer/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/VideoPlayer/index.en-US.md",
          "updatedTime": 1609926525000,
          "title": "VideoPlayer",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "DataDisplay",
            "path": "/components/data-display"
          },
          "legacy": "/data-display/video-player",
          "slugs": [
            {
              "depth": 1,
              "value": "VideoPlayer",
              "heading": "videoplayer"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 4,
              "value": "VideoPlayerProps",
              "heading": "videoplayerprops"
            },
            {
              "depth": 4,
              "value": "IPanelOptions",
              "heading": "ipaneloptions"
            },
            {
              "depth": 4,
              "value": "HidePanelOption",
              "heading": "hidepaneloption"
            },
            {
              "depth": 4,
              "value": "ISource",
              "heading": "isource"
            },
            {
              "depth": 3,
              "value": "WORKFLOW",
              "heading": "workflow"
            },
            {
              "depth": 4,
              "value": "TOFIX",
              "heading": "tofix"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "en-US"
        },
        "title": "VideoPlayer"
      },
      {
        "path": "/zh-CN/components/data-display/video-player",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__VideoPlayer__index.zh-CN.md' */'../../components/VideoPlayer/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/VideoPlayer/index.zh-CN.md",
          "updatedTime": 1609926525000,
          "title": "VideoPlayer",
          "nav": {
            "title": "Components",
            "path": "/zh-CN/components"
          },
          "group": {
            "title": "DataDisplay",
            "path": "/zh-CN/components/data-display"
          },
          "legacy": "/data-display/video-player",
          "slugs": [
            {
              "depth": 1,
              "value": "VideoPlayer",
              "heading": "videoplayer"
            },
            {
              "depth": 2,
              "value": "示例",
              "heading": "示例"
            },
            {
              "depth": 2,
              "value": "用法",
              "heading": "用法"
            },
            {
              "depth": 3,
              "value": "参数",
              "heading": "参数"
            },
            {
              "depth": 3,
              "value": "返回值",
              "heading": "返回值"
            },
            {
              "depth": 3,
              "value": "工作流",
              "heading": "工作流"
            },
            {
              "depth": 4,
              "value": "TOFIX",
              "heading": "tofix"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "VideoPlayer"
      },
      {
        "path": "/zh-CN/components/other/scroller",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Scroller__index.en-US.md' */'../../components/Scroller/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/Scroller/index.en-US.md",
          "updatedTime": 1609921953000,
          "title": "Scroller",
          "nav": {
            "title": "Components",
            "path": "/zh-CN/components"
          },
          "group": {
            "title": "Other",
            "path": "/zh-CN/components/other"
          },
          "legacy": "/other/scroller",
          "slugs": [
            {
              "depth": 1,
              "value": "Scroller",
              "heading": "scroller"
            },
            {
              "depth": 2,
              "value": "Examples",
              "heading": "examples"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "Params",
              "heading": "params"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Types",
              "heading": "types"
            },
            {
              "depth": 3,
              "value": "WORKFLOW",
              "heading": "workflow"
            },
            {
              "depth": 4,
              "value": "TODO",
              "heading": "todo"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Scroller"
      },
      {
        "path": "/pages",
        "meta": {},
        "exact": true,
        "redirect": "/pages/getting-started"
      },
      {
        "path": "/zh-CN/pages",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/pages/getting-started"
      },
      {
        "path": "/components/example",
        "meta": {},
        "exact": true,
        "redirect": "/components/example/button"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/common"
      },
      {
        "path": "/example/component-name",
        "exact": true,
        "redirect": "/zh-CN/components/example/button"
      },
      {
        "path": "/zh-CN/components/example",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/example/button"
      },
      {
        "path": "/zh-CN/components",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/common"
      },
      {
        "path": "/components/other",
        "meta": {},
        "exact": true,
        "redirect": "/components/other/container-with-bar"
      },
      {
        "path": "/other/container-with-bar",
        "exact": true,
        "redirect": "/zh-CN/components/other/container-with-bar"
      },
      {
        "path": "/zh-CN/components/other",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/other/container-with-bar"
      },
      {
        "path": "/components/common",
        "meta": {},
        "exact": true,
        "redirect": "/components/common/icon"
      },
      {
        "path": "/common/icon",
        "exact": true,
        "redirect": "/zh-CN/components/common/icon"
      },
      {
        "path": "/zh-CN/components/common",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/common/icon"
      },
      {
        "path": "/other/scroller",
        "exact": true,
        "redirect": "/zh-CN/components/other/scroller"
      },
      {
        "path": "/components/data-display",
        "meta": {},
        "exact": true,
        "redirect": "/components/data-display/video-player"
      },
      {
        "path": "/data-display/video-player",
        "exact": true,
        "redirect": "/zh-CN/components/data-display/video-player"
      },
      {
        "path": "/zh-CN/components/data-display",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/data-display/video-player"
      }
    ],
    "title": "xy-element"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
