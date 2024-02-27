import { generateToken } from "../utils/security.util";

const token = generateToken(import.meta.env.APP_OPCENTER_USERNAME, import.meta.env.APP_OPCENTER_PASSWORD);

export async function getList(domainName: string): Promise<INDO[]> {
  return await fetch(`https://${import.meta.env.APP_OPCENTER_HOST}/Modeling/api/${domainName}?$select=Name, Description`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(json => json.value);
}

export async function create(domainName: string, arg: INDO): Promise<string> {
  return await fetch(`https://${import.meta.env.APP_OPCENTER_HOST}/Modeling/api/${domainName}`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
    .then(res => res.json())
    .then(json => json.value);
}

export async function update(domainName: string, name: string, arg: INDO): Promise<string> {
  return await fetch(`https://${import.meta.env.APP_OPCENTER_HOST}/Modeling/api/${domainName}/${name}`, {
    method: 'PUT',
    body: JSON.stringify(arg),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
    .then(res => res.json())
    .then(json => json.value);
}

export async function deletes(domainName: string, name: string): Promise<string> {
  return await fetch(`https://${import.meta.env.APP_OPCENTER_HOST}/Modeling/api/${domainName}/${name}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  })
    .then(res => res.json())
    .then(json => json.value);
}

export interface INDO {
  Name: string;
  Description: string;
}