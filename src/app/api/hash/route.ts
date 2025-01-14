import { Block } from "@/lib/hash";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const data = searchParams.get("data");
  const type = searchParams.get("type");
  const index = searchParams.get("index");
  if (!index) {
    return NextResponse.json({ message: "Index is required" }, { status: 400 });
  }
  if (!data || data === "") {
    return NextResponse.json({ message: "Data is required" }, { status: 400 });
  }
  if (type === "1") {
    try {
      const hash: string = new Block(
        data,
        Number(process.env.DIFFICULTY) as number,
        process.env.PUBLIC_KEY as string,
        Number(index)
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
  if (type === "0") {
    try {
      const hash = new Block(
        data,
        Number(process.env.DIFFICULTY) as number,
        process.env.PUBLIC_KEY as string,
        Number(index)
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
