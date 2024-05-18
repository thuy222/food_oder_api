import express, {Request, Response, NextFunction} from "express"
import { CreateVendorInput } from "../dto";
import { Vendor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";


export const FindVendor = async (id: String | undefined, email?: string) => {

    if(email){
        return await Vendor.findOne({ email: email})
    }else{
        return await Vendor.findById(id);
    }

}

export const CreateVendor = async (req:Request, res: Response, next: NextFunction) => {
    const { name, address, pinCode, foodType, email, password, ownerName, phone }  = <CreateVendorInput>req.body;
    
    const existingVendor = await FindVendor('', email);

    if(existingVendor !== null){
        return res.json({ "message": "A vendor is exist with this email ID"})
    }

    const salt =  await GenerateSalt()
    const userPassword = await GeneratePassword(password, salt);

    const createdVendor =  await Vendor.create({
        name: name,
        address: address,
        pinCode: pinCode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
        lat: 0,
        lng: 0
    })

    return res.json(createdVendor)
}


export const GetVendors = (req:Request, res: Response, next: NextFunction) => {
    
}
export const GetVendorById = (req:Request, res: Response, next: NextFunction) => {
    
}