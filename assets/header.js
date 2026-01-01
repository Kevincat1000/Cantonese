:root {
  --header-h: 73px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scrollbar-gutter: stable;
}

body {
  font-family: 'Gentium Book Plus', serif;
  line-height: 1.6;
  padding-top: var(--header-h, 73px);
}

body.no-header-space {
  padding-top: 0;
}
