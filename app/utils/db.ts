import { faker } from '@faker-js/faker';
import { User } from '../types/users';
let current = 1;
const createUser = (): User => {
  const fakeBirthday = faker.date
    .birthdate({ min: 15, max: 65, mode: 'age' })
    .getFullYear();
  const currentYear = 2023;

  return {
    id: current++,
    name: faker.person.fullName(),
    age: currentYear - fakeBirthday,
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

const createUsers = (length = 5) => {
  return Array.from({ length }, createUser);
};

export const users = createUsers(10);
