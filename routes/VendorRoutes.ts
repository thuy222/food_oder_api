import express, {Request, Response, NextFunction} from "express"
import { UpdateVendorProfile, VendorLogin } from "../controllers/VendorController";

const router = express.Router()


router.get('/login', VendorLogin);

router.get('/profile', VendorLogin);
router.patch('/profile', UpdateVendorProfile);


router.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.json({message: "Message from Vendor Route"})
})

export {router as VendorRoute}