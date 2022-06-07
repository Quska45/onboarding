import { Router } from 'express';
import fs from 'fs';
import * as path from "path";

const router = Router();
let filePath = path.join( __dirname, '../pages/contents' );

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
  let componentsInfo = require( filePath + `/${req.params.userName}/componentMapper.js` )[ 'default' ];
  let componentsInfoKeys = Object.keys(componentsInfo);

  let userContents = componentsInfoKeys.reduce(function ( acc, cur, i ) {
    acc.push({
      name: cur,
      componentName: componentsInfo[ cur ][ 'componentName' ],
      isActive: ''
    });

    return acc;
  }, [{name: 'Select', componentName: '', isActive: 'is-active'}]);

  res.send( userContents )
});

export default router
