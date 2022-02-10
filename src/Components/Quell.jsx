import React, { useState } from "react";

const Quell = () => {
  const [activeTab, setActiveTab] = useState("client");
  return (
    <div>
      <center>
        <div className="devtool_demo">
          <div className="q_navbar">
            <button
              id="client_button"
              onClick={() => setActiveTab("client")}
              style={activeTab === "client" ? { backgroundColor: "#444" } : {}}
            >
              Client
            </button>
            <button
              id="server_button"
              onClick={() => setActiveTab("server")}
              style={activeTab === "server" ? { backgroundColor: "#444" } : {}}
            >
              Server
            </button>
            <button
              id="cache_button"
              onClick={() => setActiveTab("cache")}
              style={activeTab === "cache" ? { backgroundColor: "#444" } : {}}
            >
              Cache
            </button>
            <button
              id="settings_button"
              onClick={() => setActiveTab("settings")}
              style={
                activeTab === "settings" ? { backgroundColor: "#444" } : {}
              }
            >
              Settings
            </button>
          </div>
          <div className="gif_container">
            {activeTab === "client" && (
              <img
                src={"https://i.imgur.com/mdZj4OD.gif"}
                alt="1"
                width={800}
              />
            )}
            {activeTab === "server" && (
              <img
                src={"https://i.imgur.com/FBlvNhI.gif"}
                alt="2"
                width={800}
              />
            )}
            {activeTab === "cache" && (
              <img
                src={"https://i.imgur.com/Wj435ZW.gif"}
                alt="3"
                width={800}
              />
            )}
            {activeTab === "settings" && (
              <img
                src={"https://i.imgur.com/WK5saAJ.gif"}
                alt="4"
                width={800}
              />
            )}
          </div>
        </div>
        <div className="description">
          <p>
            Quell is an open source, lightweight JavaScript library providing a
            client- and server-side caching solution and cache invalidation for
            GraphQL.
          </p>
          <p>
            Quell's schema-governed, type-level normalization algorithm
            deconstructs GraphQL query and mutation responses into individual
            graph nodes to be cached separately as constant-time-readable
            key-value pairs, with references to connected nodes.
          </p>
          <p>
            Subsequent GraphQL requests are then checked against the cached data
            store first, allowing Quell to request only the data it needs by
            dynamically reformulating a new query for what's missing.
          </p>
          <p>
            Query responses are then merged with the data present in cache
            storage and a full response is returned seamlessly.
          </p>
          <p>
            Quell now also features a Chrome Developer Tools extension designed
            for Quell users.
          </p>
          <p></p>
          <p>
            Read more about QuellQL on{" "}
            <a
              style={{ color: "#44a8ff" }}
              href="https://medium.com/@josh.r.jordan/quell-launches-a-new-version-complete-with-a-fully-featured-developer-tool-3cc81cc99315"
            >
              Medium.
            </a>
          </p>
        </div>
        <div className="description2">
          View source code on{" "}
          <a
            style={{ color: "#44a8ff" }}
            href="https://github.com/open-source-labs/Quell"
          >
            github.
          </a>
        </div>
      </center>
    </div>
  );
};

export default Quell;
