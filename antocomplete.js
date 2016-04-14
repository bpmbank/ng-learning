function autocomplete(input, dictionary){
    input = input.replace(/[^a-z]/gi, '');
  //return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
  return dictionary.filter(e => e.match(new RegExp(`^${input}`, 'i'))).slice(0, 5);
}
