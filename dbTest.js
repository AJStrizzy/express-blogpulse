const db = require('./models')

// async function dbTest() {
//   const article = await db.article.findOne()
//   const comment = await db.comment.create({
//     name: 'Paul Allen',
//     content: 'This is really neat! Thanks for posting.',
//     articleId: article.id
//   })
//   console.log(comment)
// }

// dbTest()




async function test() {
  const article = await db.article.findOne({
    where: { id: 1 },
    include: [db.comment]
  })
  // by using eager loading, the article model should have a comments key
  console.log(article.comments)
}
test()