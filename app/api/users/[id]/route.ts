import { NextResponse } from 'next/server';

export function GET(_: any, res: any) {
  const { id } = res?.params;
  return NextResponse.json({ id });
}
