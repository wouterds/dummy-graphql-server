import faker from 'faker';

type Person = {
  insz: string;
  firstName: string;
  lastName: string;
  email: string;
};

type PersonOptional = Partial<Person>;

const personFactory = (override?: PersonOptional): Person => {
  const insz =
    override?.insz ||
    `${faker.random.number({ min: 20, max: 99 })}.${faker.random.number({
      min: 1,
      max: 12,
    })}.${faker.random.number({ min: 1, max: 30 })}-${faker.random.number({
      min: 130,
      max: 190,
    })}.${faker.random.number({ min: 40, max: 90 })}`;
  const firstName = override?.firstName || faker.name.firstName();
  const lastName = override?.lastName || faker.name.lastName();
  const email = override?.email || faker.internet.email();

  return {
    insz,
    firstName,
    lastName,
    email,
  };
};

const PersonRepository = {
  getByInsz: async (insz: string): Promise<Person> => {
    console.log(`[PersonRepository getByInsz] ${insz}`);

    return personFactory({ insz });
  },

  getAll: async (): Promise<Person[]> => {
    console.log('[PersonRepository getAll]');

    const persons = [];
    for (let i = 0; i < 100; i++) {
      persons.push(personFactory());
    }

    return persons;
  },
};

export default PersonRepository;
