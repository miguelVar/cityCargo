var ibmdb=require('ibm_db')
    ,connStr="DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=lbx38088;PWD=t1q3qm9-425l3s7j";

    ibmdb.open(connStr)
    .then(db=> console.log('Conecto a la BD'))
    .catch(err=>console.error(err));

module.exports=connStr;