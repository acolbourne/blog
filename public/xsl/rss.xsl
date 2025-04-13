<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>RSS Feed</title>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          h2 { color: #333; }
          .item { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="rss/channel/title"/></h1>
        <xsl:for-each select="rss/channel/item">
          <div class="item">
            <h2><xsl:value-of select="title"/></h2>
            <p><xsl:value-of select="description"/></p>
            <small><xsl:value-of select="pubDate"/></small>
            <br/>
            <a href="{link}">Read more</a>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
