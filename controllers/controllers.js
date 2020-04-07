exports.home = (req, res) => {
  res.render('home', {
    pageName: 'DevJobs',
    tagline: 'Encuentra y publica trabajo para desarolladores',
    bar: true,
    button: true
  });
};