import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret =process.env.SECRET;
export default function middleware(req){
    const {cookies}=req;

    const jwt = cookies.OursiteJWT;
    const url= req.url;
}