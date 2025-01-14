import { createHmac } from "node:crypto";
import { arrayBuffer } from "node:stream/consumers";

export class Block {
  data: any;
  diffeculty: number;
  secret: any;
  index: number;
  timeStamp: number;
  arr: object[];
  constructor(data: any, diffeculty: number, secret: any, index: number) {
    this.data = data;
    this.diffeculty = diffeculty;
    this.secret = secret;
    this.index = index;
    this.arr = [];
    if (index === 0) {
      this.timeStamp = 1508262800 * 1000;
    } else {
      this.timeStamp = Date.now();
    }
  }
  private historyArray: string[] = [];

  RowHash() {
    return this.Hashgenerator(0);
  }

  Hashgenerator(nonce: number): string {
    const hash = createHmac("sha256", this.secret)
      .update(this.data + this.index + this.timeStamp + nonce)
      .digest("hex");
    return hash;
  }

  calculatingHash() {
    let nonce = 0;
    let hash = this.Hashgenerator(nonce);
    while (!this.isValidHash(hash)) {
      nonce++;
      hash = this.Hashgenerator(nonce);
    }
    const thetime = this.timeStamp;
    const index = this.index;
    this.arr.push({
      index,
      thetime,
      hash,
      nonce,
    });
    return this.arr[this.arr.length - 1];
  }

  isValidHash(hash: string): boolean {
    for (let i = 0; i < this.diffeculty; i++) {
      if (hash[i] !== "0") {
        return false;
      }
    }
    return true;
  }
}
