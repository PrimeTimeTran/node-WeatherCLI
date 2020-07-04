const { geocode, forecast } = require("./utils/geocode");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {

  geocode(address, (error, {latitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, { summary }) => {
      if (error) {
        return console.log(error);
      }
      console.log("Location: ", location);
      console.log("Forecast Data: ", summary);
    });
  });
}
