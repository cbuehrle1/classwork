var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/x-men', function(req, res) {

  res.send({
    xmen: [
      {
        character: 'Professor X',
        realName: 'Professor Charles Francis Xavier',
        powers: ['telepathy'],
        imageUrl: 'professorx.jpg',
        description: 'Xavier founded the X-Men and was the original headmaster of the Xavier Institute for Higher Learning.'
      },
      {
        character: 'Cyclops',
        realName: 'Scott Summers',
        powers: ['concusive force beam'],
        imageUrl: 'cyclops.jpg',
        description: "Xavier's first recruit and often the group's field leader. Former headmaster of the Xavier Institute, the former leader of the original X-Factor, and the current leader of an offshoot X-Men team. He also formerly led the X-Men's X-Force squad. Ex-husband of Madelyne Pryor (clone of Jean Grey) and the widower of Jean Grey."
      },
      {
        character: 'Iceman',
        realName: 'Robert Louis "Bobby" Drake',
        powers: ['generate cold', 'control ice'],
        imageUrl: 'iceman.jpg',
        description: 'Second and youngest member of the original team. Former member of the Champions, the Defenders, and X-Factor. Former senior staff member at the Jean Grey School for Higher Learning.'
      },
      {
        character: 'Angel',
        realName: 'Warren Kenneth Worthington III',
        powers: ['large, feathered wings', 'eagle-like vision'],
        imageUrl: 'angel.jpg',
        description: 'Third original team member and the only one to have acted as a costumed hero before joining the X-Men. Former member of the Champions, the Defenders, X-Factor and X-Force.'
      },
      {
        character: 'Beast',
        realName: 'Dr. Henry Philip "Hank" McCoy',
        powers: ['superhuman strength', 'superhuman agility'],
        imageUrl: 'beast.jpg',
        description: "Original team's other scientist. Former member of the Avengers, the Defenders, and X-Factor and currently is an agent of S.W.O.R.D. and the Illuminati. Former vice principal at the Jean Grey School for Higher Learning. Currently the only mutant among a squad of Inhumans."
      },
      {
        character: 'Marvel Girl/Phoenix',
        realName: 'Jean Grey-Summers',
        powers: ['telepathy', 'telekenesis'],
        imageUrl: 'jean-grey.jpg',
        description: "Fifth and final of the team's founding members, although she had met Xavier before the others. Left the team in X-Men vol.1 #94. Rejoined at the end of the Muir Island Saga, X-Factor vol. 1 #70. Wife of Scott Summers. Killed by Kuan-Yin Xorn in New X-Men, vol. 1 #150 (2004) and was later resurrected by the Phoenix Force in X-Men: Phoenix – Endsong (2005) as White Phoenix of the Crown."
      },
    ]
  });
});

app.listen(5010, function() {
  console.log('Listening on port 5010.');
});
