import { NextResponse } from 'next/server';
import { users } from '@/app/utils/db';
import { User } from '@/app/types/users';

// Get specific route
export async function GET(_: any, res: any) {
  const { id } = res?.params;

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}

// Login User
export async function POST(req: Request, res: any) {
  let { name, email, password } = (await req.json()) as User;
  const { id } = await res?.params;
  const {
    name: currentUser,
    email: currentEmail,
    password: currentPassword,
  } = users.find((user) => user.id === Number(id)) as User;

  if (
    currentEmail === email &&
    currentUser === name &&
    currentPassword === password
  ) {
    return NextResponse.json({ message: 'Successfully logged In' });
  } else if (!name || !email || !password) {
    return NextResponse.json({
      message: 'Please fill all the required inputs',
    });
  } else {
    return NextResponse.json({ error: 'Invalid Credential' });
  }
}
