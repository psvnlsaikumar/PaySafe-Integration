function checkout(firstName, lastName, email, street, city, phone) {
  paysafe.checkout.setup(
    Meteor.settings.private.API_KEY,
    {
      currency: "USD",
      amount: amount,
      locale: "en_US",
      customer: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        dateOfBirth: {
          day: 1,
          month: 7,
          year: 1990,
        },
      },
      billingAddress: {
        nickName: firstName + lastName,
        street: street,
        street2: "Montessori",
        city: city,
        zip: "95014",
        country: country,
        state: "CA",
      },
      environment: "TEST",
      merchantRefNum: "1559900597607",
      canEditAmount: true,
      merchantDescriptor: {
        dynamicDescriptor: "XYZ",
        phone: "1234567890",
      },
      displayPaymentMethods: ["skrill", "card"],
      paymentMethodDetails: {
        paysafecard: {
          consumerId: "1232323",
        },
        paysafecash: {
          consumerId: "123456",
        },
        sightline: {
          consumerId: "123456",
          SSN: "123456789",
          last4ssn: "6789",
          accountId: "1009688222",
        },
        vippreferred: {
          consumerId: "550726575",
          accountId: "1679688456",
        },
      },
    },
    function (instance, error, result) {
      if (result && result.paymentHandleToken) {
        console.log(result.paymentHandleToken);
        // make AJAX call to Payments API
      } else {
        console.error(error);
        // Handle the error
      }
    },
    function (stage, expired) {
      switch (stage) {
        case "PAYMENT_HANDLE_NOT_CREATED": // Handle the scenario
        case "PAYMENT_HANDLE_CREATED": // Handle the scenario
        case "PAYMENT_HANDLE_REDIRECT": // Handle the scenario
        case "PAYMENT_HANDLE_PAYABLE": // Handle the scenario
        default: // Handle the scenario
      }
    }
  );
}

module.exports = checkout;
