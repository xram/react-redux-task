interface Address {
  city: string;
  country: string;
  number: string;
  street: string;
  zip: string;
}

export interface CompanyData {
  address: Address;
  description: string;
  email: string;
  id: number;
  image: string;
  name: string;
  phone: string;
}

interface ResponseData {
  clients: CompanyData[];
}

export const getCompaniesData = async () => {
  const response = await fetch("https://api.myjson.com/bins/13pqgi");
  const json: ResponseData = await response.json();

  return json.clients;
};
