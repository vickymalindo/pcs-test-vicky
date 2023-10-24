interface PropsNotification {
  image: string;
  title: string;
  date: string;
  type: string;
  desc: string;
  bgBlue: boolean;
  bgIcon: string;
}

export const dataNotification: PropsNotification[] = [
  {
    image: 'coin',
    title: 'Reimbursement',
    date: 'today',
    type: 'check',
    desc: '<p>Your submission "Lorem ipsum dolor ...." with the" with a total cost of 50,000 has been <b>paid</b>, please check your BRIMO application, thank you</p>',
    bgBlue: true,
    bgIcon: 'bg-green-600',
  },
  {
    image: 'coin',
    title: 'Reimbursement',
    date: 'Yesterday',
    type: 'close',
    desc: '<p>Your submission description has been <b>rejected</b>, please click for details<p>',
    bgBlue: false,
    bgIcon: 'bg-red-600',
  },
  {
    image: 'coin',
    title: 'Reimbursement',
    date: '2022-10-06',
    type: 'arrowRight',
    desc: '<p>Your submission will be <b>processed</b> according to the reimbursement schedule. Please wait</p>',
    bgBlue: true,
    bgIcon: 'bg-blue-600',
  },
  {
    image: 'pill',
    title: 'Sickenss',
    date: '2022-10-05',
    type: 'check',
    desc: '<p>Your submission has been <b>approved</b> by the Superior</p>',
    bgBlue: true,
    bgIcon: 'bg-green-600',
  },
  {
    image: 'pill',
    title: 'Sickenss',
    date: '2022-10-05',
    type: 'close',
    desc: '<p>Your submission has been <b>rejected</b> please confirm with your Superior</p>',
    bgBlue: false,
    bgIcon: 'bg-red-600',
  },
  {
    image: 'pill',
    title: 'Sickenss',
    date: '2022-10-05',
    type: 'arrowRight',
    desc: '<p>Your submission is being <b>reviewed</b> to the Superior for the Approvel process, please wait</p>',
    bgBlue: false,
    bgIcon: 'bg-blue-600',
  },
  {
    image: 'clock',
    title: 'Overtime',
    date: '2022-10-05',
    type: 'check',
    desc: '<p>Your submission has been <b>approved</b> by the Superior</p>',
    bgBlue: true,
    bgIcon: 'bg-green-600',
  },
  {
    image: 'clock',
    title: 'Overtime',
    date: '2022-10-05',
    type: 'close',
    desc: '<p>Your submission has been <b>rejected</b> please confirm with your Superior</p>',
    bgBlue: false,
    bgIcon: 'bg-red-600',
  },
  {
    image: 'clock',
    title: 'Overtime',
    date: '2022-10-05',
    type: 'arrowRight',
    desc: '<p>Your submission is being <b>reviewed</b> to the Superior for the Approvel process, please wait</p>',
    bgBlue: false,
    bgIcon: 'bg-blue-600',
  },
];
