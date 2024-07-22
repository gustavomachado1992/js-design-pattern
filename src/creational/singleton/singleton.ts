class Client {
  private static instance: this;
  private readonly someData: string;
  constructor() {
    if (typeof Client.instance === 'object') {
      return Client.instance;
    }
    Client.instance = this;
    this.someData = "This data is specific to the single Client instance";
  }
  getData() {
    return this.someData;
  }
}

export default Client;
