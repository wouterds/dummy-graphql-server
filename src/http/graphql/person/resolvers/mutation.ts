type UpdatePersonArgs = {
  insz: string;
  firstName?: string;
  lastName?: string;
};

const updatePerson = async (
  _parent: unknown,
  args: UpdatePersonArgs,
): Promise<boolean> => {
  const { insz, firstName, lastName } = args;

  try {
    // get person by insz
    // update data
    console.log('[mutation updatePerson]', { insz, firstName, lastName });
  } catch {
    return false;
  }

  return true;
};

export default {
  updatePerson,
};
