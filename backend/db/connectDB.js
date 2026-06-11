import mongoose from "mongoose"
import dns from "node:dns"

// Some ISP DNS resolvers (e.g. Jio/Reliance) refuse the SRV lookups that
// `mongodb+srv://` connection strings require, causing querySrv ECONNREFUSED.
// Force a public resolver so Atlas SRV records resolve regardless of ISP DNS.
dns.setServers(["8.8.8.8", "1.1.1.1"])

const connnectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("DB connected");
        })
        .catch((err) => {
            console.log(err);
        })
}

export default connnectDB