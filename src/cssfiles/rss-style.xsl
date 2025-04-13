<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title><xsl:value-of select="rss/channel/title"/></title>
        <style>
          body {
            font-family: sans-serif;
            max-width: 700px;
            margin: 2em auto;
            padding: 1em;
            background-color: #f9f9f9;
            color: #333;
          }
          h1 { font-size: 2em; border-bottom: 2px solid #ccc; }
          ul { padding: 0; list-style: none; }
          li { margin-bottom: 2em; }
          a { font-size: 1.2em; color: #007acc; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .pubdate { font-size: 0.9em; color: #888; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="rss/channel/title"/></h1>
        <p><xsl:value-of select="rss/channel/description"/></p>

        <ul>
          <xsl:for-each select="rss/channel/item">
            <li>
              <a href="{link}">
                <xsl:value-of select="title"/>
              </a>
              <div class="pubdate">
                <xsl:value-of select="pubDate"/>
              </div>
              <p><xsl:value-of select="description"/></p>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
