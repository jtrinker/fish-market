import Rebase from 're-base';

// connection to our firebase database
const base = Rebase.createClass({
    apiKey: "AIzaSyDeiiFtLoDTbp44j9k_ZFShlwwtQt_KObI",
    authDomain: "fish-market-2fca1.firebaseapp.com",
    databaseURL: "https://fish-market-2fca1.firebaseio.com"
});

// whenever we need to work with firebase from any file we just 'import base'
export default base;