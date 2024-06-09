
export interface IProducts {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: any,
    createdAt: string,
    updatedAt: string
    total: number | string;
    amount: number
  }

  export interface ICar{
    visible: boolean,
    setVisible?: (value: boolean) => void;
    count?: number
  }