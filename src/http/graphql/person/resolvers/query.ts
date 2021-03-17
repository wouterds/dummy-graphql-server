import PersonRepository from 'repositories/person';

type PersonsArgs = {
  limit?: number;
};

const persons = async (_parent: unknown, args: PersonsArgs) => {
  const limit = args.limit || 10;

  const persons = await PersonRepository.getAll();
  const personsWithLimitApplied = persons.slice(0, limit);

  console.log('[query persons]', personsWithLimitApplied);

  return personsWithLimitApplied;
};

type PersonArgs = {
  insz: string;
};

const person = async (_parent: unknown, args: PersonArgs) => {
  const person = await PersonRepository.getByInsz(args.insz);

  console.log('[query person]', person);

  return person;
};

const Query = {
  persons,
  person,
};

export default Query;
