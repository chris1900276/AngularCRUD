const router = require("express").Router();

const connection = require("../../ConfigDB/configDB");
 



router.get("/", function (req, res) {
  res.status(200).json({ message: "DataBase Connected" });
});




router.get("/get_all_users",  (req, res) => {
    console.log('get_all_users');
  try {
        connection.query("SELECT * FROM loginbd.usuarios", (err,result,field)=>{
            if(err) throw err;
            res.send(result);
        })
  
  } catch (err) {
    res.send(err);
  }
  
});

router.get("/get_user",  (req, res) => {
  console.log('get_user');
try {
      connection.query(`SELECT * FROM loginbd.usuarios WHERE id = ${req.query.id}`, (err,result,field)=>{
          if(err) throw err;
          res.send(result);
      })

} catch (err) {
  res.send(err);
}

});


router.post("/add_user",  (req, res) => {
    console.log('add_user');
  try {
    
        connection.query(`INSERT INTO loginbd.usuarios (nombre,correo,direccion,telefono) VALUES('${req.body.nombre}','${req.body.correo}','${req.body.direccion}','${req.body.telefono}' )`, (err,result,field)=>{
            if(err) throw err;
            res.send(result);
        })
  
  } catch (err) {
    res.send(err);
  }
});

router.get("/delete_user",  (req, res) => {
  console.log('delete_user');
try {
  
      connection.query(`DELETE FROM loginbd.usuarios WHERE id = ${req.query.id} ` ), (err,result,field)=>{
          if(err) throw err;
          res.send(result);
      }

} catch (err) {
  res.send(err);
}
});

router.post("/update_user",  (req, res) => {
  console.log('update_user');
try {
  
      connection.query(`UPDATE loginbd.usuarios SET nombre = '${req.body.nombre}', correo = '${req.body.correo}', direccion = '${req.body.direccion}', telefono = '${req.body.telefono}' WHERE id = ${req.query.id} ` ), (err,result,field)=>{
          if(err) throw err;
          res.send(result);
      }

} catch (err) {
  res.send(err);
}
});


module.exports = router;
