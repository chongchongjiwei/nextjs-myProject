import { NextRequest, NextResponse } from 'next/server';

// GET 方法，用于处理动态路由的请求
// export function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } } // 明确指定 params 类型为 { id: string }
// ) {
//   const { id } = params;

//   // 将字符串类型的 id 转换为数字
//   const numId = parseInt(id);

//   // 检查转换后的 id 是否有效
//   if (numId > 10 || isNaN(numId)) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   }

//   // 返回成功响应
//   return NextResponse.json({ id: numId, name: "Castamere" });
// }