import { NextResponse } from 'next/server';
import { users } from '@/app/utils/db';
import { User } from '@/app/types/users';

// All Users Data
export async function GET() {
  return NextResponse.json({ data: users }, { status: 200 });
}

export async function POST(req: Request, res: any) {
  let { id, name, email, password } = (await req.json()) as User;
  if (!id || !name || !email || !password) {
    return NextResponse.json(
      {
        message: 'Please fill all the required inputs',
      },
      { status: 400 }
    );
  }
}
