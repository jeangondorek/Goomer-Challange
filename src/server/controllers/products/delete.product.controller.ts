import { openDB } from '../index.controller';
import { RequestHandler } from 'express';

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID do produto a ser excluído

    const db = await openDB();
    const resposta = await db.run('DELETE FROM products WHERE id = ?', [id]);
    
    if (resposta.changes === 0) {
      res.sendStatus(404);
      return;
    }

    db.close();
    res.status(200).send('deleted'); // Envie uma resposta de sucesso com os dados para o cliente
  } catch (error) {
    console.error(error);
    res.sendStatus(500); // Envie uma resposta de erro para o cliente
  }
};
