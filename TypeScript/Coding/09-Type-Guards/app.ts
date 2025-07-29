// Type Guards -> (type narrowing) and TypeScript Utility Types
// Using typeof and instanceof

function fn(arg: string | number) {
  if (typeof arg === "number") {
    arg.toFixed(2);
  } else if (typeof arg === "string") {
    arg.trim();
  } else {
    throw new Error("pagal how gaya hai kya fraaaaaaaaaaands");
  }
}
fn("hello");
fn(99.999);

class TvRemote {
  switchTvOff() {
    console.log("switching off tv");
  }
}

class CarRemote {
  switchCarOff() {
    console.log("switching off car");
  }
}

const tv = new TvRemote();
const car = new CarRemote();

function switchOff(device: TvRemote | CarRemote) {
  if (device instanceof TvRemote) {
    device.switchTvOff();
  } else if (device instanceof CarRemote) {
    device.switchCarOff();
  } else {
    throw new Error("no remote found!");
  }
}
switchOff(tv);
