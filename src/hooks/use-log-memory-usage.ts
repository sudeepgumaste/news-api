import { useEffect } from "react"

const logMemoryUsage = () => {
  console.log("Memory usage: ", window.performance?.memory?.usedJSHeapSize/1024/1024)
}

const useLogMemoryUsage = () => {
  useEffect(() => {
    const interval = setInterval(logMemoryUsage, 3000)
    return () => clearInterval(interval)
  },[])
}

export default useLogMemoryUsage