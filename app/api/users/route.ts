import { NextResponse } from 'next/server';
import { users } from '@/app/utils/db';

export function GET() {
  return NextResponse.json(users);
}
