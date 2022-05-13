import Team from './team';
// eslint-disable-next-line
console.log('worked');

const team = new Team();
team.add('bowman');
// eslint-disable-next-line
console.log(team);
team.addAll('magician', 'swordsman', 'zombie', 'bowman');
// eslint-disable-next-line
console.log(team);
// eslint-disable-next-line
console.log(team.toArray());
