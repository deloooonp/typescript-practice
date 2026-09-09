// abstract class is like a blueprint similar to intefaces
class TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 9;
    }
}
class Instagram extends TakePhoto {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// You cannot create an object from an abstract class
// const delon = new TakePhoto("test", "test");
// You can create an object using a class that extends the class
const delon = new Instagram("test", "test", 3);
delon.getReelTime();
export {};
