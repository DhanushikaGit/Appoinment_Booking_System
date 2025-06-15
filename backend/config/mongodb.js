import mongoose from "F:\Appoinment_Booking_Sysytem\backend\config\mongodb.js";




const connectDB = async () => {
mongoose.connection.on('connected',()=>console.log("Database Connnected"))



await mongoose.connect(process.env.MONGO_URI, { dbName: 'prescripto' })
}

export default connectDB;