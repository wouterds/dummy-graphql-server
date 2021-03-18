import faker from 'faker';

type Organization = {
  vat: string;
  name: string;
};

type OrganizationOptional = Partial<Organization>;

const organizationFactory = (override?: OrganizationOptional): Organization => {
  const vat =
    override?.vat ||
    `BE 0${faker.random.number({ min: 200, max: 800 })}.${faker.random.number({
      min: 100,
      max: 900,
    })}.${faker.random.number({
      min: 200,
      max: 900,
    })}`;
  const name = override?.name || faker.company.companyName();

  return {
    vat,
    name,
  };
};

const OrganizationRepository = {
  getByVat: async (vat: string): Promise<Organization> => {
    console.log(`[OrganizationRepository getByVat] ${vat}`);

    return organizationFactory({ vat });
  },

  getAll: async (): Promise<Organization[]> => {
    console.log('[OrganizationRepository getAll]');

    const organizations = [];
    for (let i = 0; i < 100; i++) {
      organizations.push(organizationFactory());
    }

    return organizations;
  },
};

export default OrganizationRepository;
