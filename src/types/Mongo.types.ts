export type IUser = {
    userID: string | number,
    name: string,
    phone: IUserPhone,
    numberCar: string,
    brand: string,
}

export type IAddAuto = {
    [u: string | number]: {
        phone?: IUserPhone,
        numberCar?: string,
        brand?: string,
    }
}

export type IUserPhone = {
    phoneNational: string,
    phoneInput: string,
}

export type IIsUserPhone = {
    isValid: boolean,
    phone?: {
      phoneInput: string,
      phoneNational: string,
    },
}