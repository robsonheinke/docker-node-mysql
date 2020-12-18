const db = require('../database/connectionDb');

module.exports = {
  create: async (req, res) => {
    const { email, name, lastname, password } = req.body;
    try {
      await db('users').insert({
        email,
        name,
        lastname,
        password,
      });
      return res.status(200).send(`Usuário ${name}, criado com sucesso!`);
    } catch (error) {
      console.log(error.message);
    }
  },
  index: async (req, res) => {
    try {
      const users = await db('users').select('*');
      return res.send(users);
    } catch (error) {
      console.log(error.message);
    }
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await db('users').where({id}).select('*');
      return res.send(user);
    } catch (error) {
      console.log(error.message);
    }
  },
  delete: async (req, res) => {
      try {
        const id = req.params.id;
        const deleted = await db('users').where({id}).del();
        console.log(deleted)
        return res.send('Usuário deletado!')
      } catch (error) {
        console.log(error.message);
        return res.status(400).send('Ops, não deu para deletar!')
      }
  }
};
