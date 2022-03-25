const Question = require("../Model/QuestionModel")

exports.getQuestion = async (req, res) => {
    Question.find().then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
}
exports.createQuestion = async (req, res) => {
    const question = new Question({...req.body})
    await question.save()
    res.json(question)
}