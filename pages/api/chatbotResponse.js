const { dockStart } = require('@nlpjs/basic');

async function neuralNetwork(question, callback) {
  const dock = await dockStart({ use: ['Basic', 'Qna'] });
  const nlp = dock.get('nlp');
  await nlp.addCorpus({ filename: 'neuralNetwork/qna.tsv', importer: 'qna', locale: 'en' });
  await nlp.train();
  const response = await nlp.process('en', question);
  callback(response)
}


export default function handler(req, res) {
  neuralNetwork(req.body.data, (r) => res.status(200).send(r))
}
