const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('DJ92FZL7SG', '9c7036f9f72e6be0655527c3012613d2');
const index = client.initIndex('amazonpoc');



router.get('/', (req, res, next) => {
  if (req.query.query) {
    index.search({
      query: req.query.query,
      page: req.query.page,
    }, (err, content) => {
      res.json({
        success: true,
        message: "Here is your search",
        status: 200,
        content: content,
        search_result: req.query.query
      });
    });
  }
});


module.exports = router;

