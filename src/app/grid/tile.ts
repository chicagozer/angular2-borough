
export class Tile {

  text: string;
  color: string;
  slot: number;
  header: any;

  constructor(slot: number, text: string, color: string, header:any) {
    this.text = text;
    this.color = color;
    this.slot = slot;
      this.header = header;
  }



}
