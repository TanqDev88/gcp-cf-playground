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

  /**
 * Cloud Function
 */
export const app = async (req, res) => {
  try {
    const xToken = req.headers["x_token"];

    if (!isValidToken(xToken)) {
      return res.status(401).json({
        error_code: "SecurityException",
        message: "Invalid security information",
      });
    }

    const elements = await fetchList();

    Logger.info(`Se obtuvieron ${elements.length} teléfonos`);

    return res.status(200).json({
      success: true,
      count: elements.length,
      data: elements,
    });

  } catch (error) {
    Logger.error("Error occurred:", error);
    return res.status(500).json({
      error_code: "ServiceException",
      message: "Internal error, please try again later.",
    });
  }
};