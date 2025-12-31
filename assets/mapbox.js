/* ./assets/mapbox.js */
(function () {
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoia2V2aW5jYXQxMDAiLCJhIjoiY21qbmFyN21yMTYzMzNlcHN5ZHVubTdpbiJ9.m8QPkEMJKLNIMvFyKUgTkw";

  const MAP_STYLE = "mapbox://styles/kevincat100/cmjneo20k000v01sxghqb6aqr";

  function initDiasporaMap() {
    const el = document.getElementById("diaspora-map");
    if (!el || !window.mapboxgl) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: "diaspora-map",
      style: MAP_STYLE,
      center: [160, 27],
      zoom: 1.25,
      projection: "mercator",
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("style.load", () => {
      map.setProjection("mercator");
      map.setTerrain(null);
    });

    // Resize after layout settles
    window.addEventListener("load", () => setTimeout(() => map.resize(), 150));

    map.on("load", () => {
      const points = [
        { title: "Sze Yup", subtitle: "Four regions of Guangdong", country: "China", coords: [112.98, 22.54], minZoom: 1.0 },
        { title: "Ayutthaya Kingdom", subtitle: "Ayutthaya", country: "Thailand", coords: [100.5689, 14.3532], minZoom: 1.0 },
        { title: "Saigon", subtitle: "Ho Chi Minh City", country: "Vietnam", coords: [106.6297, 10.8231], minZoom: 1.0 },
        { title: "Penang", subtitle: "", country: "Malaysia", coords: [100.3354, 5.4141], minZoom: 1.0 },
        { title: "Singapore", subtitle: "", country: "Singapore", coords: [103.8198, 1.3521], minZoom: 1.0 },
        { title: "Honolulu", subtitle: "Hawaii", country: "United States", coords: [-157.8583, 21.3069], minZoom: 1.0 },
        { title: "San Francisco", subtitle: "", country: "United States", coords: [-122.4194, 37.7749], minZoom: 1.0 },
        { title: "Hong Kong", subtitle: "", country: "China", coords: [114.1694, 22.3193], minZoom: 2 },
        { title: "Hà Tiên", subtitle: "", country: "Vietnam", coords: [104.4833, 10.3833], minZoom: 2 },
        { title: "Heungshan", subtitle: "Zhongshan", country: "China", coords: [113.382, 22.515], minZoom: 2 },
      ];

      const routes = [
        { id: "r1", color: "#3d85c6", coords: [[112.98,22.54],[114.0,21.8],[113.2,20.0],[112.0,18.2],[111.0,16.2],[110.2,14.5],[109.5,13.2],[109.0,11.8],[108.2,10.5],[106.8,9.2],[105.2,8.8],[103.6,8.9],[102.0,9.2],[101.0,10.2],[100.6,12.0],[100.5689,14.3532]] },
        { id: "r2", color: "#e69138", coords: [[100.5689,14.3532],[101.0,12.8],[101.6,11.6],[102.4,10.9],[103.3,10.6],[104.0,10.5],[104.4833,10.3833],[104.9,10.0],[105.6,9.6],[106.1,9.8],[106.4,10.2],[106.6297,10.8231]] },
        { id: "r3", color: "#6a329f", coords: [[112.98,22.54],[113.6,20.5],[112.6,18.0],[111.0,15.0],[109.5,12.5],[107.8,10.2],[105.8,8.2],[103.5,6.8],[101.8,6.0],[100.3354,5.4141],[101.6,4.1],[102.7,2.7],[103.3,2.0],[103.8198,1.3521]] },
        { id: "r4", color: "#666666", coords: [[106.6297,10.8231],[122.0,18.0],[138.0,26.0],[154.0,33.0],[170.0,38.0],[186.0,40.5],[202.0,41.5],[218.0,40.5],[232.0,39.2],[237.5806,37.7749]] },
        { id: "r5", color: "#cc0000", coords: [[114.1694,22.3193],[130.0,28.0],[146.0,34.0],[162.0,39.0],[176.0,43.0],[190.0,45.0],[206.0,44.5],[222.0,42.5],[233.0,40.5],[237.5806,37.7749]] },
        { id: "r6", color: "#0b5394", coords: [[113.382,22.515],[128.0,26.0],[145.0,30.0],[160.0,33.0],[175.0,33.5],[190.0,30.5],[202.1417,21.3069]] },
      ];

      function addRoute({ id, coords, color }) {
        map.addSource(id, {
          type: "geojson",
          data: { type: "Feature", geometry: { type: "LineString", coordinates: coords } },
        });

        map.addLayer({
          id: id + "-line",
          type: "line",
          source: id,
          layout: { "line-cap": "round", "line-join": "round" },
          paint: { "line-color": color, "line-width": 1.2, "line-opacity": 0.9 },
        });
      }

      routes.forEach(addRoute);

      const pointsGeoJSON = {
        type: "FeatureCollection",
        features: points.map((p) => ({
          type: "Feature",
          geometry: { type: "Point", coordinates: p.coords },
          properties: {
            title: p.title,
            subtitle: p.subtitle || "",
            country: p.country || "",
            minZoom: p.minZoom ?? 2.9,
            label: p.subtitle ? `${p.title} (${p.subtitle})` : p.title,
          },
        })),
      };

      map.addSource("route-points", { type: "geojson", data: pointsGeoJSON });

      map.addLayer({
        id: "route-points-dot",
        type: "circle",
        source: "route-points",
        paint: {
          "circle-radius": 3,
          "circle-color": "#111",
          "circle-stroke-color": "#fff",
          "circle-stroke-width": 1.6,
        },
      });

      map.addLayer({
        id: "route-points-label",
        type: "symbol",
        source: "route-points",
        filter: [">=", ["zoom"], ["get", "minZoom"]],
        layout: {
          "text-field": ["get", "label"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 2.2, 11, 3.0, 12, 4.5, 14],
          "text-offset": [0, 1.1],
          "text-anchor": "top",
          "text-allow-overlap": false,
        },
        paint: {
          "text-color": "#111",
          "text-halo-color": "#fff",
          "text-halo-width": 1.4,
        },
      });

      map.on("click", "route-points-dot", (e) => {
        const f = e.features && e.features[0];
        if (!f) return;

        const { title, subtitle, country } = f.properties;

        new mapboxgl.Popup({ offset: 18 })
          .setLngLat(f.geometry.coordinates)
          .setHTML(
            `<div style="font-family:system-ui;font-size:13px;line-height:1.25;">
              <div style="font-weight:700;">${title}</div>
              ${subtitle ? `<div style="opacity:.8;">${subtitle}</div>` : ""}
              <div style="opacity:.6;">${country}</div>
            </div>`
          )
          .addTo(map);
      });

      map.on("mouseenter", "route-points-dot", () => (map.getCanv
