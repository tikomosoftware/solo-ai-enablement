const fs = require("node:fs");
const path = require("node:path");

const articlesDir = path.resolve(__dirname, "..");
const htmlDir = path.join(articlesDir, "html");
const versionFile = path.resolve(articlesDir, "..", "docs-version.json");
const documentTitle = "Claude Code高機能活用・自動化";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readDocumentVersion() {
  const version = JSON.parse(fs.readFileSync(versionFile, "utf8")).version;
  return String(version);
}

function inlineMarkdown(value) {
  const escaped = escapeHtml(value);
  return escaped
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let listOpen = false;
  let codeOpen = false;
  let codeLang = "";
  let codeLines = [];

  function flushParagraph() {
    if (paragraph.length === 0) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function closeList() {
    if (!listOpen) return;
    html.push("</ul>");
    listOpen = false;
  }

  function closeCode() {
    if (!codeOpen) return;
    const langClass = codeLang ? ` class="language-${escapeHtml(codeLang)}"` : "";
    html.push(`<pre><code${langClass}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    codeOpen = false;
    codeLang = "";
    codeLines = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (codeOpen) {
        closeCode();
      } else {
        flushParagraph();
        closeList();
        codeOpen = true;
        codeLang = trimmed.slice(3).trim();
      }
      continue;
    }

    if (codeOpen) {
      codeLines.push(line);
      continue;
    }

    if (trimmed === "") {
      flushParagraph();
      closeList();
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(trimmed);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const bullet = /^-\s+(.+)$/.exec(trimmed);
    if (bullet) {
      flushParagraph();
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${inlineMarkdown(bullet[1])}</li>`);
      continue;
    }

    paragraph.push(trimmed);
  }

  closeCode();
  flushParagraph();
  closeList();

  return html.join("\n");
}

function slugToHtmlName(fileName) {
  return fileName.replace(/\.md$/i, ".html");
}

function extractTitle(markdown, fallback) {
  const firstHeading = markdown.match(/^#\s+(.+)$/m);
  return firstHeading ? firstHeading[1].trim() : fallback.replace(/\.md$/i, "");
}

function pageTemplate({ title, body, nav, version }) {
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <style>
    :root {
      color-scheme: light;
      --text: #1f2933;
      --muted: #5b6773;
      --border: #d8dee6;
      --surface: #ffffff;
      --code: #f4f6f8;
      --accent: #2563eb;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Yu Gothic", "Meiryo", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.75;
      color: var(--text);
      background: var(--surface);
    }
    main {
      width: min(920px, calc(100% - 32px));
      margin: 0 auto;
      padding: 40px 0 64px;
    }
    nav {
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--border);
      color: var(--muted);
      font-size: 14px;
    }
    nav a { color: var(--accent); text-decoration: none; }
    nav a:hover { text-decoration: underline; }
    .doc-version {
      margin: -20px 0 28px;
      color: var(--muted);
      font-size: 14px;
    }
    h1, h2, h3, h4, h5, h6 {
      line-height: 1.35;
      margin: 1.65em 0 0.65em;
      letter-spacing: 0;
    }
    h1 {
      margin-top: 0;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--border);
      font-size: 32px;
    }
    h2 { font-size: 24px; }
    h3 { font-size: 19px; }
    p, ul, pre { margin: 0 0 1.1em; }
    ul { padding-left: 1.4em; }
    li + li { margin-top: 0.25em; }
    a { color: var(--accent); }
    code {
      padding: 0.12em 0.35em;
      border-radius: 4px;
      background: var(--code);
      font-family: Consolas, "Courier New", monospace;
      font-size: 0.92em;
    }
    pre {
      overflow-x: auto;
      padding: 16px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--code);
      line-height: 1.55;
    }
    pre code {
      padding: 0;
      background: transparent;
      border-radius: 0;
    }
  </style>
</head>
<body>
  <main>
    ${nav}
    <div class="doc-version">資料バージョン ${escapeHtml(version)}</div>
    ${body}
  </main>
</body>
</html>
`;
}

function build() {
  ensureDir(htmlDir);
  const documentVersion = readDocumentVersion();

  const files = fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, "ja"));

  const pages = files.map((file) => {
    const markdown = fs.readFileSync(path.join(articlesDir, file), "utf8");
    return {
      source: file,
      output: slugToHtmlName(file),
      title: extractTitle(markdown, file),
      markdown,
    };
  });

  for (const page of pages) {
    const body = renderMarkdown(page.markdown);
    const nav = `<nav><a href="./index.html">記事一覧</a> / ${escapeHtml(page.title)}</nav>`;
    fs.writeFileSync(
      path.join(htmlDir, page.output),
      pageTemplate({ title: page.title, body, nav, version: documentVersion }),
      "utf8"
    );
  }

  const indexBody = [
    `<h1>${documentTitle}</h1>`,
    "<p>Markdown原本から生成したOneNote貼り付け用HTMLです。</p>",
    "<ul>",
    ...pages.map(
      (page) => `<li><a href="./${page.output}">${escapeHtml(page.title)}</a></li>`
    ),
    "</ul>",
  ].join("\n");

  fs.writeFileSync(
    path.join(htmlDir, "index.html"),
    pageTemplate({
      title: documentTitle,
      body: indexBody,
      nav: "<nav>記事一覧</nav>",
      version: documentVersion,
    }),
    "utf8"
  );

  console.log(`Generated ${pages.length + 1} HTML files in ai-dev-advanced/html/`);
}

build();
