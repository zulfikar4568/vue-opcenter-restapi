export async function getListFactory(): Promise<IFactory[]> {
  return await fetch(`https://${import.meta.env.APP_OPCENTER_HOST}/Modeling/api/factories?$select=Name, Description`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.APP_OPCENTER_TOKEN}`
    }
  })
    .then(res => res.json())
    .then(json => json.value);
}

export async function createFactory(arg: IFactory): Promise<string> {
  return await fetch(`https://${import.meta.env.APP_OPCENTER_HOST}/Modeling/api/factories`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      Authorization: `Bearer ${import.meta.env.APP_OPCENTER_TOKEN}`,
      "Content-Type": "application/json"
    },
  })
    .then(res => res.json())
    .then(json => json.value);
}

export async function updateFactory(name: string, arg: IFactory): Promise<string> {
  return await fetch(`https://${import.meta.env.APP_OPCENTER_HOST}/Modeling/api/factories/${name}`, {
    method: 'PUT',
    body: JSON.stringify(arg),
    headers: {
      Authorization: `Bearer ${import.meta.env.APP_OPCENTER_TOKEN}`,
      "Content-Type": "application/json"
    },
  })
    .then(res => res.json())
    .then(json => json.value);
}

export async function deleteFactory(name: string): Promise<string> {
  return await fetch(`https://${import.meta.env.APP_OPCENTER_HOST}/Modeling/api/factories/${name}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${import.meta.env.APP_OPCENTER_TOKEN}`,
      "Content-Type": "application/json"
    },
  })
    .then(res => res.json())
    .then(json => json.value);
}

export interface IFactory {
  Name: string;
  Description: string;
}