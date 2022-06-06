import { Router } from 'express';
import fs from 'fs';
import * as path from "path";

const router = Router();
let filePath = path.join( __dirname, '../components/contents' );

router.use('/users', (req, res) => {
  let fileNames = fs.readdirSync( filePath );
  let users = fileNames.reduce(function ( acc, cur, i ) {
    acc.push({
      name: cur,
      isActive: ''
    });
    return acc;
  }, []);

  res.send( users );
});

router.use('/userContents/:userName', (req, res) => {
  let fileNames = fs.readdirSync( filePath + '/' +req.params.userName  );

  let userContents = fileNames.reduce(function ( acc, cur, i ) {
    let fileNameArr = cur.split( '.' );
    acc.push({
      name: fileNameArr[0],
      isActive: ''
    });
    return acc;
  }, [{name: 'Select', isActive: 'is-active'}]);

  res.send( userContents )
});

export default router
