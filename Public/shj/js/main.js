avalon.modules.jquery = {
    exports: jQuery,
    state: 2
};
require.config({
    baseUrl: ASSETS_URL,
    paths: {
        "search":"js/_util/m_search.js",
        "SelectArea":"js/_util/m_select_area.js"
    }
});