export const generateToken = (username: string, password: string): string => {
  const jsonData = {
    UserName: username,
    Password: {
    IsEncrypted: false,
    Value: password
    },
    UtcOffset: "+07:00:00"
  }

  return btoa(JSON.stringify(jsonData))
}