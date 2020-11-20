import { api } from "../interfaces";

interface Credentials {
  token: string | null;
  role: api.RoleEnum | null;
}

class StorageService {
  private static instance: StorageService;
  
  setCredentials(payload: { token: string; user: api.User }): void {
    const userRole = payload.user.psAccount ? api.RoleEnum.ps : api.RoleEnum.cs;
    
    localStorage.setItem('TOKEN', payload.token);
    localStorage.setItem('user-role', userRole);
  }

  getCredentials(): Credentials {
    const token = localStorage.getItem('TOKEN');
    const role = localStorage.getItem('user-role') as api.RoleEnum | null;

    return { token, role };
  }

  removeCredentials(): void {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('user-role');
  }

  static getInstance(): StorageService {
    if (this.instance) return this.instance;
    this.instance = new StorageService();
    return this.instance;
  }
}

// let call = StorageService.getInstance()

// console.log(call.getCredentials(), 'call');

 export default StorageService;