import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // const product = await prisma.product.findMany();
  // return NextResponse.json(product);
}

export async function POST(request: NextRequest) {
  // const body = await request.json();
  // // body.price = Number(body.price)

  // const validation = schema.safeParse(body);
  // if (!validation.success)
  //   return NextResponse.json(validation.error.errors, { status: 400 });

  // const newProduct = await prisma.product.create({
  //   data: {
  //     name: body.name,
  //     price: Number(body.price)
  //   }
  // });

  // return NextResponse.json(newProduct);
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  NextResponse.json({ id: 10, name: body.name, price: body.price });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  if (body.id > 10)
    return NextResponse.json({ error: "object not found" }, { status: 404 });
  return NextResponse.json({});
}
