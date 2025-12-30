self.onmessage = function (event) {
  console.log("WORKER RECEIVED:", event.data);

  switch (event.data) {
    case "PLEASE": {
      self.postMessage("Yeah, I can do that!");
      break;
    }
    case "SAY HI": {
      self.postMessage("Hi!");
      break;
    }
    case "CLOSE": {
      self.postMessage("Ok, I'll close now.");
      self.close();
      break;
    }
    default: {
      self.postMessage("I don't understand.");
    }
  }
};
