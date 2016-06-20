import Ember from 'ember';

//Portfolio examples var blah = ['title','image','description','link'];
var felikitty = ['Logo, Felikitty','images/felikitty.jpg','Inspired by 1980\'s cartoon and video game branding, IE S.W.A.T KATS and Fatal Fury. All color and textures designed in Photoshop using a wide variety of tools and techniques.','images/felikitty.jpg'];
var compendium = ['Album Art, \'Compendium\'','images/compendium.jpg','Angular panorama effect learned through experimentation--no tutorials used in the making. Techniques used include perspective-based skewing, classical photo editing techniques such as masking, cloning, and blending. Employs a screening technique to give the appearance of an aged LP cover.','images/compendium.jpg'];
var halloween = ['LP Cover, Halloween Theme','images/haloween.jpg','Created primarily using compositing and a similar shifted-perspective technique seen in \'Compendium.\' Uses several methods of filtering, dodging and burning, color correction and line-work to achieve an HP Lovecraft inspired aesthetic. Makes use of color and elements of \'body horror\' to achieve an unsettling aesthetic.','images/haloween.jpg'];

export default Ember.Route.extend({
  model(){ return [felikitty, compendium, halloween]}
});
