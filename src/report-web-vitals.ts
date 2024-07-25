
import { Metric } from 'web-vitals';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals/attribution.js';

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry: ReportHandler | undefined) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export { reportWebVitals };