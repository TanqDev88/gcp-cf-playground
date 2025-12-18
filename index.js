import NodeCache from "node-cache";
import Logger from "./logger.js";
import _ from "lodash";

// 15 min de cache
const cache = new NodeCache({ stdTTL: 900 });

/**
 * URL de la hoja como CSV
 */
const CSV_URL =
  "https://docs.google.com/spreadsheets/d/1g4zYW-EZw7gjZ2_ZNCcn7AATzRsVLBM1aIfoV6vumBY/export?format=csv&gid=0";