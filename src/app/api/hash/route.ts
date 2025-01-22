import { Block } from "@/lib/hash";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const data = searchParams.get("data");
  // const type = searchParams.get("type");
  // const index = searchParams.get("index");
  // const prevHash = searchParams.get("prevHash")
  const DATA = {
    data: searchParams.get("data"),
    type: searchParams.get("type"),
    index: searchParams.get("index"),
    prevHash: searchParams.get("prevHash"),
  };
  if (!DATA.index) {
    return NextResponse.json({ message: "Index is required" }, { status: 400 });
  }
  if (!DATA.data || DATA.data === "") {
    return NextResponse.json({ message: "Data is required" }, { status: 400 });
  }
  if (DATA.type === "1") {
    try {
      const hash: string = new Block(
        DATA.data,
        Number(process.env.DIFFICULTY) as number,
        process.env.PUBLIC_KEY as string,
        Number(DATA.index),
        DATA.prevHash as string
      ).RowHash();

      return NextResponse.json({
        hash,
        message: "Hash generated successfully",
      });
    } catch (e) {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
  if (DATA.type === "0") {
    try {
      const hash = new Block(
        DATA.data,
        Number(process.env.DIFFICULTY) as number,
        process.env.PUBLIC_KEY as string,
        Number(DATA.index),
        DATA.prevHash as string
      ).calculatingHash();
      return NextResponse.json({
        hash,
        message: "Hash generated successfully",
      });
    } catch (e) {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}
