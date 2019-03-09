var ibmdb=require('ibm_db')
    ,connStr="DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=cpr38340;PWD=f2k1f426nnd90^5r";

    ibmdb.open(connStr)
    .then(db=> console.log('Conecto a la BD'))
    .catch(err=>console.error(err));

module.exports=connStr;