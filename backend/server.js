import app from './src/app.js'
import cluster from "cluster"
import os from 'os'
const totalCPUs = os.cpus().length;
const PORT = process.env.PORT || 4000;
if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    cluster.fork();
  });
} else {
  
}
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });