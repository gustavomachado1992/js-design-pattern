import Client from './singleton'; // Assuming Client.js is in the same directory

const client1 = new Client(); // This will return the existing instance
console.log(client1.getData()); // Outputs: "This data is specific to the single Client instance"

const client2 = new Client(); // This will also return the existing instance (client1)
console.log(client2 === client1);
