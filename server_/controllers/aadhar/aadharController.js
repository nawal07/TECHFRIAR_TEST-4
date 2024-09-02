const axios = require('axios');

exports.verifyAadhar = async (req, res) => {
  const { aadhar } = req.body;
  const options = {
    method: 'POST',
    url: 'https://api.apyhub.com/validate/aadhaar',
    headers: {
      'apy-token': process.env.AADHAR_API_KEY,
      'Content-Type': 'application/json',
    },
    data: { aadhaar: aadhar },
  };
  try {
    const response = await axios.request(options);
    res.status(200).send({ data: response.data.data });
    // console.log('HHHHH',response.data.data)
    // console.log('IIIII',response.data)
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
