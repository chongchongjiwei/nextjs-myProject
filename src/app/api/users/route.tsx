
import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient, prisma } from '@prisma/client'
import prisma from "@/../../prisma/client"
import schema from "./schema";

// const prisma = new PrismaClient()
export async function GET(request:NextRequest){
  const users= await prisma.user.findMany();

  return NextResponse.json(users);
}


// export async function POST(request: NextRequest) {
//     const body = await request.json();
//     if (!body.name)
//       return NextResponse.json({ error
//     : "Name is required" }, { status: 400 });
//     return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
//   }
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // 检查是否已有重复
  const check = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (check)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  // 上传数据
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(user, { status: 201 });
}