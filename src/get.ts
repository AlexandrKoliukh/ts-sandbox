export const get = (
  object: object,
  fields: string | string[],
  defaultValue: any = undefined
) => {
  const fieldsArray = Array.isArray(fields) ? fields : fields.split('.');
  try {
    const value = fieldsArray.reduce((acc, i) => {
      return acc[i];
    }, object);

    return value ?? defaultValue;
  } catch (_e) {
    return defaultValue;
  }
};
