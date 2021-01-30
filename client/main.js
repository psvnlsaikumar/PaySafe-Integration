import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import "./main.html";
import checkout from "../lib/checkout";

Template.checkout.events({
  "submit form": function (event) {
    event.preventDefault();
    let fname = event.target.fname.value;
    let lname = event.target.lname.value;
    let email = event.target.email.value;
    let street = event.target.street.value;
    let city = event.target.city.value;
    let phnumber = event.target.phnumber.value;
    console.log("hellooo + " + JSON.stringify(Meteor.settings));
    checkout();
  },
});
