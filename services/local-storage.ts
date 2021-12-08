interface Credentials {
  token: string | null
}

class StorageService {
  private static instance: StorageService

  setCredentials(payload: { token: string }): void {
    localStorage.setItem('TOKEN', payload.token)
  }

  getCredentials(): Credentials {
    const token = localStorage.getItem('TOKEN')

    return { token }
  }

  removeCredentials(): void {
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('user-role')
  }

  static getInstance(): StorageService {
    if (this.instance) return this.instance
    this.instance = new StorageService()
    return this.instance
  }
}

// let call = StorageService.getInstance()

// console.log(call.getCredentials(), 'call');

export default StorageService
