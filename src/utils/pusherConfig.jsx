import Pusher from "pusher-js";

export const pusherInitialization = () => {
  var pusher = new Pusher("82628df56f67349095e7", {
    cluster: "ap2",
  });

  var channel = pusher.subscribe("New-Mail-channel");
  //   console.log("chanel=====", channel);
  channel.bind("newMail", function (data) {
    console.log("data in pusher=========", JSON.stringify(data));
    // alert(JSON.stringify(data));
  });

    return channel;
};