export interface Service {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface Industry {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    services: Service[];
    clients: string[];
  }