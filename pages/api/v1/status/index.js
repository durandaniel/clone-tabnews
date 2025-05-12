function status(request, response) {
  response.status(200).json({ status: "Ok. 200" });
}

export default status;
