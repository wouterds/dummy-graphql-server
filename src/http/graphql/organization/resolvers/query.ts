import OrganizationRepository from 'repositories/organization';

type OrganizationsArgs = {
  limit?: number;
};

const organizations = async (_parent: unknown, args: OrganizationsArgs) => {
  const limit = args.limit || 10;

  const organizations = await OrganizationRepository.getAll();
  const organizationsWithLimitApplied = organizations.slice(0, limit);

  console.log('[query organizations]', organizationsWithLimitApplied);

  return organizationsWithLimitApplied;
};

type OrganizationArgs = {
  vat: string;
};

const organization = async (_parent: unknown, args: OrganizationArgs) => {
  const organization = await OrganizationRepository.getByVat(args.vat);

  console.log('[query organization]', organization);

  return organization;
};

const Query = {
  organizations,
  organization,
};

export default Query;
