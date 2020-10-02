import mail from "@sendgrid/mail";

mail.setApiKey(process.env.KEY);

const html = (contact, message) => (`
  <style>
    * {
        font-family: Arial, Helvetica, sans-serif;
    }
  </style>

  <h1>You just got a new message!</h1>

  <p>${message}</p>

  <b>Contact provided by whoever invited the message: </b>${contact} 
`)

const errors = {
  REQUEST_ERROR: {
    status: 400,
    message: "The sent request contains incorrect fields.",
    internal: "The request sent contains some fields that are not accepted or does not have some of the mandatory and necessary ones."
  },
  METHOD_NOT_ALLOWED: {
    status: 405,
    message: "The HTTP method used is not supported.",
    internal: "The verb that can be used for this endpoint is POST."
  }
}

export default async (request, response) => {
  if (request.method == "POST") {
    const contact = request.body.contact, message = request.body.message;

    if (contact == null || message == null)
      return response.status(400).json(errors.REQUEST_ERROR);
    
    const result = await mail.send({
      from: process.env.FROM,
      to: process.env.TO,
      subject: "You just got a new message!",
      html: html(contact, message)
    });

    return response.status(200).json(result);
  }
  else return response.status(405).json(errors.METHOD_NOT_ALLOWED);
}