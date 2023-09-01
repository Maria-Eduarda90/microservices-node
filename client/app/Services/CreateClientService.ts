import Client from "App/Models/Client";

export default class CreateClientServices {
  public async execute(data: CreateClientRequestType) {

    try {
      const email = await Client.findBy('email', data.email);
    
      if(email) throw new Error('Esse email já existe').message;

    } catch(err) {
      throw err;
    }

    const user = await Client.create({
      ...data
    })

    return user;
  }
}