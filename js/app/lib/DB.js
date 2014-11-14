var DB = {
  db: null,

  onDeviceReady : function(){
    var errorCB = DB.errorCB,
    successCB = DB.successCB;


    // Check if Local Storeage Avalible on device
    if(DB.supports_html5_storage() === false){
      console.log('fail');
      exit;
    }


    // Create Database Obj
    DB.db = window.openDatabase('local_marvin', '0.1', 'local_marvin', 1000000);



    //Check if 1st time login && if user table exists
    if(DB.db.transaction(function(tx){
      DB.check_user_exists(tx);
    },DB.errorCB,DB.successCB)){

    }else{
      // Create Table
      DB.db.transaction(function(tx){
        DB.create_local_marvin_db(tx);
      },function(){


      },function(){
          // Success
            $.ajax({
              url: 'me',
              success: function(response){
                  console.log(response.status);
              },
              error:function(response){
                  //Show Pop up 
              }
            });

      });
    }
  },



  check_user_exists : function(tx){
    tx.executeSql('SELECT count(*) FROM user');
  },

  create_local_marvin_db : function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS user'
    +'(id unique,'
    +'PersonId ,'
    +'OfficeId ,'
    +'PositionId,'
    +'TeamId ,'
    +'PhoneNumberId,'
    +'EmailAddressId,'
    +'MobileNumberId,'
    +'ImageId,'
    +'DepartmentId,'
    +'PersonDetailId,'
    +'Created,'
    +'FirstName,'
    +'SecondName,'
    +'Birthday,'
    +'Bio,'
    +'DateJoined,'
    +'ActiveDirectoryRoleGroup,'
    +'ActiveDirectoryIdentity,'
    +'NickName,'
    +'ActiveDirectoryPassword,'
    +'Goal,'
    +'Challenge)');
  },

  supports_html5_storage : function () {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  },

  errorCB : function(err) {
    console.log(err);
    return false;
  },

  successCB : function(tx,results) {
    console.log(tx,results);
    return true;
  }


}
