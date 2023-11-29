/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  generalSidebar: [{type: 'autogenerated', dirName: 'general'}],
  coreSidebar: [{type: 'autogenerated', dirName: 'core'}],
  eSpaceSidebar: [{type: 'autogenerated', dirName: 'espace'}],
  // Core: [
  //   {
  //     type: 'autogenerated',
  //     dirName: 'core',
  //   },
  //   // {
  //   //   type: 'category',
  //   //   label: 'Learn',
  //   //   link: {
  //   //     type: 'doc',
  //   //     id: 'core/learn/learn',
  //   //   },
  //   //   collapsed: false,
  //   //   items: [
  //   //     {
  //   //       type: 'autogenerated',
  //   //       dirName: 'core/learn',
  //   //     },
  //   //     // 添加更多 core/learn 下的文档
  //   //   ],
  //   // },
  //   // {
  //   //   type: 'category',
  //   //   label: 'Build',
  //   //   items: [
  //   //     {
  //   //       type: 'autogenerated',
  //   //       dirName: 'core/build',
  //   //     },
  //   //     // 添加更多 core/build 下的文档
  //   //   ],
  //   // },
  //   // 添加更多 core 下的类别和文档
  // ],
  // Espace: [
  //   'espace/espace',
  //   {
  //     type: 'category',
  //     label: 'Build',
  //     items: [
  //       'espace/build/cross-space-call',
  //       'espace/build/evm-compatibility',
  //       // 添加更多 espace/build 下的文档
  //     ],
  //   },
  //   // 添加更多 espace 下的类别和文档
  // ],
  // General: [
  //   'general/general',
  //   {
  //     type: 'category',
  //     label: 'Build',
  //     items: [
  //       'general/build/build',
  //       // 添加更多 general/build 下的文档
  //     ],
  //   },
  //   // 添加更多 general 下的类别和文档
  // ],
  concepts: [
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> Introduction </medium></b></span>"
    },
    "general/article-collection-links/concept-links",
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> General </medium></b></span>"
    },
    {
      type: 'ref',
      id: "general/conflux-basics/what-is-conflux",
      label: "What is Conflux?"
    },
    {
      type: 'ref',
      id: "general/conflux-basics/spaces",
    },
    {
      type: 'ref',
      id: "general/conflux-basics/accounts",
    },
    {
      type: 'ref',
      id: "general/conflux-basics/transactions",
    },
    {
      type: 'ref',
      id: "general/conflux-basics/contracts",
    },
    {
      type: 'ref',
      id: "general/conflux-basics/gas",
    },
    {
      type: 'ref',
      id: "general/conflux-basics/wallets",
    },
    {
      type: 'ref',
      id: "general/conflux-basics/glossary",
    },
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> Core Space </medium></b></span>"
    },
    {
      type: 'ref',
      id: "core/learn/core-space-basics/accounts",
    },
    {
      type: 'ref',
      id: "core/learn/core-space-basics/addresses",
    },
    {
      type: 'ref',
      id: "core/learn/core-space-basics/sponsor-mechanism",
    },
    {
      type: 'ref',
      id: "core/learn/core-space-basics/storage",
    },
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> eSpace </medium></b></span>"
    },
    {
      type: 'ref',
      id: "espace/build/accounts",
    },
    // {
    //   type: 'autogenerated',
    //   dirName: 'core/learn/core-space-basics'
    // },
    // {
    //   type: 'autogenerated',
    //   dirName: 'espace/learn'
    // },
  ],
  references: [
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> Introduction </medium></b></span>"
    },
    "general/article-collection-links/reference-links",
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> RPC </medium></b></span>"
    },
    {
      type: "category",
      label: "Core Space JSON RPC",
      link: {
        "type": "doc",
        "id": "core/build/json-rpc/json-rpc"
      },
      items: [
        "core/build/json-rpc/cfx-namespace",
        "core/build/json-rpc/pos_rpc",
        "core/build/json-rpc/debug_rpc",
        "core/build/json-rpc/txpool_rpc",
        "core/build/json-rpc/trace_rpc",
        "core/build/json-rpc/pubsub",
      ]
    },
    {
      type: "doc",
      label: "eSpace JSON RPC",
      id: "espace/build/jsonrpc-compatibility",
    },
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> Network Endpoints </medium></b></span>"
    },
    {
      type: "doc",
      id: "core/build/sdks-and-tools/conflux_rpcs",
      label: "Core Space Network Endpoints",
    },
    {
      type: "doc",
      id: "espace/network-endpoints",
      label: "eSpace Network Endpoints",
    },
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> SDKs And Tools </medium></b></span>"
    },
    {
      type: 'doc',
      id: "core/build/sdks-and-tools/sdks",
      label: "Core Space SDKs",
    },
    {
      type: 'doc',
      id: "core/build/sdks-and-tools/tools",
      label: "Core Space Tools",
    },
    {
      type: 'doc',
      id: "espace/DeveloperQuickstart",
      label: "eSpace(Ethereum) Tools Tutorial",
    },
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> Contracts </medium></b></span>"
    },
    {
      type: "category",
      label: "Core Space Internal Contracts",
      link: {
        type: "doc",
        id: "core/learn/core-space-basics/internal-contracts/internal-contracts",
      },
      items: [
        "core/learn/core-space-basics/internal-contracts/admin",
        "core/learn/core-space-basics/internal-contracts/sponsor-whitelist-control",
        "core/learn/core-space-basics/internal-contracts/staking",
        "core/learn/core-space-basics/internal-contracts/conflux-context",
        "core/learn/core-space-basics/internal-contracts/poSRegister",
        "core/learn/core-space-basics/internal-contracts/crossSpaceCall",
        "core/learn/core-space-basics/internal-contracts/params-control",
      ]
    },
    {
      type: "doc",
      id: "espace/build/deployed-contracts",
      label: "eSpace Deployed Contracts",
    },
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> Migration from Ethereum </medium></b></span>"
    },
    {
      type: "doc",
      id: "espace/build/jsonrpc-compatibility",
      label: "eSpace JSON RPC Compatibility",
    },
    {
      type: "doc",
      id: "espace/build/evm-compatibility",
      label: "eSpace EVM Compatibility",
    },
    {
      type: 'html',
      value: "<span class='menu__item'><b><medium> Others </medium></b></span>"
    },
    {
      type: "doc",
      id: "general/run-a-node/configuration-files",
      label: "Node Configuration Files",
    },
    // commented because of i18n build failure
    // {
    //   type: "doc",
    //   id: "general/hardforks/hardforks",
    // },
    {
      type: "doc",
      id: "general/conflux-basics/additional-resources/conflux_papers",
    },
    {
      type: "doc",
      id: "general/conflux-basics/conflux-governance/cips",
    },
  ]
  // tutorials: [
  //   {
  //     type: 'doc',
  //     id: 'general/article-collection-links/tutorial-links',
  //   },
  //   {
  //     type: 'html',
  //     value: "<span class='menu__item'><b><medium> User Guides </medium></b></span>"
  //   },
  //   {
  //     type: "category",
  //     label: "Wallets",
  //     collapsed: false,
  //     link: {
  //       type: "doc",
  //       id: "general/tutorials/wallets/wallets"
  //     },
  //     items: [
  //       {
  //         type: "ref",
  //         id: 'general/tutorials/wallets/fluent',
  //       },
  //       {
  //         type: "ref",
  //         id: 'espace/UserGuide',
  //         label: "Metamask(eSpace)"
  //       },
  //       {
  //         type: "ref",
  //         id: 'general/tutorials/wallets/ledger',
  //       },
  //     ]
  //   },
  //   {
  //     type: "category",
  //     label: "Transferring Funds",
  //     collapsed: false,
  //     items: [
  //       {
  //         type: 'autogenerated',
  //         dirName: 'general/tutorials/transferring-funds',
  //       },
  //     ]
  //   },

  //   {
  //     type: 'html',
  //     value: "<span class='menu__item'><b><medium> Node Deployment </medium></b></span>"
  //   },
  //   "general/run-a-node/run-a-node",
  //   {
  //     type: 'html',
  //     value: "<span class='menu__item'><b><medium> Core Space Dev </medium></b></span>"
  //   },
  //   {
  //     type: 'autogenerated',
  //     dirName: 'core/tutorials'
  //   },
  //   {
  //     type: 'html',
  //     value: "<span class='menu__item'><b><medium> eSpace Dev </medium></b></span>"
  //   },
  //   {
  //     type: 'autogenerated',
  //     dirName: 'espace/tutorials'
  //   },
  // ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
