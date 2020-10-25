import FileSaver from 'file-saver'

export default class fileSave {
  static getMusic(res, name) {
    // let blob = new Blob([res], {
    //   type: "audio/mpeg"
    // });
    FileSaver.saveAs(res, name + ".mp3");
  }
}