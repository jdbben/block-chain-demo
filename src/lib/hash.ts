import { createHmac, hash } from "node:crypto";

const secret = "abcdefg";
const index = 0;
const data = "I love cupcakes";
export const HashFunc = () => {
  const hash = new Block(data, 4, secret).calculatingHash();
};

class Block {
  data: any;
  diffeculty: number;
  secret: any;

  constructor(data: any, diffeculty: number, secret: any) {
    this.data = data;
    this.diffeculty = diffeculty;
    this.secret = secret;
  }

  Hashgenerator(nonce: number): string {
    const timeStamp = Date.now();
    const hash = createHmac("sha256", this.secret)
      .update(this.data + index + timeStamp + nonce)
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
    return { timeStamp: Date.now(), hash, nonce };
  }

  isValidHash(hash: string): boolean {
    for (let i = 0; i < this.diffeculty; i++) {
      if (hash[i] !== "0") {
        return false;
      }
    }
    return true;
  }

  HistoryOfPreviousHash() {
    let arr: [object] = [{}];
    return arr.push(this.calculatingHash());
  }
}
