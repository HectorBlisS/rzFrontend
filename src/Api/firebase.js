import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBcaQr-uMH7LQcFETQLiXk5LQ1WuG9nrwY",
  authDomain: "togomx-d4928.firebaseapp.com",
  databaseURL: "rocketfund.herokuapp.com",
  projectId: "togomx-d4928",
  storageBucket: "togomx-d4928.appspot.com",
  messagingSenderId: "87733822528"
};

export function signOut() {
  return firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('userToken');
    });
};


firebase.initializeApp(config);


export function getOrCreateChat(userId2) {


  return new Promise(function (res, rej) {


    firebase.auth().onAuthStateChanged(function (user) {

      const chat1 = firebase.database().ref('chats/' + user.uid + '/' + userId2);
      const chat2 = firebase.database().ref('chats/' + userId2 + '/' + user.uid)


      chat1
        .once('value')
        .then(snap => {
          console.log(snap.val());
          if (snap.val() !== null) {
            //  const respuesta = {
            //    messages:converToArray(snap.val()),
            //    rama:chat1
            //  };
            let response = {
              messages: converToArray(snap.val()),
              chat: chat1
            }
            res(response);
          }
          //  if(snap.val() === null) rej(false);

        }); // then

      chat2
        .once('value')
        .then(snap => {
          console.log(snap.val());
          if (snap.val() !== null) {
            let response = {
              messages: converToArray(snap.val()),
              chat: chat2
            }
            res(response);
          } else {

            let response = {
              messages: [],
              chat: chat2
            }
            res(response);

          }
          //  if(snap.val() === null) rej(false);

        }); // then

      //  if(status){
      //    elChat = firebase.database().ref('chats/' + userId2 + '/' + user.uid)
      //     .push({
      //       id:0,
      //       name:'Nuevo todo',
      //       text:'Orale uto!'
      //     });
      //  }
      // res([]);


    }); // user



  });

  function converToArray(obj) {
    let array = [];
    for (let key in obj) {
      let i = obj[key];
      i['id'] = key;
      array.push(i);
    }
    return array;
  }






  //   if (snap.val() === null){
  //     firebase.database().ref('chats/' + chatWith + '/' + user.uid)
  //     .once('value')
  //     .then(snap=>{
  //       if(snap.val() === null){
  //         firebase.database().ref('chats/' + user.uid + '/' + chatWith)
  //         .push({
  //           id:0,
  //           name:'nueva conversación',
  //           date:Date.now(),
  //           text:'Mi primer mensaje'
  //
  //         })
  //       }
  //     })
  //   } else{
  //     for (var key in snap.val()){
  //       let each = snap.val()[key];
  //       each['id'] = key;
  //       this.state.chat.push(each);
  //     }
  //     this.setState({chat:this.state.chat});
  //     console.log('lo que trajo:', this.state.chat);
  //     this.setState({messages:this.state.chat});
  //   }
  // });




}





export function addMessage(userId2, value) {
  if (value === '' || value === null || value === undefined) return false;

  firebase.auth().onAuthStateChanged(function (user) {

    const chat1 = firebase.database().ref('chats/' + user.uid + '/' + userId2);
    const chat2 = firebase.database().ref('chats/' + userId2 + '/' + user.uid);
    const misChat = firebase.database().ref('misChat/' + user.uid + '/' + userId2);
    const suChat = firebase.database().ref('misChat/' + userId2 + '/' + user.uid);






    chat1
      .once('value')
      .then(snap => {
        if (snap.val() !== null) {

          chat1.push({
            userUID: user.uid,
            photoURL: user.photoURL,
            text: value,
            displayName: user.displayName,
            date: Date.now(),
            read: false
          });

          //pedimos el usuario y guardamos en mi lista
          firebase.database().ref('users/' + userId2)
            .once('value')
            .then(snap => {
              let u = snap.val();
              if (u.new !== undefined) {
                console.log(u.new);
              } else {
                u.new = false;
              }
              misChat.set(u);
              //               misChat.set(snap.val())
            });

          //en su chat tambien
          firebase.database().ref('users/' + user.uid)
            .once('value')
            .then(snap => {
              //Probando transaccion
              //               transaction(suChat);
              //Probando transaccion
              let u = snap.val();
              if (u.new !== undefined) {
                console.log(u.new);
              } else {
                u.new = true;
              }
              suChat.set(u);
            });


        } else {
          chat2
            .once('value')
            .then(snap => {

              chat2.push({
                userUID: user.uid,
                photoURL: user.photoURL,
                text: value,
                displayName: user.displayName,
                date: Date.now(),
                read: false
              });

              //pedimos el usuario y guardamos en mi lista
              firebase.database().ref('users/' + userId2)
                .once('value')
                .then(snap => {
                  let u = snap.val();
                  if (u.new !== undefined) {
                    console.log(u.new);
                  } else {
                    u.new = false;
                  }
                  misChat.set(u);
                  //                  misChat.set(snap.val())
                });

              //en su chat tambien
              firebase.database().ref('users/' + user.uid)
                .once('value')
                .then(snap => {
                  let u = snap.val();
                  if (u.new !== undefined) {
                    console.log(u.new);
                  } else {
                    u.new = true;
                  }
                  suChat.set(u);
                });


            }); //then
        }
      }); //then




  }); //user


} //function


//probando transaccion
function transaction(chat) {
  chat.transaction(function (item) {
    //            console.log('en transaccion',item);
    if (item) {
      for (let key in item) {
        item[key].read = true;
      }
      return item;

    }

  });
}


export default firebase;
