exports.handler = async (event) => {
  console.log(event);
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const customerId = event.pathParameters.customerId; // /customer/:customerId
  const customer = {
    customerId: customerId,
    customerName: "Customer " + customerId,
  };
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(customer),
  };
  return response;
};
