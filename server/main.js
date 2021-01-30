import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  process.env.API_KEY = ``;
});

Meteor.methods({
  async getAPIKEY() {
    new Promise((resolve, reject) => {
      resolve(process.env.API_KEY);
    });
  },
});
