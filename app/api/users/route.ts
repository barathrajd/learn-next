import { NextResponse } from 'next/server';
import { users } from '@/app/utils/db';
import { User } from '@/app/types/users';

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const { name, age, email, password } = (await req.json()) as User;

  if (!name || !age || !email || !password) {
    return NextResponse.json(
      { error: 'Required filed missed out' },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: 'New User Added' }, { status: 201 });
}
