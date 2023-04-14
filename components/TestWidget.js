export default function TestWidget() {
  return (
    <div className="chart">
      <div className="chart__tv " style={{ zIndex: 11 }}>
        <div id="tv_chart_container" style={{ height: "100%" }}>
          <iframe
            id="tradingview_afdde"
            name="tradingview_afdde"
            src="/charting_library/fa-tv-chart.b555c6a4.html#symbol=BTC_IRT&interval=D&widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&locale=fa&uid=tradingview_afdde&clientId=0&userId=0&chartsStorageVer=1.0&debug=false&timezone=Asia%2FTehran&theme=DARK"
            frameBorder={0}
            allowTransparency="true"
            scrolling="no"
            allowFullScreen=""
            style={{ display: "block", width: "100%", height: 1007 }}
          />
        </div>
      </div>
      <div id="chart-tv" className="chart__tv " style={{ zIndex: 10 }}>
        <article
          id="tradingview-widget-0.6361120286207342"
          style={{ width: "100%", height: "100%" }}
        >
          <div
            id="tradingview_fc561-wrapper"
            style={{
              position: "relative",
              boxSizing: "content-box",
              width: "100%",
              height: "100%",
              margin: "0 auto !important",
              padding: "0 !important",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif',
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                padding: "0 !important",
              }}
            >
              <iframe
                id="tradingview_fc561"
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_fc561&symbol=BINANCE%3ABTCUSDT&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=%5B%5D&hideideas=1&theme=Dark&style=1&timezone=Asia%2FTehran&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=fa_IR&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSDT#%7B%22page-uri%22%3A%22bitpin.ir%2Ftrade%2FBTC_IRT%2F%22%7D"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0 !important",
                  padding: "0 !important",
                }}
                frameBorder={0}
                allowTransparency="true"
                scrolling="no"
                allowFullScreen=""
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
