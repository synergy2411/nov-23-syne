import { IUser } from './user';

export const USER_DATA: IUser[] = [
  {
    firstName: 'bill',
    lastName: 'gates',
    income: 10000,
    isWorking: true,
    dob: new Date('Dec 21, 1965'),
    company: 'Microsoft',
    img: './assets/images/bill.jpg',
    votes: 120,
    comments: [
      { stars: 5, body: 'I like it 👍', author: 'john@test' },
      { stars: 4, body: 'Awesome work.', author: 'jenny@test' },
    ],
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    income: 0,
    isWorking: false,
    dob: new Date('Aug 1, 1965'),
    company: 'Apple',
    img: './assets/images/steve.jpg',
    votes: 180,
    comments: [{ stars: 4, body: 'very well', author: 'john@test' }],
  },
  {
    firstName: 'tim',
    lastName: 'b. lee',
    income: 5000,
    isWorking: true,
    dob: new Date('Jan 21, 1968'),
    company: 'World Wide Web',
    img: './assets/images/tim.jpg',
    votes: 140,
    comments: [],
  },
];
