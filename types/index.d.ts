enum Type {
  bar = 'bar',
  boxplot = 'boxplot',
  candlestick = 'candlestick',
  chord = 'chord',
  custom = 'custom',
  effectScatter = 'effectScatter',
  funnel = 'funnel',
  gauge = 'gauge',
  graph = 'graph',
  heatmap = 'heatmap',
  line = 'line',
  lines = 'lines',
  map = 'map',
  parallel = 'parallel',
  pictorialBar = 'pictorialBar',
  pie = 'pie',
  radar = 'radar',
  sankey = 'sankey',
  scatter = 'scatter',
  themeRiver = 'themeRiver',
  treemap = 'treemap',
  angleAxis = 'angleAxis',
  axis = 'axis',
  axisPointer = 'axisPointer',
  brush = 'brush',
  calendar = 'calendar',
  dataZoom = 'dataZoom',
  dataZoomInside = 'dataZoomInside',
  dataZoomSelect = 'dataZoomSelect',
  geo = 'geo',
  graphic = 'graphic',
  grid = 'grid',
  gridSimple = 'gridSimple',
  legend = 'legend',
  markArea = 'markArea',
  markLine = 'markLine',
  markPoint = 'markPoint',
  parallelAxis = 'parallelAxis',
  polar = 'polar',
  radiusAxis = 'radiusAxis',
  single = 'single',
  singleAxis = 'singleAxis',
  timeline = 'timeline',
  title = 'title',
  toolbox = 'toolbox',
  tooltip = 'tooltip',
  visualMap = 'visualMap',
  visualMapContinuous = 'visualMapContinuous',
  visualMapPiecewise = 'visualMapPiecewise'
}

declare namespace echartsModules {
  chart: string[];
  component: string[];
  types: Type;
}