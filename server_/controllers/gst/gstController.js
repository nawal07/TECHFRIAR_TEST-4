const axios = require('axios');

exports.verifyGst = async (req, res, next) => {
  const { gst } = req.body;
  const options = {
    method: 'POST',
    url: 'https://gst-verification.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_gst_certificate',
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': 'gst-verification.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      task_id: '74f4c926-250c-43ca-9c53-453e87ceacd1',
      group_id: '8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e',
      data: {
        gstin: gst,
      },
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
