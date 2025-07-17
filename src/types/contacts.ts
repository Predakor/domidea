export type Location = {
  label: string;
  address: string;
  link: string;
  iframe: string;
};

export type Phone = {
  label: string;
  prefix: string;
  number: string;
};

export type Email = {
  label: string;
  name: string;
};

export type ContactData = {
  locations: Location[];
  phones: Phone[];
  emails: Email[];
};
