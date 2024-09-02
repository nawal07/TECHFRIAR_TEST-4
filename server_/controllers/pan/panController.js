const axios = require('axios');

exports.verifyPAN = async (req, res) => {
  const { pan } = req.body;
  const options = {
    method: 'POST',
    url: 'https://aadhaar-number-verification-api-using-pan-number.p.rapidapi.com/api/validation/pan_to_aadhaar',
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host':
        'aadhaar-number-verification-api-using-pan-number.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      pan: pan,
      consent: 'y',
      consent_text:
        'I hear by declare my consent agreement for fetching my information via AITAN Labs API',
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data.result);
    res.status(200).send({
      data:
        response.data.result !== null
          ? response.data.result.link_status
          : response.data.result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
