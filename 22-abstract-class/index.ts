// abstract class is like a blueprint similar to intefaces
abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}

  abstract getSepia(): void;

  getReelTime(): number {
    return 9;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

// You cannot create an object from an abstract class
// const delon = new TakePhoto("test", "test");
// You can create an object using a class that extends the class
const delon = new Instagram("test", "test", 3);

delon.getReelTime();

export {};
