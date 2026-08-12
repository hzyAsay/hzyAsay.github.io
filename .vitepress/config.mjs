import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '胡子怡 - 个人学术主页',
  description: '面向推免申请和导师了解场景的个人学术与项目主页',

  base: '/',
  srcDir: '.',

  srcExclude: [
    'readme.md',
    'README.md',
    'api-examples.md',
    'markdown-examples.md',
    'docs_backup/**'
  ],
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '研究与项目', link: '/projects/' },
      { text: '学习记录', link: '/learning' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: {
      '/projects/': [
        {
          text: '研究与项目',
          items: [
            {
              text: '项目总览',
              link: '/projects/'
            },
            {
              text: '数据建模与研究实践',
              items: [
                {
                  text: 'NIPT 检测时点优化',
                  link: '/projects/nipt'
                },
                {
                  text: '医疗资源适配性研究',
                  link: '/projects/medical-resources'
                }
              ]
            },
            {
              text: 'AI 应用与智能信息处理',
              items: [
                {
                  text: 'CareerTwin CampusOS',
                  link: '/projects/careertwin'
                }
              ]
            },
            {
              text: '数字文化与交互应用',
              items: [
                {
                  text: '傩戏 · 千面神灵的召唤',
                  link: '/projects/nuoxi'
                }
              ]
            },
            {
              text: '软件系统开发',
              items: [
                {
                  text: 'Food Manager',
                  link: '/projects/food-manager'
                },
                {
                  text: 'Online Wardrobe',
                  link: '/projects/online-wardrobe'
                }
              ]
            },
            {
              text: '算法与程序设计实践',
              items: [
                {
                  text: 'Huffman Coding',
                  link: '/projects/huffman'
                },
                {
                  text: 'Big Fish Eat Small Fish',
                  link: '/projects/big-fish'
                }
              ]
            }
          ]
        }
      ],

      '/learning': [
        {
          text: '学习记录',
          items: [
            {
              text: '核心课程',
              link: '/learning#核心课程'
            },
            {
              text: '算法训练',
              link: '/learning#算法训练'
            },
            {
              text: '解题流程',
              link: '/learning#解题流程'
            },
            {
              text: '精选学习主题',
              link: '/learning#精选学习主题'
            },
            {
              text: '竞赛训练',
              link: '/learning#竞赛与能力总结'
            },
            {
              text: '经验总结',
              link: '/learning#经验总结'
            }
          ]
        }
      ],

      '/about': [
        {
          text: '关于我',
          items: [
            {
              text: '个人简介',
              link: '/about#个人简介'
            },
            {
              text: '数据概览',
              link: '/about#数据概览'
            },
            {
              text: '基本信息',
              link: '/about#基本信息'
            },
            {
              text: '研究兴趣',
              link: '/about#研究兴趣'
            },
            {
              text: '代表项目',
              link: '/about#代表性研究与项目'
            },
            {
              text: '发展方向',
              link: '/about#发展方向'
            },
            {
              text: '组织经历',
              link: '/about#组织与综合能力'
            },
            {
              text: '代表性荣誉',
              link: '/about#代表性荣誉'
            },
            {
              text: '技术与工具',
              link: '/about#技术与工具'
            },
            {
              text: '联系方式',
              link: '/about#联系方式'
            }
          ]
        }
      ],

      '/': [
        {
          text: '导航',
          items: [
            {
              text: '首页',
              link: '/'
            },
            {
              text: '研究与项目',
              link: '/projects/'
            },
            {
              text: '学习记录',
              link: '/learning'
            },
            {
              text: '关于我',
              link: '/about'
            }
          ]
        }
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hzyAsay'
      }
    ],

    lastUpdated: true,

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页目录'
    },

    returnToTopLabel: '返回顶部',

    lastUpdatedText: '最后更新'
  }
})