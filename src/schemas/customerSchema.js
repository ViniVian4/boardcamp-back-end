import Joi from 'joi';

const customerSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().min(10).max(11),
  cpf: Joi.string().length(11),
  birthday: Joi.date().less('now').iso(),
});

export default customerSchema;