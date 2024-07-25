interface Window {
  performance: Performance & {memory : {
    jsHeapSizeLimit: number
    totalJSHeapSize: number
    usedJSHeapSize: number
  }}
}