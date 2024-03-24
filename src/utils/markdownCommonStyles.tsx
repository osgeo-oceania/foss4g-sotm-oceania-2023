import Blockquote from "../components/Blockquote";
import Button from "../components/Button";
import Table from "../components/Table";

export const markdownCommonStyles = {
  // h1: {
  //   props: {
  //     className: "text-3xl font-medium text-gray-800 md:text-2xl lg:text-3xl",
  //   },
  // },
  // h2: {
  //   props: {
  //     className: "text-2xl font-semibold text-gray-700 capitalize",
  //   },
  // },
  // h3: {
  //   props: {
  //     className: "text-xl font-semibold text-gray-600 capitalize",
  //   },
  // },
  // ul: {
  //   props: {
  //     className: "list-disc list-outside ms-8",
  //   },
  // },
  // p: {
  //   props: {
  //     className: "my-4",
  //   },
  // },
  // ol: {
  //   props: {
  //     className: "list-decimal list-outside ms-8",
  //   },
  // },
  blockquote: {
    component: Blockquote,
  },
  a: {
    // make links buttons
    props: {
      className: "text-blue-500 underline",
      target: "_blank",
    },
  },
  button: {
    component: Button,
  },
  table: {
    component: Table,
  },
  thead: {
    props: {
      className: "bg-gray-800",
    },
  },
  th: {
    props: {
      className:
        "px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-400",
    },
  },
  tbody: {
    props: {
      className: "bg-gray-900 divide-y divide-gray-700",
    },
  },
  td: {
    props: {
      className:
        "px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200",
    },
  },
};
