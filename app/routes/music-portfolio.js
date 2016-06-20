import Ember from 'ember';

//Portfolio examples var blah = ['title','image','description','link'];
var xintana = ['Portfolio Piece: Theme of Xintana','images/xintana.jpg','Made as a concept piece for an action RPG with a pre-Colombian aesthetic. Uses a mix of synths, woodwinds, and tribal-influenced rhythms to reflect the lush nature depicted in concept art.','https://soundcloud.com/mrtengu/theme-of-xintana-concept-piece/s-zHFBM'];
var satellite = ['Remix: Satellite Young - Dividual Heart','images/satelliteyoung.jpg','Remix produced for Japan-based synthpop duo Satellite Young. Features an entirely different aesthetic and chord structure from the original, while preserving the original vocals and solos.','https://www.youtube.com/watch?v=4t7TVao1XKM'];
var inbloom = ['EP: In Bloom','images/inbloom.jpg','A concept EP of eclectic instrumentals meant to convey the emotional progress experienced during transition. Uses a variety of influences in each track to give a distinct emotional mood, IE jazz-waltz inspired drum beats.','https://www.youtube.com/watch?v=zQ8P6_vC3ao&list=PLtBEcjfmrBbjDNIEODSvyXNsSoQacdCI9'];


export default Ember.Route.extend({
      model(){ return [xintana, satellite, inbloom]}
});
