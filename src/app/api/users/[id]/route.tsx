import { NextRequest, NextResponse } from "next/server";


interface Params {
    params: {
        id: number;
    };
}

export function GET(
  request: NextRequest,
  //   直接使用params 结构，因为api中一般不会有过多参数，如有，可以额外定义interface
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "User not found"}, { status: 404 });
  return NextResponse.json({ id, name: "Castamere" });
}