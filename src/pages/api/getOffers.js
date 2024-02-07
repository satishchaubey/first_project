// pages/api/getOffers.js

import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://vms-be.plutos.one/api/v1/campaigns/promovouchers/5",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
