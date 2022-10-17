export default class UtilityMethods
{
    public getTimeStamp() {
      let d = new Date();
      var timeStamp = Date.now();
      return timeStamp;
    }
    public getRandomEmail() {
        var uniqueValue = this.getTimeStamp.toString();
        var randomEmail = "asdmnb" + Date.now() + "@mailinator.com";
        return randomEmail;
      }
    public getRandomString(length: number) {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let result = " ";
        for (let i = length; i > 0; --i)
          result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    public getRandomMobileNumber(length: number) {
        return Math.floor(
          Math.pow(10, length - 1) +
          Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
        );
    }  
    
}
