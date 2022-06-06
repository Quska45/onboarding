import { Router } from 'express';
import fs from 'fs';
import * as path from "path";

const router = Router();
let filePath = path.join( __dirname, '../components/contents' );
console.log(filePath);

router.use('/users', (req, res) => {
  let fileNames = fs.readdirSync( filePath );
  let users = fileNames.reduce(function ( acc, cur, i ) {
    acc.push({
      name: 'acc',
      isActive: ''
    });
    return acc;
  }, []);

  res.send( users );
})

export default router
