const axios = require('axios');

exports.verifyBank = async (req, res, next) => {
  const { bank, ifsc } = req.body;
  const options = {
    method: 'POST',
    url: 'https://bank-account-verification.p.rapidapi.com/v3/tasks/async/verify_with_source/validate_bank_account',
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': 'bank-account-verification.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      task_id: '123',
      group_id: '1234',
      data: {
        bank_account_no: bank,
        bank_ifsc_code: ifsc,
      },
    },
  };

  try {
    const response = await axios.request(options);
    // console.log('RESPONSE', response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

exports.verifyId = async (req, res, next) => {
  const { id } = req.query;
  console.log('1111', id);
  const options = {
    method: 'GET',
    url: 'https://bank-account-verification.p.rapidapi.com/v3/tasks',
    params: {
      request_id: id,
    },
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': 'bank-account-verification.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log('DATA', response.data[0]);
    console.log('RESULT', response.data[0].result);
    res.status(200).send(response.data);
  } catch (error) {
    console.error( error);
    res.status(400).send(error);
  }
};
