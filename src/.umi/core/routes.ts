// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/jonsam/Company/Projects/Components/xy-components/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"en-US":{"*":[{"path":"/","title":"xy-hooks - React Hooks Library","meta":{}}],"/pages":[{"path":"/pages/getting-started","title":"Getting Started","meta":{"order":1}},{"path":"/pages/api","title":"API Standards","meta":{}},{"path":"/pages/faq","title":"FAQ","meta":{}}],"/components":[{"title":"Scroll","path":"/components/scroll","meta":{},"children":[{"path":"/components/scroll/container-with-bar","title":"ContainerWithBar","meta":{}},{"path":"/components/scroll/scroller","title":"Scroller","meta":{}}]}]},"zh-CN":{"*":[{"path":"/zh-CN","title":"xy-hooks - React Hooks Library","meta":{}}],"/zh-CN/pages":[{"path":"/zh-CN/pages/getting-started","title":"快速上手","meta":{"order":1}},{"path":"/zh-CN/pages/api","title":"API 规范","meta":{}},{"path":"/zh-CN/pages/faq","title":"FAQ","meta":{}}],"/zh-CN/components":[{"title":"Scroll","path":"/zh-CN/components/scroll","meta":{},"children":[{"path":"/zh-CN/components/scroll/container-with-bar","title":"ContainerWithBar","meta":{}},{"path":"/zh-CN/components/scroll/scroller","title":"Scroller","meta":{}}]}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"中文"}],"navs":{"en-US":[{"path":"/pages","title":"Guide","order":1},{"title":"Components","path":"/components"}],"zh-CN":[{"path":"/zh-CN/pages","title":"指南","order":1},{"title":"Components","path":"/zh-CN/components"}]},"title":"xy-components","logo":"/xy-components/logo.png","mode":"site","repoUrl":"git+"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'guide__index.en-US.md' */'../../../guide/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "guide/index.en-US.md",
          "updatedTime": 1607394618209,
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
          "updatedTime": 1607394618212,
          "title": "xy-hooks - React Hooks Library",
          "hero": {
            "title": "a hooks library",
            "desc": "<div class=\"markdown\"><p>为 React Hooks 而生</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/zh-CN/docs/getting-started"
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
          "updatedTime": 1607394618214,
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
          "updatedTime": 1607394618215,
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
          "updatedTime": 1607394618217,
          "slugs": [
            {
              "depth": 1,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "When I use ahooks, I get an error regeneratorRuntime is not defined, how can I solve it?",
              "heading": "when-i-use-ahooks-i-get-an-error-regeneratorruntime-is-not-defined-how-can-i-solve-it"
            },
            {
              "depth": 3,
              "value": "I only want to use useRequest, but I have to install the entire ahooks?",
              "heading": "i-only-want-to-use-userequest-but-i-have-to-install-the-entire-ahooks"
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
          "updatedTime": 1607394618218,
          "slugs": [
            {
              "depth": 1,
              "value": "FAQ",
              "heading": "faq"
            },
            {
              "depth": 3,
              "value": "当我使用 ahooks 时，报错 regeneratorRuntime is not defined，如何解决？",
              "heading": "当我使用-ahooks-时，报错-regeneratorruntime-is-not-defined，如何解决？"
            },
            {
              "depth": 3,
              "value": "我只想使用 useRquest， 但似乎我必须安装整个 ahooks？",
              "heading": "我只想使用-userquest，-但似乎我必须安装整个-ahooks？"
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
          "updatedTime": 1607394618219,
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
          "updatedTime": 1607394618219,
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
            }
          ],
          "title": "快速上手",
          "locale": "zh-CN"
        },
        "title": "快速上手"
      },
      {
        "path": "/components/scroll/container-with-bar",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'ContainerWithBar__index.en-US.md' */'../../ContainerWithBar/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/ContainerWithBar/index.en-US.md",
          "updatedTime": 1607393838151,
          "title": "ContainerWithBar",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Scroll",
            "path": "/components/scroll"
          },
          "legacy": "/scroll/container-with-bar",
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
        "path": "/zh-CN/components/scroll/container-with-bar",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'ContainerWithBar__index.zh-CN.md' */'../../ContainerWithBar/index.zh-CN.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/ContainerWithBar/index.zh-CN.md",
          "updatedTime": 1607393838152,
          "title": "ContainerWithBar",
          "nav": {
            "title": "Components",
            "path": "/zh-CN/components"
          },
          "group": {
            "title": "Scroll",
            "path": "/zh-CN/components/scroll"
          },
          "legacy": "/scroll/container-with-bar",
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
        "path": "/components/scroll/scroller",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'Scroller__index.en-US.md' */'../../Scroller/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/Scroller/index.en-US.md",
          "updatedTime": 1607393838156,
          "title": "Scroller",
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Scroll",
            "path": "/components/scroll"
          },
          "legacy": "/scroll/scroller",
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
        "path": "/zh-CN/components/scroll/scroller",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'Scroller__index.en-US.md' */'../../Scroller/index.en-US.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/Scroller/index.en-US.md",
          "updatedTime": 1607393838156,
          "title": "Scroller",
          "nav": {
            "title": "Components",
            "path": "/zh-CN/components"
          },
          "group": {
            "title": "Scroll",
            "path": "/zh-CN/components/scroll"
          },
          "legacy": "/scroll/scroller",
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
        "path": "/components/scroll",
        "meta": {},
        "exact": true,
        "redirect": "/components/scroll/container-with-bar"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/scroll"
      },
      {
        "path": "/scroll/container-with-bar",
        "exact": true,
        "redirect": "/zh-CN/components/scroll/container-with-bar"
      },
      {
        "path": "/zh-CN/components/scroll",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/scroll/container-with-bar"
      },
      {
        "path": "/zh-CN/components",
        "meta": {},
        "exact": true,
        "redirect": "/zh-CN/components/scroll"
      },
      {
        "path": "/scroll/scroller",
        "exact": true,
        "redirect": "/zh-CN/components/scroll/scroller"
      }
    ],
    "title": "xy-components"
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
