import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://www.plutos.one/api/ems/get-previous-poll?campaign_id=5&user_id=undefined&category=entertainment",
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