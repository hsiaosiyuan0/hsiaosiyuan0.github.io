import React from "react";
import { Html, Styles, Scripts } from "gadget.js";

import "./index.scss";

export default class MobileHtml extends Html {
  render() {
    const { styles, scripts, children } = this.props;

    return (
      <html>
        <head>
          <title>Gadget</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1, user-scalable=no, viewport-fit=cover"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-one-dark.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/toolbar/prism-toolbar.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/line-numbers/prism-line-numbers.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/line-highlight/prism-line-highlight.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/material-icons@0.3.1/iconfont/material-icons.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/material-icons@0.3.1/css/material-icons.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@docsearch/css@3.2.1/dist/style.min.css"
          ></link>
          <Styles list={styles} />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-64334326-2"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-64334326-2');`,
            }}
          />
        </head>
        <body>
          {children}
          <script
            src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-core.min.js"
            data-manual
          ></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-markup.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-clike.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-json.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-javascript.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-jsx.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-typescript.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-tsx.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-bash.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-python.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-xml-doc.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-docker.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-rust.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-nasm.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-c.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-cpp.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-xml-doc.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-go.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/components/prism-nim.min.js"></script>

          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/toolbar/prism-toolbar.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/line-highlight/prism-line-highlight.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs@1.22.0/plugins/show-language/prism-show-language.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/cferdinandi/gumshoe@5.1.1/dist/gumshoe.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/react@16.14.0/umd/react.production.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/react-dom@16.14.0/umd/react-dom.production.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/react@16.14.0/umd/react.production.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/react-dom@16.14.0/umd/react-dom.production.min.js"></script>
          <Scripts list={scripts} />
        </body>
      </html>
    );
  }
}
