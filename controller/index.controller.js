var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
var docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });

module.exports.getAllProduct = async (req, res) => {
  try {
    const result = await getAllProductFn();
    res.render("index", { list: result });
  } catch (error) {
    res.render("err");
  }
};
module.exports.deleteProductById = async (req, res) =>{
  const { id } = req.params;
  console.log(id)
  try {
    const result = await deleteProductByIdFn(id);
    console.log(result);
    res.redirect("/index");
  } catch (error) {
    console.log(error);
    res.render("err");
  }
}


let getAllProductFn = async () => {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: "thoitrang",
    };
    docClient.scan(params, function (err, data) {
      if (err) reject(err);
      else resolve(data.Items);
    });
  });
};

let deleteProductByIdFn = async (id) => {
  return new Promise((resolve, reject)=>{
    const params = {
      TableName: "thoitrang",
      Key:{
        masanpham: id
      }
    }
    docClient.delete(params,function(err,data){
      if(err) {
        console.log(err)
        reject(err);
      }
      else resolve({mess:"xoa thanh cong"})
    })
  })
}

