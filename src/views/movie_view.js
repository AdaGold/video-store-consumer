import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },

  render(){
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click .add-to-inventory': 'addMovie',
  },
  addMovie: function(event) {
    event.preventDefault();
    console.log('REACHED addMovie');
    console.log('***********');
    console.log(this.model);
    console.log(this.model.attributes);
    console.log('***********');

    this.model.save(this.model.attributes,{type: 'POST'});

  },
});

export default MovieView;
